import DashboardSidebar from "@/components/DashboardSidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex bg-slate-950 min-h-screen">
      <DashboardSidebar />
      {children}
    </div>
  );
}


