import { getSkinsByWeaponSlug, getWeaponBySlug } from "@/prisma/weapon-queries"

import { rifles } from "@/config/weapons"
import Breadcrumbs from "@/components/ui/breadcrumbs"
import HotDealsBanner from "@/components/hot-deals-banner"
import SkinGrid from "@/components/skin-grid"

export async function generateStaticParams() {
  return rifles.map((weapon) => ({
    slug: weapon.slug,
  }))
}

export default async function RifleSkinPage({ params }: { params: any }) {
  const weaponSlug = params.rifle
  const results = await getSkinsByWeaponSlug(weaponSlug)
  const weapon = await getWeaponBySlug(weaponSlug)

  const crumbs = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/rifles",
      name: "Rifles",
    },
    {
      path: "",
      name: weapon?.name ?? "",
    },
  ]

  return (
    <>
      <div className="my-4">
        <Breadcrumbs crumbs={crumbs} />
      </div>

      <div>
        <HotDealsBanner />
        <SkinGrid skins={results} />
      </div>
    </>
  )
}
