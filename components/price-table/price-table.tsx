import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type SkinListing = {
  name: string
  hash_name: string
  sell_listings: number
  sell_price: number
  sell_price_text: string
  app_icon: string
  app_name: string
  asset_description: {
    appid: number
    classid: string
    instanceid: string
    background_color: string
    icon_url: string
    tradable: number
    name: string
    name_color: string
    type: string
    market_name: string
    market_hash_name: string
    commodity: number
  }
  sale_price_text: string
}

type PriceTableProps = {
  weapon: string
  skinName: string
}

async function getSkinPrice({
  weapon,
  skinName,
}: {
  weapon: string
  skinName: string
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/skin-prices?weapon=${weapon}&skinName=${skinName}`,
    {
      next: {
        revalidate: 600,
      },
    }
  )

  const priceData = await res.json()

  return priceData
}

const minutesAgo = (date: Date) => {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const minutes = Math.floor(diff / 1000 / 60)

  return minutes
}

export async function PriceTable({ skinName, weapon }: PriceTableProps) {
  const res = await getSkinPrice({ skinName, weapon })

  const results: SkinListing[] = res.results ?? []
  const lastFetched = minutesAgo(new Date(res?.lastUpdated))

  return (
    <div>
      <Table>
        <TableCaption>Steam Prices: {lastFetched} minutes ago</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Quality</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Listings</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.map((listing) => (
            <TableRow key={listing.hash_name}>
              <TableCell className="font-medium">
                <a
                  href={encodeURI(
                    `https://steamcommunity.com/market/listings/730/${listing.hash_name}`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {listing.hash_name}
                </a>
              </TableCell>

              <TableCell>{listing.sell_price_text}</TableCell>
              <TableCell>{listing.sell_listings}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
