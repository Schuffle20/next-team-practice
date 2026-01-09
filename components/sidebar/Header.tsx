import Link from "next/link";
import { SidebarHeader, useSidebar } from "../ui/sidebar";
import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

// link item for headerlink in sidebar
interface HeaderSidebarProps extends ComponentProps<"a"> {
  icon: IconSvgElement;
  text: string;
  className?: string;
  href: string;
}
const baseStyle =
  "flex w-full  items-center justify-start md:justify-center hover:bg-secondary p-2 gap-2";
function HeaderSidebar({
  icon,
  text,
  href,
  className,
  ...props
}: HeaderSidebarProps) {
  // to close sidebar itself in smaller device which trigger the modal style float sidebar
  const { openMobile, setOpenMobile } = useSidebar();
  function closeSidebarClick() {
    if (openMobile) {
      setOpenMobile(false);
    }
  }
  return (
    <SidebarHeader>
      <Link
        href={href}
        className={twMerge(baseStyle, className)}
        onClick={closeSidebarClick}
        {...props}
      >
        <div className="bg-primary  p-1">
          <HugeiconsIcon icon={icon} className=" size-8! " />
        </div>

        <span className=" truncate font-medium text-lg group-data-[collapsible=icon]:hidden">
          {text}
        </span>
      </Link>
    </SidebarHeader>
  );
}

export default HeaderSidebar;
