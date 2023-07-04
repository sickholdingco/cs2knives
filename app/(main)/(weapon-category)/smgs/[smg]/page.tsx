import { getSkinsByWeaponName } from "@/prisma/weapon-queries"

import { smgs } from "@/config/weapons"
import HotDealsBanner from "@/components/hot-deals-banner"
import SkinGrid from "@/components/skin-grid"

export async function generateStaticParams() {
  return smgs.map((weapon) => ({
    name: weapon,
  }))
}

export default async function SMGSkinPage({ params }: { params: any }) {
  const weapon = params.smg.replace(/%20/g, " ")

  const results = await getSkinsByWeaponName(weapon)

  return (
    <div>
      <HotDealsBanner />
      <SkinGrid skins={results} />
    </div>
  )
}
