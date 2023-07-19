import Link from "next/link"
import type { Skin } from "@prisma/client"

import SkinCard from "./skin-card"

export default function SkinGrid(props: { skins: Skin[] }) {
  const { skins } = props
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {skins.map((item: Skin) => {
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
  )
}
