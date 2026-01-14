"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "./ui/sidebar";
import {
  LayoutDashboard,
  Wallet,
  ShoppingCart,
  Youtube,
} from "lucide-react";
import FooterNavigate from "./sidebar/FooterNavigate";
import LinkItem from "./sidebar/LinkItem";
import HeaderSidebar from "./sidebar/Header";

function UserSidebar() {
  return (
    <Sidebar className="" collapsible="icon">
      <HeaderSidebar
        text="Laravel Starter Kit"
        href="/dashboard"
        icon={Youtube}
      />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className=" text-sm">Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <LinkItem
                text="Dashboard"
                icon={LayoutDashboard}
                href="/dashboard"
              />
              <LinkItem
                text="Products"
                icon={ShoppingCart}
                href="/products"
              />
              <LinkItem text="Sale" icon={Wallet} href="/sale" />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <FooterNavigate />
    </Sidebar>
  );
}

export default UserSidebar;
