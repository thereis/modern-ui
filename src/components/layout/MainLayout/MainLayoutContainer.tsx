import React, { useState, useEffect } from "react";
import MainLayout from "./MainLayout";

interface MainLayoutContainerProps {
  headerVisible?: boolean;
  isHomepage?: boolean;
  children?: React.ReactNode;
}

const MainLayoutContainer: React.FC<MainLayoutContainerProps> = ({
  children,
  headerVisible = true,
  isHomepage = false
}) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const [currentTab, setCurrentTab] = useState("FRIENDS");

  const setTab = (tab: string) => {
    setCurrentTab(tab.toUpperCase());
  };

  useEffect(() => {
    console.log(currentTab);
  }, [currentTab]);

  return (
    <MainLayout
      sidebarVisible={sidebarVisible}
      setSidebarVisible={setSidebarVisible}
      headerVisible={headerVisible}
      isHomepage={isHomepage}
      setTab={setTab}
    >
      {children}
    </MainLayout>
  );
};

export default MainLayoutContainer;
