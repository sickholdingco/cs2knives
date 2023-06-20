import { PriceTable } from "../../../../../components/price-table/price-table"

export const revalidate = 60

function getSpecificSkinListings(
  skinName: string,
  weapon: string,
  start: number = 0
) {
  const weaponQueryParam = decodeURIComponent(weapon)
  const skinNameQueryParam = decodeURIComponent(skinName)
  const url = encodeURI(
    `http://steamcommunity.com/market/search/render/?query=search?q=${weaponQueryParam} | ${skinNameQueryParam}&category_730_ItemSet%5B%5D=any&category_730_ProPlayer%5B%5D=any&category_730_StickerCapsule%5B%5D=any&category_730_TournamentTeam%5B%5D=any&category_730_Weapon%5B%5D=tag_weapon_${weaponQueryParam}&appid=730&start=${start}&count=100&norender=1`
  )

  return url
}

async function getSkinPrice({
  weapon,
  skinName,
}: {
  weapon: string
  skinName: string
}) {
  try {
    const url = getSpecificSkinListings(skinName, weapon)

    const res = await fetch(url)

    const priceData = await res.json()

    return priceData
  } catch (error) {
    return {
      results: [],
    }
  }
}

export default async function WeaponSkinPage({
  params,
}: {
  params: {
    weapon: string
    skinName: string
  }
}) {
  const priceData = await getSkinPrice({
    skinName: params.skinName,
    weapon: params.weapon,
  })

  return (
    <>
      {/* @ts-expect-error */}
      <PriceTable results={priceData.results} />
    </>
  )
}

export const dynamicParams = true
