import Image from "next/image"

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

export default async function WeaponPage({ params }: { params: any }) {
  console.log(params)
  const skin = params.id === "test" ? "Redline" : "Head Shot"
  console.log(skin)
  const url = getSpecificSkinListings(skin, "awp")
  console.log(url)

  // const response = await fetch(url, {
  //   next: { revalidate: 60 },
  // })

  // console.log(response)

  // const data: SkinListing[] = await response.json()
  // console.log(JSON.stringify(data, null, 2))
  return (
    <div className="flex">
      <Card>
        <CardHeader className="gap-4">
          <CardTitle className="text-center font-mono">
            AWP | Dragon Lore
          </CardTitle>
          <div className="rounded-lg bg-covert px-3 py-2 text-center font-inter text-sm">
            Covert
          </div>
        </CardHeader>
        <CardContent className="gap-3">
          <Image src={weapon} alt="test-weapon-card" width={200} height={200} />
          <div className="flex flex-col items-center gap-4 font-inter">
            <p className="font-inter">$1562 - $1812</p>
            <p className="font-inter text-accent">Anubis Case</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function getSpecificSkinListings(
  skinName: string,
  weapon: string,
  start: number = 0
) {
  const url = encodeURI(
    `http://steamcommunity.com/market/search/render/?query=search?q=${skinName}&category_730_Weapon[]=tag_weapon_ak47&appid=730&start=0&count=100&norender=1`
  )

  return url
}
