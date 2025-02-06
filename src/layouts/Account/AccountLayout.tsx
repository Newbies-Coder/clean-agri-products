import { Outlet } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MobileHeader from "@/components/layout/MobileHeader";
import TopHeader from "@/components/layout/TopHeader";
import AccountSidebar from "@/components/layout/Sidebar/AccountSidebar";

const AccountLayout = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <MobileHeader />
      <main className="min-h-[200px] container mx-auto max-sm:px-5 py-10">
        <div className="flex gap-6">
          <div className="w-64 hidden md:block">
            <AccountSidebar />
          </div>
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AccountLayout;
