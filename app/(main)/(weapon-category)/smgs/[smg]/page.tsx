import { getSkinsByWeaponSlug } from "@/prisma/weapon-queries"

import { smgs } from "@/config/weapons"
import HotDealsBanner from "@/components/hot-deals-banner"
import SkinGrid from "@/components/skin-grid"

export async function generateStaticParams() {
  return smgs.map((weapon) => ({
    slug: weapon,
  }))
}

export default async function SMGSkinPage({ params }: { params: any }) {
  const weaponSlug = params.smg
  const results = await getSkinsByWeaponSlug(weaponSlug)

  return (
    <div>
      <HotDealsBanner />
      <SkinGrid skins={results} />
    </div>
  )
}
