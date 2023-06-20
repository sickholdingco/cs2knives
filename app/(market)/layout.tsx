import { MarketNav } from "../../components/market-nav"
import Breadcrumbs from "../../components/ui/breadcrumbs"
import { navConfig } from "../../config/nav"

export default function MarketLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 flex h-32 items-center border-b border-solid border-b-border bg-background">
        <div className="flex h-20 w-full items-center justify-between py-6">
          <MarketNav items={navConfig.marketNav} />
        </div>
      </header>
      <main className="mx-8 my-2 flex-1">
        {
          <>
            <div className="my-4">
              <Breadcrumbs />
            </div>

            {children}
          </>
        }
      </main>
    </div>
  )
}
