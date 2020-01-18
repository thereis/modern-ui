import React, { useState } from "react";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import Backdrop from "components/Backdrop";
import { MainLayoutProps } from "common/types";
import BottomNavigation from "components/BottomNavigation";

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  headerVisible = true,
  headerCollapsed = true,
  subPages = []
}) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <div id="main-layout">
      {sidebarVisible ? (
        <>
          <Sidebar toggleSidebar={setSidebarVisible} />
          <Backdrop toggleSidebar={setSidebarVisible} />
        </>
      ) : null}
      {headerVisible && (
        <Header toggleSidebar={setSidebarVisible} collapsed={headerCollapsed} subPages={subPages} />
      )}
      {children}
      <BottomNavigation />
    </div>
  );
};

export default MainLayout;
