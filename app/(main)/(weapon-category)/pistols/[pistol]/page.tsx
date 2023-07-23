import { getSkinsByWeaponSlug, getWeaponBySlug } from "@/prisma/weapon-queries"

import { pistols } from "@/config/weapons"
import Breadcrumbs from "@/components/ui/breadcrumbs"
import HotDealsBanner from "@/components/hot-deals-banner"
import SkinGrid from "@/components/skin-grid"

export async function generateStaticParams() {
  return pistols.map((weapon) => ({
    slug: weapon.slug,
  }))
}

export default async function PistolSkinPage({ params }: { params: any }) {
  const weaponSlug = params.pistol
  const results = await getSkinsByWeaponSlug(weaponSlug)
  const weapon = await getWeaponBySlug(weaponSlug)

  const crumbs = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/pistols",
      name: "Pistols",
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
