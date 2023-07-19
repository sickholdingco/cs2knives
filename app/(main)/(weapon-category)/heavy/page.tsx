import { getSkinsByWeaponClass } from "@/prisma/weapon-queries"

import { heavy } from "@/config/weapons"
import Breadcrumbs from "@/components/ui/breadcrumbs"
import WeaponCardSection from "@/components/weapon-card-section"
import WeaponSkinSection from "@/components/weapon-skin-section"

export default async function WeaponCategoryPage() {
  const results = await getSkinsByWeaponClass("Heavy")
  const crumbs = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/heavy",
      name: "Heavy",
    },
  ]

  return (
    <>
      <div className="my-4">
        <Breadcrumbs crumbs={crumbs} />
      </div>
      <div>
        <WeaponCardSection linkRoot="heavy" weapons={heavy} />
        <WeaponSkinSection category="Heavy" results={results} />
      </div>
    </>
  )
}
