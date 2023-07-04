import HotDealsBanner from "../../../../../components/hot-deals-banner/hot-deals-banner"
import SkinGrid from "../../../../../components/skin-grid/skin-grid"
import { pistols } from "../../../../../config/weapons"
import { getSkinsByWeaponName } from "../../../../../prisma/weapon-queries"

export async function generateStaticParams() {
  return pistols.map((weapon) => ({
    name: weapon,
  }))
}

export default async function PistolSkinPage({ params }: { params: any }) {
  const results = await getSkinsByWeaponName("AK-47")

  return (
    <div>
      <HotDealsBanner />
      <SkinGrid skins={results} />
    </div>
  )
}
