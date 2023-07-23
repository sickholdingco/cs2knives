import { getSkinsByWeaponClass } from "@/prisma/weapon-queries"

import { smgs } from "@/config/weapons"
import Breadcrumbs from "@/components/ui/breadcrumbs"
import WeaponCardSection from "@/components/weapon-card-section"
import WeaponSkinSection from "@/components/weapon-skin-section"

export default async function WeaponCategoryPage() {
  const results = await getSkinsByWeaponClass("SMG")
  const crumbs = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/smgs",
      name: "SMGs",
    },
  ]

  return (
    <>
      <div className="my-4">
        <Breadcrumbs crumbs={crumbs} />
      </div>
      <div>
        <WeaponCardSection linkRoot="smgs" weapons={smgs} />
        <WeaponSkinSection category="SMGs" results={results} />
      </div>
    </>
  )
}
