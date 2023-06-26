"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

import { MainNavItem } from "types"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { MobileNav } from "@/components/mobile-nav"

import { Input } from "./ui/input"
import karambit from "/public/images/karambit.png"

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

export function MarketNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  return (
    <div className="flex w-full justify-between">
      <div className="flex w-full items-center justify-between gap-6 md:gap-10">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={karambit} alt="karambit" width={32} height={32} />
          <span className="font-bold sm:inline-block">{siteConfig.name}</span>
        </Link>
        <div>
          {items?.length ? (
            <nav className="hidden gap-6 md:flex">
              {items?.map((item, index) => (
                <Link
                  key={index}
                  href={item.disabled ? "#" : item.href}
                  className={cn(
                    "flex items-center p-3 text-lg font-medium transition-colors hover:opacity-80 sm:text-sm",
                    item.href.startsWith(`/${segment}`)
                      ? "border-b-2 border-accent text-accent"
                      : "text-foreground/60",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          ) : null}
        </div>
        <Input placeholder="search" />
      </div>

      <div>
        <button
          className="flex items-center space-x-2 md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <Icons.close /> : <Icons.menu />}
        </button>
        {showMobileMenu && items && (
          <MobileNav items={items} onClose={() => setShowMobileMenu(false)}>
            {children}
          </MobileNav>
        )}
      </div>
    </div>
  )
}
