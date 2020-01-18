import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const BottomNavigation = () => {
  return (
    <Fragment>
      <div className="lg:hidden w-full z-30 fixed bottom-0 flex flex-col ">
        {/* <div className="bg-red-600 text-white text-sm  m-1 flex rounded p-2  shadow justify-center">
          Test alert!
        </div> */}
        <nav className="w-full flex justify-between text-lg text-gray-500 border-gray-400 bg-gray-100 border-t">
          <NavLink to="/me" activeClassName="text-blue-500" className="flex-1 text-center py-2">
            <i className="fas fa-home" />
          </NavLink>
          <NavLink
            to="/profile"
            exact
            activeClassName="text-blue-500"
            className="flex-1 text-center py-2"
          >
            <i className="fas fa-user"></i>
          </NavLink>
          <NavLink
            to="/community"
            activeClassName="text-blue-500"
            className="flex-1 text-center py-2"
          >
            <i className="fas fa-users" />
          </NavLink>
        </nav>
      </div>
    </Fragment>
  );
};

export default BottomNavigation;
