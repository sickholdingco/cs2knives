import { getSkinsByWeaponClass } from "@/prisma/weapon-queries"

import { smgs } from "@/config/weapons"
import WeaponCardSection from "@/components/weapon-card-section"
import WeaponSkinSection from "@/components/weapon-skin-section"

export default async function WeaponCategoryPage() {
  const results = await getSkinsByWeaponClass("Rifle")
  return (
    <div>
      <WeaponCardSection linkRoot="smgs" weapons={smgs} />
      <WeaponSkinSection category="SMGs" results={results} />
    </div>
  )
}
