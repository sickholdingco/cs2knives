import { navConfig } from "@/config/nav"
import { MainNav } from "@/components/main-nav"

interface MainLayoutProps {
  children: React.ReactNode
}

// we can change this later but it being named "marketing" was pissing me off
export default async function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={navConfig.mainNav} />
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}
