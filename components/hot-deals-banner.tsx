import React from "react"
import Image from "next/image"

import { Button } from "./ui/button"
import { Card, CardContent, CardTitle } from "./ui/card"
import weapon from "/public/images/weapon.png"

const HotDealsBanner = () => {
  return (
    <Card className="mb-14">
      <CardTitle className="mb-2 text-center font-mono font-bold">
        Today&apos;s hot deal
      </CardTitle>
      <CardContent className="gap-2">
        <h3 className="font-inter text-base font-bold text-[#C7C2C2]">
          New anubis collection
        </h3>
        <Image src={weapon} alt="test-weapon-card" width={200} height={200} />
        <Button variant="accent" className="font-flex text-xs font-medium">
          See the collection
        </Button>
      </CardContent>
    </Card>
  )
}

export default HotDealsBanner
