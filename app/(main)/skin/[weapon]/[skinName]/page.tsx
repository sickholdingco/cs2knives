import { prisma } from "@/prisma/client"
import { getSkinBySlugAndWeapon } from "@/prisma/weapon-queries"

import { PriceTable } from "@/components/price-table"

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

async function updateSkinPriceRange({
  prices,
  weapon,
  skinName,
}: {
  prices: []
  weapon: string
  skinName: string
}) {
  try {
    const priceNumbers = prices.map((item: any) => {
      return parseFloat(item.sell_price_text.replace("$", ""))
    })

    const priceRange =
      priceNumbers.length === 0
        ? "No Listings"
        : "$" +
          Math.min(...priceNumbers).toFixed(2) +
          " - $" +
          Math.max(...priceNumbers).toFixed(2)

    const skin =
      decodeURIComponent(weapon) + " | " + decodeURIComponent(skinName)

    if (skin && prisma) {
      await prisma.skinPriceRange.upsert({
        where: {
          name: skin,
        },
        create: {
          name: skin,
          priceRange: priceRange,
          updatedAt: new Date(),
        },
        update: {
          priceRange: priceRange,
          updatedAt: new Date(),
        },
      })
    }
  } catch (error) {
    console.log(error)
  } finally {
    await prisma.$disconnect()
  }
}

export default async function WeaponSkinPage({
  params,
}: {
  params: {
    weaponSlug: string
    skinSlug: string
  }
}) {
  const skin = await getSkinBySlugAndWeapon(params.skinSlug, params.weaponSlug)

  if (!skin) {
    return (
      <>
        {/* @ts-expect-error */}
        <PriceTable results={[]} />
      </>
    )
  }

  const priceData = await getSkinPrice({
    skinName: skin.name,
    weapon: skin.weaponName,
  })

  await updateSkinPriceRange({
    prices: priceData?.results || [],
    weapon: skin.weaponName,
    skinName: skin.name,
  })

  return (
    <>
      {/* @ts-expect-error */}
      <PriceTable results={priceData?.results || []} />
    </>
  )
}

export const dynamicParams = true
