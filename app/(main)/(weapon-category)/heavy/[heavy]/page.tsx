import { getSkinsByWeaponName } from "@/prisma/weapon-queries"

import { heavy } from "@/config/weapons"
import HotDealsBanner from "@/components/hot-deals-banner"
import SkinGrid from "@/components/skin-grid"

export async function generateStaticParams() {
  return heavy.map((weapon) => ({
    name: weapon,
  }))
}

export default async function HeavySkinPage({ params }: { params: any }) {
  const results = await getSkinsByWeaponName("AK-47")

  return (
    <div>
      <HotDealsBanner />
      <SkinGrid skins={results} />
    </div>
  )
}
