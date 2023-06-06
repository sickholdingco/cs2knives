import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import { env } from "@/env.mjs"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`
}

export function getWeaponListingsUrl(weapon: string, start = 0, count = 100) {
  const url = encodeURI(
    `http://steamcommunity.com/market/search/render/?query=search?category_730_Weapon[0]=tag_weapon_${weapon}&appid=730&start=${start}&count=${count}&norender=1`
  )

  return url
}
