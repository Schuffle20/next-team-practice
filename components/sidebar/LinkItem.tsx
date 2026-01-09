import Link from "next/link";
import { SidebarMenuButton, SidebarMenuItem, useSidebar } from "../ui/sidebar";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

// link item for sidebar
interface LinkItemProps extends ComponentProps<"a"> {
  icon: IconSvgElement;
  text: string;
  className?: string;
  href: string;
}
const baseStyle =
  " flex items-center font-medium  group-data-[collapsible=icon]:justify-center text-center";
function LinkItem({ icon, text, href, className, ...props }: LinkItemProps) {
  // to close sidebar itself in smaller device which trigger the modal style float sidebar
  const { openMobile, setOpenMobile } = useSidebar();
  function closeSidebarClick() {
    if (openMobile) {
      setOpenMobile(false);
    }
  }
  return (
    <SidebarMenuItem className="">
      <SidebarMenuButton asChild size="lg">
        <Link
          href={href}
          className={twMerge(baseStyle, className)}
          {...props}
          onClick={closeSidebarClick}
        >
          <HugeiconsIcon icon={icon} className=" size-6! " />
          <span className=" text-base  group-data-[collapsible=icon]:hidden">
            {text}
          </span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

export default LinkItem;
