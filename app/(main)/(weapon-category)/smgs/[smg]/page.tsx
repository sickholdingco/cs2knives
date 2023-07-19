import { getSkinsByWeaponSlug, getWeaponBySlug } from "@/prisma/weapon-queries"

import { smgs } from "@/config/weapons"
import Breadcrumbs from "@/components/ui/breadcrumbs"
import HotDealsBanner from "@/components/hot-deals-banner"
import SkinGrid from "@/components/skin-grid"

export async function generateStaticParams() {
  return smgs.map((weapon) => ({
    slug: weapon.slug,
  }))
}

export default async function SMGSkinPage({ params }: { params: any }) {
  const weaponSlug = params.smg
  const results = await getSkinsByWeaponSlug(weaponSlug)
  const weapon = await getWeaponBySlug(weaponSlug)

  const crumbs = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/smgs",
      name: "SMGs",
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
