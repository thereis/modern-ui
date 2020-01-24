import React, { useState } from "react";
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
  return (
    <MainLayout
      sidebarVisible={sidebarVisible}
      setSidebarVisible={setSidebarVisible}
      headerVisible={headerVisible}
      isHomepage={isHomepage}
    >
      {children}
    </MainLayout>
  );
};

export default MainLayoutContainer;
