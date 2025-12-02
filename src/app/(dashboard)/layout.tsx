import DashboardSidebar from "@/components/DashboardSidebar";
import Nav from "@/components/Nav";
import { SidebarProvider } from "@/contexts/SidebarContext";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <div className="flex bg-background min-h-screen">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col">
          <Nav />
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
}
