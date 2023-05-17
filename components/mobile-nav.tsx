import * as React from "react"
import Link from "next/link"

import { MainNavItem } from "types"
import { cn } from "@/lib/utils"
import { useLockBody } from "@/hooks/use-lock-body"

interface MobileNavProps {
  items: MainNavItem[]
  children?: React.ReactNode
  onClose?: () => void
}

export function MobileNav({ items, children, onClose }: MobileNavProps) {
  useLockBody()

  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto shadow-md animate-in slide-in-from-bottom-80 md:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <nav className="grid h-screen grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
              onClick={onClose} // this is a bit weird? is there a way to have the menu close without manually closing it?
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </div>
  )
}
