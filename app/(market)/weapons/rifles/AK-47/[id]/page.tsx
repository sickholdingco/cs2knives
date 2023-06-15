import SkinCard from "../../../../../../components/skin-card/skin-card"

function getSpecificSkinListings(skinName: string, weapon: string, start = 0) {
  const url = encodeURI(
    `http://steamcommunity.com/market/search/render/?query=search?q=${skinName}&category_730_ItemSet%5B%5D=any&category_730_ProPlayer%5B%5D=any&category_730_StickerCapsule%5B%5D=any&category_730_TournamentTeam%5B%5D=any&category_730_Weapon%5B%5D=tag_weapon_${weapon}&appid=730&start=${start}&count=100&norender=1`
  )

  return url
}

export default async function AKSkin({ params }: { params: { id: string } }) {
  const { id } = params
  const url = getSpecificSkinListings(id, "ak47", 0)
  console.log(url)

  const response = await fetch(url, {
    next: {
      revalidate: 60,
    },
  })

  const data = await response.json()

  return (
    <div className="flex w-full flex-wrap justify-center gap-8">
      {data.results.map((item: any) => {
        return (
          <SkinCard
            name={item.name}
            collection={item.name}
            rarity="Covert"
            key={item.name}
            skinImage={""}
          />
        )
      })}
    </div>
  )
}
