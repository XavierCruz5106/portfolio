import { ReactNode } from "react";
import { NavigationMenu } from "./navigation-menu";
import { CustomCursor } from "./custom-cursor";
import { MobileMenu } from "./mobile-menu";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white overflow-hidden">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <NavigationMenu className="hidden md:flex" />
        <MobileMenu className="md:hidden" />
        <main className="mt-16 md:mt-24">{children}</main>
      </div>
      <CustomCursor className="hidden md:block" />
    </div>
  );
}
