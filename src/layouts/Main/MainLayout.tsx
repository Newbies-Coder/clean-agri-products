import { Outlet } from "react-router-dom";
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileHeader from "@/components/layout/MobileHeader";
import TopHeader from "@/components/layout/TopHeader";
const MainLayout: React.FC = () => {
  return (
    <>
      <TopHeader />

      <Header />
      <MobileHeader/>
      <main className="min-h-[200px]">
        <Outlet />
      </main>
        <Footer />
    </>
  );
}

export default MainLayout;
