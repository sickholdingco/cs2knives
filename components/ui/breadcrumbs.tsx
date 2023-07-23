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
