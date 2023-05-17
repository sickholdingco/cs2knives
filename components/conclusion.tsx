import React from "react"

interface ConclusionProps {
  children?: React.ReactNode
}

export const Conclusion = ({ children }: ConclusionProps) => {
  return (
    <div className="my-6 flex items-start rounded-md border border-l-4 p-4">
      <span className="mr-4 text-2xl">👋</span>
      <div>{children}</div>
    </div>
  )
}
