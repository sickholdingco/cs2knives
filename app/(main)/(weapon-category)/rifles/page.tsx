import { getSkinsByWeaponClass } from "@/prisma/weapon-queries"

import { rifles } from "@/config/weapons"
import WeaponCardSection from "@/components/weapon-card-section"
import WeaponSkinSection from "@/components/weapon-skin-section"

export default async function WeaponCategoryPage() {
  const results = await getSkinsByWeaponClass("Rifle")
  return (
    <div>
      <WeaponCardSection linkRoot="rifles" weapons={rifles} />
      <WeaponSkinSection category="Rifles" results={results} />
    </div>
  )
}
