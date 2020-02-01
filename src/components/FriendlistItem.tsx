import React from "react";
import { FriendlistItemProps } from "common/types";
import ProfilePicture from "./shared/ProfilePicture";
import UserHovercard from "./shared/UserHovercard";
import { Link } from "react-router-dom";

const FriendlistItem: React.FC<FriendlistItemProps> = ({ user }) => {
  return (
    <div className="w-full border-b z-0 border-gray-200 flex p-1">
      <UserHovercard>
        <Link to="#">
          <ProfilePicture
            figure={process.env.REACT_APP_HABBO_FIGURE}
            styles="bg-gray-300 flex-none relative z-0 rounded self-center w-12 h-12 bg-no-repeat bg-center"
            online={true}
          />
        </Link>
      </UserHovercard>
      <div className="flex-1 px-1">
        <span className="flex w-full justify-between">
          <Link
            to="#"
            className="text-blue-700 text-sm font-semibold self-center hover:text-blue-300"
          >
            Friend
          </Link>
          <span className="ml-1 text-xs text-gray-500 self-center">Online for 2 hours</span>
        </span>
        <div className="w-full flex">
          <span className="text-xs text-gray-600 leading-tight">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, aliquam voluptatem?
          </span>
        </div>
      </div>
    </div>
  );
};

export default FriendlistItem;
