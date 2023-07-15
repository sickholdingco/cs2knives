import { getSkinsByWeaponName } from "@/prisma/weapon-queries"

import { pistols } from "@/config/weapons"
import HotDealsBanner from "@/components/hot-deals-banner"
import SkinGrid from "@/components/skin-grid"

export async function generateStaticParams() {
  return pistols.map((weapon) => ({
    name: weapon,
  }))
}

export default async function PistolSkinPage({ params }: { params: any }) {
  const weapon = params.pistol.replace(/%20/g, " ")

  const results = await getSkinsByWeaponName(weapon)

  return (
    <div>
      <HotDealsBanner />
      <SkinGrid skins={results} />
    </div>
  )
}
