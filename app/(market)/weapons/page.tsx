import Link from "next/link"

import WeaponCard from "../../../components/weapon-card/weapon-card"
import { weapons } from "./utils/weapons"

export default async function WeaponsPage() {
  return (
    <div>
      {/* <WeaponCategories /> */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between font-flex">
          {/* <h2 className="text-2xl font-semibold">All Weapons</h2> */}
          {/* <div className="flex items-center gap-1 text-2xl font-semibold">
            <h2>Filter</h2>
            <Filter className="h-4" />
          </div> */}
        </div>
        <div className="flex w-full flex-wrap justify-center gap-8">
          {Object.keys(weapons).map((category) => {
            return (
              <div className="flex flex-col gap-4">
                <h2
                  id={category}
                  className="my-4 flex justify-center text-2xl font-semibold"
                >
                  {category}
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                  {/* @ts-expect-error */}
                  {weapons[category].map((weapon) => (
                    <Link href={`/weapons/${weapon.name}`}>
                      <WeaponCard
                        name={weapon.name}
                        key={weapon.name}
                        image={weapon.baseImage}
                        skinCount={weapon.skinCount}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
