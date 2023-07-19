import Link from "next/link"
import type { Skin } from "@prisma/client"

import SkinCard from "./skin-card"

export default function SkinGrid(props: { skins: Skin[] }) {
  const { skins } = props
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {skins.map((skin: Skin) => {
        return (
          <Link prefetch={false} href={`/skin/${skin.slug}`}>
            <SkinCard
              name={skin.name}
              collection={skin.collectionName}
              rarity={skin.rarity}
              key={skin.name}
              skinImage={skin.baseImage}
            />
          </Link>
        )
      })}
    </div>
  )
}
