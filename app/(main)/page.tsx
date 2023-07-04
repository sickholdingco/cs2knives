import { getAllSkins } from "@/prisma/weapon-queries"

import HotDealsBanner from "@/components/hot-deals-banner"
import WeaponSkinSection from "@/components/weapon-skin-section"

export default async function IndexPage() {
  const results = await getAllSkins()
  return (
    <div>
      <HotDealsBanner />
      <WeaponSkinSection category="Weapons" results={results} />
    </div>
  )
}
