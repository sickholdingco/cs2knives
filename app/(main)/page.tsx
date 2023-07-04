import Link from "next/link"
import { PrismaClient } from "@prisma/client"
import { SlidersHorizontal } from "lucide-react"

import HotDealsBanner from "../../components/hot-deals-banner/hot-deals-banner"
import SkinCard from "../../components/skin-card/skin-card"

const getWeaponSkins = async () => {
  const prisma = new PrismaClient()
  try {
    const results = await prisma.skin.findMany({
      take: 50,
      select: {
        name: true,
        collectionName: true,
        rarity: true,
        baseImage: true,
      },
      orderBy: {
        name: "asc",
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

export default async function IndexPage() {
  const results = await getWeaponSkins()
  return (
    <div>
      <HotDealsBanner />
      <div className="mb-4 flex justify-between font-flex text-2xl font-semibold">
        <h2>All Weapons</h2>
        <div className="flex items-center gap-1">
          <h2>Filter</h2>
          <SlidersHorizontal className="h-4" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
