import { getSkinsByWeaponSlug } from "@/prisma/weapon-queries"

import { rifles } from "@/config/weapons"
import HotDealsBanner from "@/components/hot-deals-banner"
import SkinGrid from "@/components/skin-grid"

export async function generateStaticParams() {
  return rifles.map((weapon) => ({
    slug: weapon,
  }))
}

export default async function RifleSkinPage({ params }: { params: any }) {
  const weaponSlug = params.rifle
  const results = await getSkinsByWeaponSlug(weaponSlug)

  return (
    <div>
      <HotDealsBanner />
      <SkinGrid skins={results} />
    </div>
  )
}
