import { NextRequest } from "next/server"

function getSpecificSkinListings(
  skinName: string,
  weapon: string,
  start: number = 0
) {
  const url = encodeURI(
    `http://steamcommunity.com/market/search/render/?query=search?q=${weapon} | ${skinName}&category_730_ItemSet%5B%5D=any&category_730_ProPlayer%5B%5D=any&category_730_StickerCapsule%5B%5D=any&category_730_TournamentTeam%5B%5D=any&category_730_Weapon%5B%5D=tag_weapon_${weapon}&appid=730&start=${start}&count=100&norender=1`
  )

  return url
}

export async function GET(req: NextRequest, res: Response) {
  const weapon = req.nextUrl.searchParams.get("weapon")
  const skinName = req.nextUrl.searchParams.get("skinName")

  try {
    if (!weapon || !skinName) {
      throw new Error("Missing weapon or skinName")
    }

    const url = getSpecificSkinListings(skinName, weapon)

    const response = await fetch(url)

    if (response.status === 429) {
      throw new Error("Rate limited")
    }

    const data = await response.json()

    const dataWithDate = {
      ...(data ?? {}),
      lastUpdated: new Date(),
    }

    return new Response(JSON.stringify(dataWithDate), {
      status: 200,
    })
  } catch (error) {
    return new Response(`failed to get prices`, {
      status: 500,
    })
  }
}
