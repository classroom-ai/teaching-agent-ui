import DashboardSidebar from "@/components/DashboardSidebar";
import Nav from "@/components/Nav";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex bg-slate-950 min-h-screen">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <Nav />
        {children}
      </div>
    </div>
  );
}


