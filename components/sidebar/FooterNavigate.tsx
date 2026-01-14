import {
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from "../ui/sidebar";
import {
  BookOpen,
  Folder,
  LogOut,
  Settings,
  ChevronDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import LinkItem from "./LinkItem";
import FooterLinkItem from "./FooterLinkItem";
// footer dropdown
function FooterNavigate() {
  return (
    <SidebarFooter className="p-0">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <LinkItem
                text="Repository"
                icon={Folder}
                href="#"
                className="font-normal"
              />
              <LinkItem
                text="Documentation"
                icon={BookOpen}
                href="#"
                className="font-normal"
              />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className=" flex justify-between py-7 px-2 group-data-[collapsible=icon]:justify-center"
          >
            <div className=" flex items-center gap-2">
              <span className=" flex items-center justify-center size-10 rounded-full bg-secondary">
                A
              </span>
              <span className="group-data-[collapsible=icon]:hidden">Aung</span>
            </div>

            <ChevronDown
              className="group-data-[collapsible=icon]:hidden size-6!"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-72" align="start">
          <DropdownMenuItem className=" h-14">
            <div className=" flex gap-2 items-center">
              <span className=" flex items-center justify-center  size-10 rounded-full bg-secondary">
                A
              </span>
            </div>
            <div>
              <div className=" text-base">aung</div>
              <div className=" text-sm text-foreground">mcf-8@mail.com</div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className=" h-12" asChild>
            <FooterLinkItem
              text="Settings"
              icon={Settings}
              href="/setting/profile"
            />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className=" h-12" asChild>
            {/* [todo]: need to change href when api are avai */}
            <FooterLinkItem text="Logout" icon={LogOut} href="#" />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarFooter>
  );
}

export default FooterNavigate;
