import Image from "next/image"

import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import weapon from "/public/images/weapon.png"

interface WeaponCategoryCardProps {
  children?: React.ReactNode
}

export default function WeaponCategoryCard({
  children,
}: WeaponCategoryCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center font-mono text-2xl">
          {children}
        </CardTitle>
      </CardHeader>
      <CardContent className="gap-3">
        <Image src={weapon} alt="category" width={200} height={200} />
        <Button variant="accent" className="font-flex">
          View All
        </Button>
      </CardContent>
    </Card>
  )
}
