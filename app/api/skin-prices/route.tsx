function getSpecificSkinListings(
  skinName: string,
  weapon: string,
  start: number = 0
) {
  const url = encodeURI(
    `http://steamcommunity.com/market/search/render/?query=search?q=${skinName}&category_730_ItemSet%5B%5D=any&category_730_ProPlayer%5B%5D=any&category_730_StickerCapsule%5B%5D=any&category_730_TournamentTeam%5B%5D=any&category_730_Weapon%5B%5D=tag_weapon_${weapon}&appid=730&start=${start}&count=100&norender=1`
  )

  return url
}

export async function GET(req: Request, res: Response) {
  try {
    const url = getSpecificSkinListings("Redline", "AK47")

    const response = await fetch(url)

    const data = await response.json()

    return new Response(JSON.stringify(data), {
      status: 200,
    })
  } catch (error) {
    return new Response(`${error} failed to get prices`, {
      status: 500,
    })
  }
}
