import WeaponCardSection from "../../../../components/weapon-card-section/weapon-card-section"
import WeaponSkinSection from "../../../../components/weapon-skin-section/weapon-skin-section"
import { pistols } from "../../../../config/weapons"
import { getSkinsByWeaponClass } from "../../../../prisma/weapon-queries"

export default async function WeaponCategoryPage() {
  const results = await getSkinsByWeaponClass("Pistol")
  return (
    <div>
      <WeaponCardSection linkRoot="pistols" weapons={pistols} />
      <WeaponSkinSection category="Pistols" results={results} />
    </div>
  )
}
