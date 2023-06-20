import Link from "next/link"
import { connect } from "@planetscale/database"

import SkinCard from "../../../../components/skin-card/skin-card"

export const revalidate = 30

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

const getWeaponSkins = async (weapon: string) => {
  const config = {
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  }

  const conn = connect(config)

  const results = await conn.execute(
    `SELECT * FROM Skin WHERE weapon_name = ?
    ORDER BY 
    CASE
      WHEN rarity = 'Consumer Grade' THEN 1
      WHEN rarity = 'Industrial' THEN 2
      WHEN rarity = 'Mil-spec' THEN 3
      WHEN rarity = 'Restricted' THEN 4
      WHEN rarity = 'Classified' THEN 5
      WHEN rarity = 'Covert' THEN 6
      WHEN rarity = 'Contraband' THEN 7
      ELSE 8
    END`,
    [weapon]
  )

  return results
}

export async function generateStaticParams() {
  return weapons.map((weapon) => ({
    name: weapon,
  }))
}

export default async function WeaponPage({ params }: { params: any }) {
  const skins = await getWeaponSkins(params.name)

  const results = skins.rows

  return (
    <div className="flex w-full flex-wrap justify-center gap-8">
      {results.map((item: any) => {
        const split = item.name.split(" | ")

        const skinName = split[1]

        return (
          <Link prefetch={false} href={`/skin/${params.name}/${skinName}`}>
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
