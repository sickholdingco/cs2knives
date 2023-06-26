import Image from "next/image"
import { PrismaClient } from "@prisma/client"

import PriceRange from "../../components/skin-card/price-range"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import { cn } from "../../lib/utils"
import weapon from "/public/images/weapon.png"

const prisma = new PrismaClient()
interface SkinCardProps {
  name: string
  rarity: string
  collection: string
  skinImage: string
}

const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case "Consumer Grade":
      return "bg-consumerGrade"
    case "Industrial":
      return "bg-industrial"
    case "Mil-spec":
      return "bg-milSpec"
    case "Restricted":
      return "bg-restricted"
    case "Classified":
      return "bg-classified"
    case "Covert":
      return "bg-covert"
    case "Contraband":
      return "bg-red-500"
    default:
      return "bg-gray-500"
  }
}

async function getSkinPrice(name: string) {
  const results = await prisma.skinPriceRange.findFirst({
    where: {
      name: name,
    },
  })

  const priceRange = results ? results.priceRange : "$0.00 - $0.00"
  return priceRange
}

export default function SkinCard({
  name,
  rarity,
  collection,
  skinImage,
}: SkinCardProps) {
  const range = getSkinPrice(name)
  return (
    <Card className="w-[300px]">
      <CardHeader className="gap-4">
        <CardTitle className="text-center font-mono">{name}</CardTitle>
        <div
          className={cn(
            "rounded-lg bg-covert px-3 py-2 text-center font-inter text-sm",
            getRarityColor(rarity)
          )}
        >
          {rarity}
        </div>
      </CardHeader>
      <CardContent className="gap-3">
        <Image
          src={skinImage ?? weapon}
          alt="test-weapon-card"
          width={200}
          height={200}
        />
        <div className="flex flex-col items-center gap-4 font-inter">
          {/*@ts-ignore*/}
          <PriceRange range={range} />
          <p className="text-center font-inter text-accent">{collection}</p>
        </div>
      </CardContent>
    </Card>
  )
}
