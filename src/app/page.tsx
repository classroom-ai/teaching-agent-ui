import DashboardSidebar from "@/components/DashboardSidebar";
import SyllabusDashboard from "@/components/SyllabusDashboard";

export default function Home() {
  return (
    <div className="flex bg-slate-950 min-h-screen">
      <DashboardSidebar />
      <SyllabusDashboard />
    </div>
  );
}
