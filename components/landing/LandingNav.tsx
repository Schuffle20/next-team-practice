import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ShoppingCart01Icon } from "@hugeicons/core-free-icons";
import NavLink from "../ui/navbar/NavLink";

export function LandingNav() {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <HugeiconsIcon
              icon={ShoppingCart01Icon}
              className="h-6 w-6 text-primary"
            />
            <span className="text-xl font-semibold">POS Pro</span>
          </Link>
          <div className="flex items-center gap-4">
            <NavLink href="/about">
              <Button variant="ghost">About</Button>
            </NavLink>

            <NavLink href="/contact">
              <Button variant="ghost">Contact</Button>
            </NavLink>
            <Link href="/login">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link href="/getstarted">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
