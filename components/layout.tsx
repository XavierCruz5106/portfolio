import { ReactNode } from "react"
import { NavigationMenu } from "./navigation-menu"
import { CustomCursor } from "./custom-cursor"

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <NavigationMenu />
        <main>{children}</main>
      </div>
      <CustomCursor />
    </div>
  )
}

