import Image from "next/image"
import Link from "next/link"

import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import weapon from "/public/images/weapon.png"

interface WeaponCategoryCardProps {
  children: React.ReactNode
  href: string
  image: string
}

export default function WeaponCategoryCard({
  children,
  href,
  image,
}: WeaponCategoryCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center font-mono text-2xl">
          {children}
        </CardTitle>
      </CardHeader>
      <CardContent className="gap-3">
        <Image src={image ?? weapon} alt="category" width={200} height={200} />
        <Button asChild variant="accent" className="font-flex">
          <Link href={href}>View All</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
