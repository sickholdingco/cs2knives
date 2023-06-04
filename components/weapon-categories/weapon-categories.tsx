import WeaponCategoryCard from "./weapon-category-card"

export default function WeaponCategories() {
  return (
    <div className="my-12 flex justify-center gap-8">
      <WeaponCategoryCard>Pistols</WeaponCategoryCard>
      <WeaponCategoryCard>Rifles</WeaponCategoryCard>
      <WeaponCategoryCard>SMGs</WeaponCategoryCard>
      <WeaponCategoryCard>Heavy</WeaponCategoryCard>
    </div>
  )
}
