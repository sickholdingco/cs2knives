import WeaponCardSection from "../../../../components/weapon-card-section/weapon-card-section"
import WeaponSkinSection from "../../../../components/weapon-skin-section/weapon-skin-section"
import { heavy } from "../../../../config/weapons"
import { getSkinsByWeaponClass } from "../../../../prisma/weapon-queries"

export default async function WeaponCategoryPage() {
  const results = await getSkinsByWeaponClass("Heavy")

  return (
    <div>
      <WeaponCardSection linkRoot="heavy" weapons={heavy} />
      <WeaponSkinSection category="Heavy" results={results} />
    </div>
  )
}
