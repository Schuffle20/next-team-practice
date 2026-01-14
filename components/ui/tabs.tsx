"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface TabsProps {
  children: React.ReactNode
  className?: string
}

function Tabs({ children, className }: TabsProps) {
  return (
    <div
      data-slot="tabs"
      className={cn("flex items-center gap-1 border-b border-border", className)}
    >
      {children}
    </div>
  )
}

interface TabsListProps {
  children: React.ReactNode
  className?: string
}

function TabsList({ children, className }: TabsListProps) {
  return (
    <div
      data-slot="tabs-list"
      className={cn("flex items-center gap-1", className)}
    >
      {children}
    </div>
  )
}

interface TabsTriggerProps {
  href: string
  children: React.ReactNode
  className?: string
}

function TabsTrigger({ href, children, className }: TabsTriggerProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      data-slot="tabs-trigger"
      data-active={isActive}
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-t-md border-b-2 border-transparent px-4 py-3 text-sm font-medium transition-all",
        "hover:bg-muted/50 hover:text-foreground",
        "data-[active=true]:border-primary data-[active=true]:text-foreground",
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
    >
      {children}
    </Link>
  )
}

export { Tabs, TabsList, TabsTrigger }
