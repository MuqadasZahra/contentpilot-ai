import Sidebar from "../../components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen bg-[#f7f8fc]">
        <main className="p-8 max-w-5xl mx-auto">{children}</main>
      </div>
    </div>
  );
}
