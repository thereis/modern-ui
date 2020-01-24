import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useCollapseOnScroll } from "hooks/useCollapseOnScroll";
import ProfilePicture from "components/shared/ProfilePicture";
import isDayTime from "utils/isDayTime";

interface HeaderProps {
  collapsed?: boolean;
  toggleSidebar: (visible: boolean) => void;
  isHomepage: boolean;
}

const Header: React.FC<HeaderProps> = ({ collapsed = true, toggleSidebar, isHomepage }) => {
  const headerBackgroundDay = {
    backgroundImage:
      "linear-gradient(to bottom, rgba(256, 256, 256, 0.1), rgba(256, 256, 256, 0.4)), url(/assets/images/profile_backgrounds/star_sky.gif)"
  };

  const headerBackgroundNight = {
    backgroundImage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(/assets/images/profile_backgrounds/star_sky.gif)"
  };

  const subPages = [
    { url: "/me/news", name: "News" },
    { url: "/me/friends", name: "Friends" },
    { url: "/me/badges", name: "Badges" }
  ];

  const isScrolled = useCollapseOnScroll();

  const isCollapsed = !isHomepage || isScrolled;

  return (
    <div
      className="w-full sticky top-0 z-10 shadow bg-blue-600 border-b border-gray-400 bg-center"
      style={isCollapsed ? {} : isDayTime() ? headerBackgroundDay : headerBackgroundNight}
    >
      <div className="lg:flex hidden max-w-4xl mx-auto">
        <nav className="w-full flex justify-between">
          <div className="font-semibold flex text-white">
            <NavLink to="/test">
              <div className="p-3">Test</div>
            </NavLink>
          </div>
          <div className="flex justify-end">
            <button className="self-center text-white text-sm font-semibold mr-4">
              <i className="fa fa-inbox mr-1 relative w-5">
                <div className="absolute top-0 right-0 bg-red-500 -mt-1 -mr-px border-2 border-white rounded-full w-3 h-3"></div>
              </i>
              Inbox
            </button>
            <button className="self-center text-white text-sm font-semibold">
              <i className="fas fa-sign-out-alt mr-1 relative w-5"></i>
              Log out
            </button>
          </div>
        </nav>
      </div>
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
          `hidden`} font-semibold mt-8 lg:hidden flex mb-0 justify-between text-blue-100`}
      >
        {isHomepage &&
          subPages.map(page => (
            <NavLink
              to={page.url}
              exact
              activeClassName="border-blue-600"
              className="text-center flex-1 border-b-2 border-gray-200"
            >
              {page.name}
            </NavLink>
          ))}
      </div>
    </div>
  );
};

export default Header;
