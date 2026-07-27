import Sidebar from "./admin/Sidebar";
import DashboardContent from "./admin/DashboardContent";

export default function AdminPage() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <main className="flex-1 overflow-auto">
        <DashboardContent />
      </main>
    </div>
  );
}
