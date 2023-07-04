import Link from "next/link"
import { PrismaClient } from "@prisma/client"

import HotDealsBanner from "../../../../../components/hot-deals-banner/hot-deals-banner"
import SkinCard from "../../../../../components/skin-card/skin-card"

const rifles = [
  {
    name: "AK-47",
    baseImage:
      "http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_ak47.a320f13fea4f21d1eb3b46678d6b12e97cbd1052.png",
    skinCount: 45,
  },
  {
    name: "AUG",
    baseImage:
      "http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_aug.6b97a75aa4c0dbb61d81efb6d5497b079b67d0da.png",
    skinCount: 37,
  },
  {
    name: "AWP",
    baseImage:
      "http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_awp.2899e1c6345ed05d62bdbe112db1b117d022e477.png",
    skinCount: 39,
  },
  {
    name: "FAMAS",
    baseImage:
      "http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_famas.c897878873beb9e9ca4c68ef3a666869c6e78031.png",
    skinCount: 33,
  },
  {
    name: "G3SG1",
    baseImage:
      "http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_g3sg1.986d0e07f58c81c99aa5a47d86340f4c3d400339.png",
    skinCount: 28,
  },
  {
    name: "Galil AR",
    baseImage:
      "http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_galilar.b84153658afdb7dc26a9854e566fde3fc42c22ef.png",
    skinCount: 33,
  },
  {
    name: "M4A1-S",
    baseImage:
      "http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_m4a1_silencer.a8d2a028fa33eb117d6d7665303c3316169c33f7.png",
    skinCount: 34,
  },
  {
    name: "M4A4",
    baseImage:
      "http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_m4a1.39b3bd8d556e5cdebb79d60902442986eb9aedff.png",
    skinCount: 39,
  },
  {
    name: "SCAR-20",
    baseImage:
      "http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_scar20.1552c7b64dfe9e542a3b730edb80e21dcc6d243d.png",
    skinCount: 26,
  },
  {
    name: "SG 553",
    baseImage:
      "http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_sg556.74040869391ea2ab25777f3670a6015191a73e6c.png",
    skinCount: 34,
  },
  {
    name: "SSG 08",
    baseImage:
      "http://media.steampowered.com/apps/730/icons/econ/weapons/base_weapons/weapon_ssg08.271a856f50fd6ac1014334098b1a43d61bddb892.png",
    skinCount: 32,
  },
]

const getWeaponSkins = async (weaponName: string) => {
  const prisma = new PrismaClient()
  try {
    const results = await prisma.skin.findMany({
      where: {
        weaponName: decodeURIComponent(weaponName),
      },
    })
    return results
  } catch (error) {
    console.error(error)
    return []
  } finally {
    await prisma.$disconnect()
  }
}

export async function generateStaticParams() {
  return rifles.map((weapon) => ({
    name: weapon,
  }))
}

export default async function RiflePage({ params }: { params: any }) {
  const results = await getWeaponSkins("AK-47")

  return (
    <div>
      <HotDealsBanner />
      <div className="grid gap-8 md:grid-cols-3 xl:grid-cols-4">
        {results.map((item: any) => {
          const split = item.name.split(" | ")
          const skinName = split[1]

          return (
            <Link prefetch={false} href={`/skin/${"AK-47"}/${skinName}`}>
              <SkinCard
                name={item.name}
                collection={item.collectionName}
                rarity={item.rarity}
                key={item.name}
                skinImage={item.baseImage}
              />
            </Link>
          )
        })}
      </div>
    </div>
  )
}
