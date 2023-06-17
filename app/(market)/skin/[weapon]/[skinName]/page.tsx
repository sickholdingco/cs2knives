import { PriceTable } from "../../../../../components/price-table/price-table"

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/skin`)

  const skins = await res.json()

  // @ts-ignore
  return skins.map((skin) => {
    const split = skin.name.split(" | ")

    return {
      weapon: split[0],
      skinName: split[1],
    }
  })
}

export default async function Post({
  params,
}: {
  params: {
    weapon: string
    skinName: string
  }
}) {
  return (
    <>
      {/* @ts-expect-error */}
      <PriceTable skinName={params.skinName} weapon={params.weapon} />
    </>
  )
}

export const dynamicParams = false
