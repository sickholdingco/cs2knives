import { getSkinsByWeaponClass } from "@/prisma/weapon-queries"

import { pistols } from "@/config/weapons"
import Breadcrumbs from "@/components/ui/breadcrumbs"
import WeaponCardSection from "@/components/weapon-card-section"
import WeaponSkinSection from "@/components/weapon-skin-section"

export default async function WeaponCategoryPage() {
  const results = await getSkinsByWeaponClass("Pistol")
  const crumbs = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/pistols",
      name: "Pistols",
    },
  ]

  return (
    <>
      <div className="my-4">
        <Breadcrumbs crumbs={crumbs} />
      </div>

      <div>
        <WeaponCardSection linkRoot="pistols" weapons={pistols} />
        <WeaponSkinSection category="Pistols" results={results} />
      </div>
    </>
  )
}
