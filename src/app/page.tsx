import DashboardSidebar from "@/components/DashboardSidebar";
import EmailVerificationAlert from "@/components/EmailVerificationAlert";

export default function Page() {
  return (
    <>
      <EmailVerificationAlert />
      <DashboardSidebar />
    </>
  );
}