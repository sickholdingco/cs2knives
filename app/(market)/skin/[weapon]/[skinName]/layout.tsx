import Link from "next/link"

import Breadcrumbs from "../../../../../components/ui/breadcrumbs"

export default async function SkinLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: {
    weapon: string
    skinName: string
  }
}) {
  const { weapon } = params

  return (
    <>
      <div className="my-4">
        <Breadcrumbs>
          <Link href={`/weapons/${weapon}`}>{weapon}</Link>
          <span className="text-accent">{params.skinName}</span>
        </Breadcrumbs>
      </div>
      {children}
    </>
  )
}
