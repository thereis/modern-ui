import React from "react";
import ProfilePicture from "./../ProfilePicture";

const UserHovercard: React.FC = () => {
  return (
    <div
      className="user-hovercard border border-gray-400 bg-gray-100 shadow-lg rounded absolute flex flex-col z-50"
      style={{ bottom: "120%" }}
    >
      <div
        className="bg-center bg-no-repeat rounded-t h-12 w-64 m-px flex flex-col justify-end pl-16"
        style={{ backgroundImage: `url(/assets/images/view_ca_wide.png)` }}
      >
        <span className="text-white font-semibold">Chuckie</span>
      </div>
      <div className="flex justify-between">
        <div className="-mt-8 px-2 mr-px pb-1 flex">
          <ProfilePicture figure={process.env.REACT_APP_HABBO_FIGURE} styles="bg-gray-200 " />
        </div>
        <div className="flex flex-1">
          <span className="text-gray-500 text-xs">
            <i className="fas fa-users"></i> 239 friends
          </span>
        </div>
      </div>
      <div className="bg-gray-200 w-full rounded-b flex justify-end p-1 border-t border-gray-400">
        <button className="px-1 text-xs text-gray-500 hover:bg-gray-300 bg-gray-100 border border-gray-400 rounded-sm mr-1">
          {/* <i className="fas fa-check"></i> Friends */}
          Add friend
        </button>
        <button className="px-1 text-xs text-gray-500 hover:bg-gray-300 bg-gray-100 border border-gray-400 rounded-sm">
          Message
        </button>
      </div>
    </div>
  );
};

export default UserHovercard;
