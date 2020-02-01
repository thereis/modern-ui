import React, { useState } from "react";
import ProfilePicture from "components/shared/ProfilePicture";
import { Link } from "react-router-dom";

const HeaderDropDown = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className=" relative  inline-block w-40 "
      onMouseEnter={() => setVisible(!visible)}
      onMouseLeave={() => setVisible(!visible)}
    >
      <div
        className={`w-full relative flex ${
          visible ? " rounded-t" : " rounded"
        } border-gray-400   z-50`}
      >
        <button className="flex">
          <ProfilePicture figure={process.env.REACT_APP_HABBO_FIGURE} />
          <span className="text-white self-center mx-1 font-semibold text-sm">Chuckie</span>
        </button>
      </div>
      {visible && (
        <div className="absolute w-full">
          <div className="mt-2 p-1 flex shadow flex-col bg-gray-100 border border-gray-400 w-full rounded">
            <Link className="p-1 text-xs text-gray-500 rounded hover:bg-gray-200" to="#">
              Inbox
            </Link>
            <Link className="p-1 text-xs text-gray-500 rounded hover:bg-gray-200" to="#">
              Settings
            </Link>
            <Link className="p-1 text-xs text-gray-500 rounded hover:bg-gray-200" to="#">
              Log out
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderDropDown;
