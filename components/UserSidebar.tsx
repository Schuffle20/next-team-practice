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
  GridViewIcon,
  PurseIcon,
  ShoppingBasketCheckOut01Icon,
  YoutubeIcon,
} from "@hugeicons/core-free-icons";
import FooterNavigate from "./sidebar/FooterNavigate";
import LinkItem from "./sidebar/LinkItem";
import HeaderSidebar from "./sidebar/Header";

function UserSidebar() {
  return (
    <Sidebar className="" collapsible="icon">
      <HeaderSidebar
        text="Laravel Starter Kit"
        href="/dashboard"
        icon={YoutubeIcon}
      />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className=" text-sm">Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <LinkItem
                text="Dashboard"
                icon={GridViewIcon}
                href="/dashboard"
              />
              <LinkItem
                text="Products"
                icon={ShoppingBasketCheckOut01Icon}
                href="/products"
              />
              <LinkItem text="Sale" icon={PurseIcon} href="/sale" />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <FooterNavigate />
    </Sidebar>
  );
}

export default UserSidebar;
