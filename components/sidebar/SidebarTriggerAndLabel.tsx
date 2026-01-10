"use client";
import { usePathname } from "next/navigation";
import { SidebarTrigger } from "../ui/sidebar";
import { returnLabel } from "@/lib/returnLabel";

function SidebarTriggerAndLabel() {
  const pathName = usePathname();
  const label = returnLabel(pathName);
  return (
    <div className="flex items-center   border-b border-border w-full mb-4">
      <SidebarTrigger />
      <h3>{label} </h3>
    </div>
  );
}

export default SidebarTriggerAndLabel;
