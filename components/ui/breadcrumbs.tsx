import * as React from "react"

interface BreadcrumbsProps {
  children: React.ReactNode
}

const Breadcrumbs = ({ children }: BreadcrumbsProps) => {
  const childArray = React.Children.toArray(children)
  return (
    <nav className="flex flex-wrap text-sm text-foreground">
      {childArray.map((child, i) => {
        return (
          <span key={i}>
            {child}
            {i < childArray.length - 1 && <span className="mx-1">&gt;</span>}
          </span>
        )
      })}
    </nav>
  )
}

export default Breadcrumbs
