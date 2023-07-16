"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { GUNS_TO_WEAPONS } from "@/config/weapons"

const Breadcrumbs = () => {
  const pathname = usePathname()

  const pathArray = pathname.split("/").filter((x) => x)

  if (pathArray.length === 0) return null

  const correctPathArray = [
    {
      path: "/",
      name: "home",
    },
  ]

  if (pathArray.includes("skin") && pathArray.length === 3) {
    const gunName = pathArray[1]
    const weapon = GUNS_TO_WEAPONS[gunName]

    correctPathArray.push(
      {
        path: `/${weapon}`,
        name: weapon,
      },
      {
        path: `/${weapon}/${gunName}`,
        name: gunName,
      },
      {
        path: "",
        name: decodeURI(pathArray[2]),
      }
    )
  } else {
    pathArray.forEach((path) => {
      correctPathArray.push({
        path: `/${path}`,
        name: path,
      })
    })
  }

  return (
    <nav className="flex flex-wrap text-sm text-foreground">
      {correctPathArray.map((path, index) => {
        return (
          <div key={index} className="flex items-center">
            {index === correctPathArray.length - 1 ? (
              <span className="text-accent">{path.name}</span>
            ) : (
              <Link href={path.path}>{path.name}</Link>
            )}

            {index !== correctPathArray.length - 1 && (
              <span className="mx-2"> &gt; </span>
            )}
          </div>
        )
      })}
    </nav>
  )
}

export default Breadcrumbs
