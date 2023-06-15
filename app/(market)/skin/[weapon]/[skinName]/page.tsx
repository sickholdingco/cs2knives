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

export default async function Post({ params }: { params: { slug: string } }) {
  return <pre>{JSON.stringify(params, null, 2)}</pre>
}

export const dynamicParams = false
