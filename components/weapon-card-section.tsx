import React from "react"

import WeaponCategoryCard from "./weapon-category-card"

interface Weapon {
  name: string
  baseImage: string
}

const WeaponCardSection = ({
  weapons,
  linkRoot,
}: {
  weapons: Weapon[]
  linkRoot: string
}) => {
  return (
    <div className="mb-8 grid grid-cols-4 gap-8">
      {weapons.map((weapon) => {
        return (
          <WeaponCategoryCard
            image={weapon.baseImage}
            href={`/${linkRoot}/${weapon.name}`}
            key={weapon.name}
          >
            {weapon.name}
          </WeaponCategoryCard>
        )
      })}
    </div>
  )
}

export default WeaponCardSection
