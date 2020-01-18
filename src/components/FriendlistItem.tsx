import React from "react";
import { FriendlistItemProps } from "common/types";

const FriendlistItem: React.FC<FriendlistItemProps> = ({ user }) => {
  return (
    <div className="w-full border-b z-0 border-gray-200 bg-gray-100 flex p-1">
      <div
        className="bg-gray-300 flex-none relative z-0 rounded self-center w-12 h-12 bg-no-repeat bg-center"
        style={{
          backgroundImage:
            'url("https://www.habbo.nl/habbo-imaging/avatarimage?figure=hd-205-3.lg-280-1293.ch-255-62.hr-115-1051.sh-290-62")',
          backgroundPositionY: "-14px",
          backgroundPositionX: "-9px"
        }}
      >
        <div className="absolute h-3 w-3 bg-green-500 rounded right-0 border-2 border-gray-100 -m-px" />
      </div>
      <div className="flex-1 px-1">
        <span className="flex w-full justify-between">
          <h4 className="text-blue-700 text-sm font-semibold self-center">Friend</h4>
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
