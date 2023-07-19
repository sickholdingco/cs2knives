"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { GUNS_TO_WEAPONS } from "@/config/weapons"

interface BreadcrumbsProps {
  crumbs: {
    path: string
    name: string
  }[]
}

const Breadcrumbs = ({ crumbs }: BreadcrumbsProps) => {
  // const pathname = usePathname()

  // const pathArray = pathname.split("/").filter((x) => x)

  // if (pathArray.length === 0) return null

  // const correctPathArray = [
  //   {
  //     path: "/",
  //     name: "home",
  //   },
  // ]

  // if (crumbs) {
  //   const gunName = pathArray[1]
  //   const weapon = GUNS_TO_WEAPONS[gunName]

  //   correctPathArray.push(
  //     {
  //       path: `/${weapon}`,
  //       name: weapon,
  //     },
  //     {
  //       path: `/${weapon}/${gunName}`,
  //       name: decodeURI(gunName),
  //     },
  //     {
  //       path: "",
  //       name: decodeURI(pathArray[2]),
  //     }
  //   )
  // } else {
  //   pathArray.forEach((path) => {
  //     correctPathArray.push({
  //       path: `/${path}`,
  //       name: decodeURI(path),
  //     })
  //   })
  // }

  return (
    <nav className="flex flex-wrap text-sm text-foreground">
      {crumbs.map((crumb, index) => {
        return (
          <div key={index} className="flex items-center">
            {index === crumbs.length - 1 ? (
              <span className="text-accent">{crumb.name}</span>
            ) : (
              <Link href={crumb.path}>{crumb.name}</Link>
            )}

            {index !== crumbs.length - 1 && (
              <span className="mx-2"> &gt; </span>
            )}
          </div>
        )
      })}
    </nav>
  )
}

export default Breadcrumbs
