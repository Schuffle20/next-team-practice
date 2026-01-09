import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";
import { ComponentProps } from "react";
import { useSidebar } from "../ui/sidebar";
import { twMerge } from "tailwind-merge";
interface FooterLinkItemProps extends ComponentProps<"a"> {
  icon: IconSvgElement;
  text: string;
  href: string;
  className?: string;
}
const baseStyle = "flex gap-2 items-center w-full";

// i use "a" instead of nextjs/link component because nextjs link component stop the event , so it can't close it self to the dropdown
function FooterLinkItem({
  icon,
  text,
  href,
  className,
  ...props
}: FooterLinkItemProps) {
  // to close sidebar itself in smaller device which trigger the modal style float sidebar
  const { openMobile, setOpenMobile } = useSidebar();
  function closeSidebarClick() {
    if (openMobile) {
      setOpenMobile(false);
    }
  }
  return (
    <a
      href={href}
      className={twMerge(baseStyle, className)}
      {...props}
      onClick={closeSidebarClick}
    >
      <div className="size-10 flex items-center  justify-center">
        <HugeiconsIcon className=" size-6" icon={icon} />
      </div>

      <div className=" text-base">{text}</div>
    </a>
  );
}

export default FooterLinkItem;
