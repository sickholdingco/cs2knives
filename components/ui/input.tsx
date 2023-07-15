import * as React from "react"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="flex items-center gap-4 rounded-md border border-border px-4 py-3">
        <Search className="h-4 w-4" />
        <input
          type={type}
          className={cn(
            "flex bg-transparent font-flex text-2xl font-normal leading-6 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#BEBEBE] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
