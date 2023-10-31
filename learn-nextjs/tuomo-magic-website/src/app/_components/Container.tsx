import { cn } from "@/app/_lib/util"
import { ClassValue } from "clsx"
import { ReactNode } from "react"

export default function Container({
  className,
  children,
}: {
  className: ClassValue
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        `container mx-auto p-8 xl:px-0 ${className ? className : ""}`,
      )}
    >
      {children}
    </div>
  )
}
