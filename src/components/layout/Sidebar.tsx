import React from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import isDayTime from "utils/isDayTime";

interface SidebarProps {
  toggleSidebar: (visible: boolean) => void;
  sidebarVisible: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ toggleSidebar, sidebarVisible }) => {
  const currencies = [
    {
      name: "Credits",
      icon: "/assets/images/icons/credits.png",
      amount: 420
    },
    {
      name: "Pixels",
      icon: "/assets/images/icons/pixel.png",
      amount: 293
    },
    {
      name: "Diamonds",
      icon: "/assets/images/icons/diamonds.png",
      amount: 3219
    }
  ];

  const headerBackgroundDay = {
    backgroundImage:
      "linear-gradient(to bottom, rgba(256, 256, 256, 0.1), rgba(256, 256, 256, 0.4)), url(/assets/images/profile_backgrounds/star_sky.gif)"
  };

  const headerBackgroundNight = {
    backgroundImage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(/assets/images/profile_backgrounds/star_sky.gif)"
  };

  return (
    <CSSTransition in={sidebarVisible} timeout={200} classNames="sidebar" unmountOnExit>
      <div className="z-50 h-screen fixed overflow-x-hidden lg:hidden">
        <div className="h-full bg-white flex flex-col" id="sidebar__content">
          <div
            className="w-full flex shadow flex-col bg-blue-800 relative p-2 border-r border-blue-700"
            style={isDayTime() ? headerBackgroundDay : headerBackgroundNight}
          >
            {/* Sidebar topbar */}
            <div className="w-full flex justify-between">
              <span className="text-white text-center font-semibold w-full self-center">
                Chuckie
              </span>
              <button
                onClick={() => toggleSidebar(false)}
                className="text-white w-8 h-8 flex justify-center active:bg:blue-600"
              >
                <i className="fas fa-times" />
              </button>
            </div>
            {/* Sidebar avatar */}
            <div
              className="w-20 h-32 z-30 bg-no-repeat bg-center"
              style={{
                backgroundImage: `url("https://www.habbo.nl/habbo-imaging/avatarimage?figure=${process.env.REACT_APP_HABBO_FIGURE}")`,
                backgroundPositionY: "-3px",
                backgroundPositionX: "7px"
              }}
            />

            {/* Sidebar currencies */}
            <div className="flex justify-between w-full px-2">
              {currencies.map(currency => (
                <div className="flex" key={currency.name}>
                  <div
                    className="w-6 h-6 bg-center bg-no-repeat mr-1"
                    style={{ backgroundImage: `url(${currency.icon})` }}
                  ></div>
                  <span className="text-gray-200 self-center font-semibold text-xs">
                    {currency.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="h-full pb-auto border-r flex flex-col border-gray-500">
            <Link to="#" className="block w-full p-3 rounded text-gray-600 text-sm">
              <i className="fas fa-cog w-5 text-gray-500" />
              <span className="ml-1">Account Settings</span>
            </Link>

            <Link to="#" className="block w-full p-3 text-gray-600 text-sm flex">
              <div className="flex-1">
                <i className="fas fa-inbox text-gray-500 w-5 relative"></i>
                <span className="ml-1">Minimail</span>
              </div>
              <div className="flex ">
                <span className="text-white flex text-xs font-semibold py-px h-4 w-4 justify-center rounded-sm self-center bg-red-500 ">
                  <span className="self-center">3</span>
                </span>
              </div>
            </Link>

            <div className="h-px w-full bg-gray-300 my-1" />
            <label htmlFor="toogleA" className="flex items-center cursor-pointer">
              <div className="w-full p-3 text-gray-600 text-sm">
                <i className="fas fa-moon text-gray-500 w-5" />
                <span className="ml-1">Dark mode</span>
                <div className="inline-block float-right">
                  <div className="relative">
                    <input id="toogleA" type="checkbox" className="hidden" />
                    <div className="toggle__line w-10 h-5 bg-gray-400 rounded-full " />
                    <div className="toggle__dot absolute w-5 h-5 bg-white rounded-full shadow inset-y-0 left-0" />
                  </div>
                </div>
              </div>
            </label>

            <div className="h-px w-full bg-gray-300 my-1 flex mt-auto" />
            <div className="flex p-2">
              <button className="block p-2 text-red-500 flex-1 rounded bg-gray-100 text-sm  ">
                <i className="fas fa-sign-out-alt w-5" />
                <span>Log out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Sidebar;
