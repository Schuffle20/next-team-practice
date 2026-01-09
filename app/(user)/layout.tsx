import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import UserSidebar from "@/components/UserSidebar";

// layout sidebar for both dashboard and setting/*
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="dashboard-layout">
      <SidebarProvider>
        <UserSidebar />
        <SidebarInset>
          <main className=" w-full h-full ">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
