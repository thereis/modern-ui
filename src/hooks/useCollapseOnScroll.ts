import { useState, useEffect } from "react";

export const useCollapseOnScroll = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleScroll = () => {
    const top = window.pageXOffset | document.documentElement.scrollTop;
    setCollapsed(top !== 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return collapsed;
};
