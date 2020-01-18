import React from "react";
import { BackdropProps } from "common/types";

const Backdrop: React.FC<BackdropProps> = ({ toggleSidebar }) => {
  return (
    <div
      onClick={() => toggleSidebar(false)}
      className="w-full z-40 fixed top-0 left-0 h-screen"
      style={{
        // ...backdropStyle,
        // ...backdropTransitionStyles,
        backgroundColor: "rgba(0, 0, 0, 0.3)"
      }}
    ></div>
  );
};

export default Backdrop;
