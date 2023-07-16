import Image from "next/image"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import weapon from "/public/images/weapon.png"

interface WeaponCardProps {
  image: string
  name: string
  skinCount: number
}

export default function WeaponCard({
  image,
  name,
  skinCount,
}: WeaponCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center font-mono text-2xl">{name}</CardTitle>
      </CardHeader>
      <CardContent className="gap-3">
        <Image src={image ?? weapon} alt="" width={200} height={200} />
      </CardContent>
      <CardFooter className="items-center justify-between">
        <div>{skinCount} Skins</div>
        <div className="text-xs">$69.00 - $420.00</div>
      </CardFooter>
    </Card>
  )
}
