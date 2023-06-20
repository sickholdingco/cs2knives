"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Breadcrumbs = () => {
  const pathname = usePathname()

  const pathArray = pathname.split("/").filter((x) => x)

  if (pathArray.length === 1) return null

  const correctPathArray = pathArray.map((path, index) => {
    if (path === "skin") {
      return {
        path: "/weapons",
        name: "weapons",
      }
    }

    if (index === 1 && pathArray.length === 3) {
      return {
        path: `/weapons/${path}`,
        name: path,
      }
    }

    if (index === 2 && pathArray.length === 3) {
      return {
        path: "",
        name: path,
      }
    }

    return {
      path: `/${path}`,
      name: path,
    }
  })

  return (
    <nav className="flex flex-wrap text-sm text-foreground">
      {correctPathArray.map((path, index) => {
        return (
          <div key={index} className="flex items-center">
            {index === pathArray.length - 1 ? (
              <span className="text-accent">{path.name}</span>
            ) : (
              <Link href={path.path}>{path.name}</Link>
            )}

            {index !== pathArray.length - 1 && <span className="mx-2">/ </span>}
          </div>
        )
      })}
    </nav>
  )
}

export default Breadcrumbs
