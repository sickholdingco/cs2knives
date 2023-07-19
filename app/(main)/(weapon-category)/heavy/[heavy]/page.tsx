import { getSkinsByWeaponSlug } from "@/prisma/weapon-queries"

import { heavy } from "@/config/weapons"
import HotDealsBanner from "@/components/hot-deals-banner"
import SkinGrid from "@/components/skin-grid"

export async function generateStaticParams() {
  return heavy.map((weapon) => ({
    slug: weapon,
  }))
}

export default async function HeavySkinPage({ params }: { params: any }) {
  const weaponSlug = params.heavy
  const results = await getSkinsByWeaponSlug(weaponSlug)

  return (
    <div>
      <HotDealsBanner />
      <SkinGrid skins={results} />
    </div>
  )
}
