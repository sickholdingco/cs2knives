import { navConfig } from "@/config/nav"
import { MainNav } from "@/components/main-nav"

import { MarketNav } from "../../components/market-nav"

interface MainLayoutProps {
  children: React.ReactNode
}

// we can change this later but it being named "marketing" was pissing me off
export default async function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="z-40 flex h-32 w-full items-center border-b border-solid border-b-border bg-background">
        <div className="flex h-20 w-full items-center justify-between px-12 py-6">
          <MarketNav items={navConfig.marketNav} />
        </div>
      </header>
      <main className="flex-1 px-12 py-8 ">{children}</main>
    </div>
  )
}
