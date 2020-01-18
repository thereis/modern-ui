import React from "react";
import { Link, NavLink } from "react-router-dom";
import ProfilePicture from "./ProfilePicture";
import { HeaderProps } from "common/types";
import { useCollapseOnScroll } from "hooks/useCollapseOnScroll";

const Header: React.FC<HeaderProps> = ({ collapsed = true, toggleSidebar, subPages = [] }) => {
  const headerBackground = {
    backgroundImage:
      "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(29, 88, 148, 0.82)), url(/assets/images/backgrounds/bg_blue.gif)"
  };

  const isScrolled = useCollapseOnScroll();

  const isCollapsed = collapsed || isScrolled;

  return (
    <div
      className="w-full sticky top-0 z-10 border-b shadow-lg bg-blue-600 border-blue-700"
      style={isCollapsed ? {} : headerBackground}
    >
      <div className="lg:hidden p-2 w-full flex justify-between">
        <button
          className=" text-lg text-white self-center flex justify-center active:bg-blue-400"
          onClick={() => toggleSidebar(true)}
        >
          {isCollapsed ? (
            <div
              className="relative h-8 w-8 border border-blue-500 rounded bg-blue-700"
              style={{
                backgroundImage: `url(https://www.habbo.nl/habbo-imaging/avatarimage?figure=${process.env.REACT_APP_HABBO_FIGURE}&size=s)`,
                backgroundPositionY: `-6px`
              }}
            >
              <span className="absolute bg-red-500 -m-px rounded-full top-0 right-0 w-2 h-2"></span>
            </div>
          ) : (
            <i className="fas fa-bars m-2 relative">
              <span className="absolute bg-red-500 -mr-1 -mt-px rounded-full top-0 right-0 w-2 h-2"></span>
            </i>
          )}
        </button>
        <h3 className="self-center text-white font-semibold">Chuckie</h3>
        <Link
          to="settings"
          className="text-lg text-white self-center w-8 h-8 p-2 flex justify-center"
        >
          <i className="fas fa-cog" />
        </Link>
      </div>
      {isCollapsed || (
        <div className="mt-4 flex lg:hidden flex-wrap mx-3">
          <ProfilePicture figure={process.env.REACT_APP_HABBO_FIGURE} />
          <button
            id="btn-enter-hotel"
            className="arrow_box bg-green-500 text-white border font-semibold rounded flex-1 ml-2 border-green-400  leading-tight"
          >
            Enter Hotel
            <br />
            <span className="text-xs text-green-300 font-light">... to join 54 other Habbos!</span>
          </button>
        </div>
      )}
      {/* Tabs */}
      <div
        className={`${isCollapsed &&
          `hidden`} font-semibold mt-4 lg:hidden flex mb-0 justify-between text-blue-100`}
      >
        {/* Render subpages */}
        {subPages &&
          subPages.map(page => (
            <NavLink
              to={page.url}
              exact
              activeClassName="border-blue-600"
              className="text-center flex-1 border-b-2 border-transparent"
            >
              {page.name}
            </NavLink>
          ))}
      </div>
    </div>
  );
};

export default Header;
