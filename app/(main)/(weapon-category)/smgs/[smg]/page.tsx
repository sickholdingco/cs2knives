import HotDealsBanner from "../../../../../components/hot-deals-banner/hot-deals-banner"
import SkinGrid from "../../../../../components/skin-grid/skin-grid"
import { smgs } from "../../../../../config/weapons"
import { getSkinsByWeaponName } from "../../../../../prisma/weapon-queries"

export async function generateStaticParams() {
  return smgs.map((weapon) => ({
    name: weapon,
  }))
}

export default async function SMGSkinPage({ params }: { params: any }) {
  const results = await getSkinsByWeaponName("AK-47")

  return (
    <div>
      <HotDealsBanner />
      <SkinGrid skins={results} />
    </div>
  )
}
