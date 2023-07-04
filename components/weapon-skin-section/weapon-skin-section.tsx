import React from "react"
import Link from "next/link"
import type { Skin } from "@prisma/client"
import { SlidersHorizontal } from "lucide-react"

import SkinCard from "../skin-card/skin-card"

const WeaponSkinSection = (props: { results: Skin[]; category: string }) => {
  const { results, category } = props

  return (
    <>
      <div className="mb-4 flex justify-between font-flex text-2xl font-semibold">
        <h2>All {category}</h2>
        <div className="flex items-center gap-1">
          <h2>Filter</h2>
          <SlidersHorizontal className="h-4" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {results.map((item: any) => {
          const split = item.name.split(" | ")
          const skinName = split[1]
          const weaponName = split[0]

          return (
            <Link prefetch={false} href={`/skin/${weaponName}/${skinName}`}>
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
    </>
  )
}

export default WeaponSkinSection
