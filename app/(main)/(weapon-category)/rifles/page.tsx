import { getSkinsByWeaponClass } from "@/prisma/weapon-queries"

import { rifles } from "@/config/weapons"
import Breadcrumbs from "@/components/ui/breadcrumbs"
import WeaponCardSection from "@/components/weapon-card-section"
import WeaponSkinSection from "@/components/weapon-skin-section"

export default async function WeaponCategoryPage() {
  const results = await getSkinsByWeaponClass("Rifle")
  const crumbs = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/rifles",
      name: "Rifles",
    },
  ]

  return (
    <>
      <div className="my-4">
        <Breadcrumbs crumbs={crumbs} />
      </div>

      <div>
        <WeaponCardSection linkRoot="rifles" weapons={rifles} />
        <WeaponSkinSection category="Rifles" results={results} />
      </div>
    </>
  )
}
