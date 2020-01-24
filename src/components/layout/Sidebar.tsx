import React from "react";
import { Link } from "react-router-dom";
import { SidebarProps } from "common/types";

const Sidebar: React.FC<SidebarProps> = ({ toggleSidebar }) => {
  const sidebarHeaderBackground = {
    backgroundImage:
      "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(29, 88, 148, 0.82)), url(/assets/images/backgrounds/bg_blue.gif)"
  };

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

  return (
    <div className="z-50 w-2/3 h-screen fixed overflow-x-hidden lg:hidden">
      <div className="h-full bg-white flex flex-col">
        <div
          className="w-full flex flex-col bg-blue-800 relative p-2 border-r border-blue-700"
          style={sidebarHeaderBackground}
        >
          <div
            className="w-full h-16 absolute z-20 bottom-0 bg-no-repeat"
            style={{
              backgroundImage: 'url("/images/floor.png")',
              backgroundPositionX: "-84px",
              backgroundPositionY: "4px"
            }}
          />
          {/* Sidebar topbar */}
          <div className="w-full flex justify-between">
            <span className="text-white text-center font-semibold w-full self-center">Chuckie</span>
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
        </div>
        {/* Sidebar currencies */}
        <div
          className="flex bg-gray-100 justify-between border-r border-gray-500 w-full"
          style={{ borderBottom: "1px solid #e2e8f0" }}
        >
          {currencies.map(currency => (
            <div className="flex flex-col px-8" key={currency.name}>
              <div
                className="w-6 h-6 bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${currency.icon})` }}
              ></div>
              <span className="text-gray-600 font-semibold text-xs">{currency.amount}</span>
            </div>
          ))}
        </div>
        <div
          className="h-full pb-auto border-r flex flex-col border-gray-500"
          //   style={{
          //     ...sidebarContentStyle,
          //     ...sidebarContentTransitionStyles[state]
          //   }}
        >
          <Link to="#" className="block w-full p-3 rounded text-gray-500 text-sm">
            <i className="fas fa-cog w-5 text-gray-400" />
            <span className="ml-1">Account Settings</span>
          </Link>

          <Link to="#" className="block w-full p-3 text-gray-500 text-sm flex">
            <div className="flex-1">
              <i className="fas fa-inbox text-gray-400 w-5 relative">
                <div className="absolute top-0 right-0 bg-red-500 -mt-1 -mr-px border-2 border-white rounded-full w-3 h-3"></div>
              </i>
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
            <div className="w-full p-3 text-gray-500 text-sm">
              <i className="fas fa-moon text-gray-400 w-5" />
              <span className="ml-1">Dark mode</span>
              <div className="inline-block float-right">
                <div className="relative">
                  <input id="toogleA" type="checkbox" className="hidden" />
                  <div className="toggle__line w-10 h-5 bg-gray-400 rounded-full shadow-inner" />
                  <div className="toggle__dot absolute w-5 h-5 bg-white rounded-full shadow inset-y-0 left-0" />
                </div>
              </div>
            </div>
          </label>
          <div className="h-px w-full bg-gray-300 my-1" />
          <button className="block p-2 text-red-500 m-2 rounded bg-gray-100 font-semibold text-sm mt-auto ">
            <i className="fas fa-sign-out-alt w-5" />
            <span>Log out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
