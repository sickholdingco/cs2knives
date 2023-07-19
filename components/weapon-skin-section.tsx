import React from "react"
import Link from "next/link"
import type { Skin } from "@prisma/client"
import { SlidersHorizontal } from "lucide-react"

import SkinCard from "./skin-card"

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
        {results.map((item: Skin) => {
          // TODO: maybe put weapon slug on a skin
          const weaponSlug = item.weaponName.toLowerCase().replace(" ", "-")
          const skinSlug = item.slug

          return (
            <Link prefetch={false} href={`/skin/${weaponSlug}/${skinSlug}`}>
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
