"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from "react";

interface NavLinkProps extends ComponentProps<"a"> {
  href: string;
  children: ReactNode;
}
function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  console.log(pathname, href);

  return (
    <Link href={href} className=" relative">
      {pathname === href && (
        <span className=" absolute bottom-0 h-1 right-0 left-0 bg-primary"></span>
      )}
      {children}
    </Link>
  );
}

export default NavLink;
