import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../Sidebar";
import Backdrop from "../Backdrop";
import Header from "../Header";
import BottomNavigation from "components/layout/BottomNavigation";

interface MainLayoutProps {
  sidebarVisible: boolean;
  setSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
  headerVisible: boolean;
  isHomepage: boolean;
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  sidebarVisible,
  setSidebarVisible,
  headerVisible,
  isHomepage,
  children
}) => {
  return (
    <div id="main-layout">
      {sidebarVisible ? (
        <>
          <Sidebar toggleSidebar={setSidebarVisible} />
          <Backdrop toggleSidebar={setSidebarVisible} />
        </>
      ) : null}
      {headerVisible && <Header toggleSidebar={setSidebarVisible} isHomepage={isHomepage} />}
      <div className="max-w-4xl mx-auto">
        <div className="hidden lg:flex w-full p-1 justify-between mt-2 rounded">
          <div
            className="bg-gray-300 flex-none relative z-0 rounded self-center w-12 h-12 bg-no-repeat bg-center"
            style={{
              backgroundImage:
                'url("https://www.habbo.nl/habbo-imaging/avatarimage?figure=hd-205-3.lg-280-1293.ch-255-62.hr-115-1051.sh-290-62")',
              backgroundPositionY: "-14px",
              backgroundPositionX: "-9px"
            }}
          ></div>
          <div className="flex justify-end">
            {[...Array(4)].map(t => (
              <NavLink
                to="/test"
                className="flex flex-col self-center text-gray-500 text-xs px-3 hover:bg-gray-200 rounded p-2"
              >
                <span className="text-center font-semibold">Home</span>
              </NavLink>
            ))}
          </div>
        </div>
        {children}
      </div>
      <BottomNavigation />
    </div>
  );
};

export default MainLayout;
