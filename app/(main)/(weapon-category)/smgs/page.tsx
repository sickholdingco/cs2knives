import WeaponCardSection from "../../../../components/weapon-card-section/weapon-card-section"
import WeaponSkinSection from "../../../../components/weapon-skin-section/weapon-skin-section"
import { smgs } from "../../../../config/weapons"
import { getSkinsByWeaponClass } from "../../../../prisma/weapon-queries"

export default async function WeaponCategoryPage() {
  const results = await getSkinsByWeaponClass("Rifle")
  return (
    <div>
      <WeaponCardSection linkRoot="smgs" weapons={smgs} />
      <WeaponSkinSection category="SMGs" results={results} />
    </div>
  )
}
