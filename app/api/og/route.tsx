import { ImageResponse } from "@vercel/og"

import { ogImageSchema } from "@/lib/validations/og"

export const runtime = "edge"

const interRegular = fetch(
  new URL("../../../assets/fonts/Inter-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

const interBold = fetch(
  new URL("../../../assets/fonts/CalSans-SemiBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

export async function GET(req: Request) {
  try {
    const fontRegular = await interRegular
    const fontBold = await interBold

    const url = new URL(req.url)
    const values = ogImageSchema.parse(Object.fromEntries(url.searchParams))
    const heading =
      values.heading.length > 140
        ? `${values.heading.substring(0, 140)}...`
        : values.heading

    const paint = "#fff"

    const fontSize = heading.length > 100 ? "70px" : "100px"

    return new ImageResponse(<div>hello</div>, {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: fontRegular,
          weight: 400,
          style: "normal",
        },
        {
          name: "Cal Sans",
          data: fontBold,
          weight: 700,
          style: "normal",
        },
      ],
    })
  } catch (error) {
    return new Response(`Failed to generate image`, {
      status: 500,
    })
  }
}
