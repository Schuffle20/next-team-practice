import { SidebarTrigger } from "@/components/ui/sidebar";

// need to add sidebar trigger ui , see the page.tsx in dashboard
export default function ProfilePage() {
  return (
    <div className=" p-5 w-full h-full  flex flex-col gap-3">
      <div className=" w-full  flex items-center   border-b border-border">
        <SidebarTrigger />
        <h3>Profile </h3>
      </div>
    </div>
  );
}
