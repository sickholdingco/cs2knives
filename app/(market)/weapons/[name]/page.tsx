import Image from "next/image"
import Link from "next/link"
import { connect } from "@planetscale/database"

import SkinCard from "../../../../components/skin-card/skin-card"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card"
import weapon from "/public/images/weapon.png"

const skinListing = {
  name: "AK-47 | Redline (Minimal Wear)",
  hash_name: "AK-47 | Redline (Minimal Wear)",
  sell_listings: 97,
  sell_price: 11208,
  sell_price_text: "$112.08",
  app_icon:
    "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/730/69f7ebe2735c366c65c0b33dae00e12dc40edbe4.jpg",
  app_name: "Counter-Strike: Global Offensive",
  asset_description: {
    appid: 730,
    classid: "5356464208",
    instanceid: "480085569",
    background_color: "",
    icon_url:
      "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqPv9NLPF2G1UsZFw373Cp96kigbgrUBuY22nLIWUcgRvN17Y8lnrlbrm157quJ3XiSw0p7BLliM",
    tradable: 1,
    name: "AK-47 | Redline (Minimal Wear)",
    name_color: "D2D2D2",
    type: "Classified Rifle",
    market_name: "AK-47 | Redline (Minimal Wear)",
    market_hash_name: "AK-47 | Redline (Minimal Wear)",
    commodity: 0,
  },
  sale_price_text: "$107.21",
}

type SkinListing = {
  name: string
  hash_name: string
  sell_listings: number
  sell_price: number
  sell_price_text: string
  app_icon: string
  app_name: string
  asset_description: {
    appid: number
    classid: string
    instanceid: string
    background_color: string
    icon_url: string
    tradable: number
    name: string
    name_color: string
    type: string
    market_name: string
    market_hash_name: string
    commodity: number
  }
  sale_price_text: string
}

const weapons = [
  "AK-47",
  "AUG",
  "AWP",
  "CZ75-Auto",
  "Desert Eagle",
  "Dual Berettas",
  "FAMAS",
  "Five-SeveN",
  "G3SG1",
  "Galil AR",
  "Glock-18",
  "M249",
  "M4A1-S",
  "M4A4",
  "MAC-10",
  "MAG-7",
  "MP5-SD",
  "MP7",
  "MP9",
  "Negev",
  "Nova",
  "P2000",
  "P250",
  "P90",
  "PP-Bizon",
  "R8 Revolver",
  "Sawed-Off",
  "SCAR-20",
  "SG 553",
  "SSG 08",
  "Tec-9",
  "UMP-45",
  "USP-S",
  "XM1014",
]

// TODO get this from prisma
type Skin = {
  name: string
  weapon_name: string
  base_image: string
  rarity: string
  release_date: string
  collection_name: string
  souvenir_available: number
  stattrak_available: number
}

export async function generateStaticParams() {
  return weapons.map((weapon) => ({
    name: weapon,
  }))
}

export default async function WeaponPage({ params }: { params: any }) {
  console.log({ params })
  const res = await fetch(
    `http://localhost:3000/api/weapons?name=${params.name}`,
    {
      next: {
        revalidate: 600,
      },
    }
  )

  const results = await res.json()

  console.log({ results })

  return (
    <div className="flex w-full flex-wrap justify-center gap-8">
      {results.map((item: any) => {
        const split = item.name.split(" | ")

        const skinName = split[1]

        return (
          <Link href={`/skin/${params.name}/${skinName}`}>
            <SkinCard
              name={item.name}
              collection={item.collection_name}
              rarity={item.rarity}
              key={item.name}
              skinImage={item.base_image}
            />
          </Link>
        )
      })}
    </div>
  )
}

export const dynamicParams = false
// export const revalidate = 30
// export const runtime = "edge"
