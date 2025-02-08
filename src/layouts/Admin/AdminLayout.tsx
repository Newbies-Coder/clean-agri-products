import { Outlet } from "react-router-dom";
import AdminHeader from "@/components/layout/AdminHeader";
import AdminSidebar from "@/components/layout/Sidebar/AdminSidebar";
import "./style.scss";
const AdminLayout = () => {
  return (
    <div>
      <AdminSidebar />
      <div className="content-admin min-h-screen bg-[#EEF1F9] duration-200">
        <AdminHeader />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
