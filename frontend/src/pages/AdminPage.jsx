import Sidebar from "../components/admin/Sidebar";
import DashboardContent from "../components/admin/DashboardContent";

export default function AdminPage() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <DashboardContent />
      </main>
    </div>
  );
}
