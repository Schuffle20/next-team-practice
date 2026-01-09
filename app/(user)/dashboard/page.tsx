import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Page() {
  return (
    <div className=" p-5 w-full h-full  flex flex-col gap-3">
      <div className=" w-full  flex items-center   border-b border-border">
        <SidebarTrigger />
        <h3>Dashboard</h3>
      </div>
      <div className="flex  flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3 text-2xl">
          <div className=" flex items-center justify-center bg-primary aspect-video rounded-xl">
            A
          </div>
          <div className="flex items-center justify-center bg-primary aspect-video rounded-xl">
            C
          </div>
          <div className=" flex items-center justify-center bg-primary aspect-video rounded-xl">
            P
          </div>
        </div>
        <div className=" text-2xl flex items-center justify-center bg-primary flex-1 min-h-1/3 rounded-xl ">
          Bubble
        </div>
      </div>
    </div>
  );
}
