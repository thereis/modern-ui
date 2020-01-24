import React from "react";
import { Link } from "react-router-dom";
import FriendlistItem from "components/FriendlistItem";

const FriendsTab = () => {
  const onlineFriends = 5;
  const offlineFriends = 20;
  return (
    <div className="p-2">
      {/* Search friends */}
      <div className="flex w-full bg-gray-300 rounded text-sm border border-gray-400 overflow-hidden">
        <div>
          <i className="fas fa-search text-gray-500 self-center p-2 text-sm" />
        </div>
        <input
          className="flex-1 bg-gray-300 py-1 px-1 pb-1"
          type="text"
          placeholder="Search Habbos..."
        />
      </div>

      {/* Online friends */}
      <h4 className="text-gray-500 mb-1 self-center text-xs font-semibold self-center mt-1">
        Online friends ({onlineFriends})
      </h4>
      <div className="w-full border border-gray-400 bg-white rounded overflow-hidden">
        {[...Array(onlineFriends)].map((val, index) => {
          return (
            <Link to="#" key={index}>
              <FriendlistItem
                user={{
                  username: "Friend",
                  look: process.env.REACT_APP_HABBO_FIGURE,
                  isOnline: true
                }}
              />
            </Link>
          );
        })}
      </div>

      {/* Offline Friends */}
      <h4 className="text-gray-500 my-1 self-center text-xs font-semibold self-center">
        Offline friends ({offlineFriends})
      </h4>
      <div className="w-full border border-gray-400 bg-white rounded overflow-hidden">
        {[...Array(offlineFriends)].map((value, index) => {
          return (
            <Link to="#" key={index}>
              <div className="w-full border-b border-gray-200 bg-gray-100 flex p-1">
                <div
                  className="bg-gray-300 flex-none relative rounded self-center w-12 h-12 bg-no-repeat bg-center"
                  style={{
                    backgroundImage:
                      'url("https://www.habbo.nl/habbo-imaging/avatarimage?figure=figure=ch-255-1212.hd-205-3.hr-115-1034.sh-295-64.lg-280-62")',
                    backgroundPositionY: "-14px",
                    backgroundPositionX: "-9px"
                  }}
                >
                  <div className="absolute h-3 w-3 bg-gray-500 rounded right-0 border-2 border-gray-100 -m-px" />
                </div>
                <div className="flex-1 px-1">
                  <span className="flex w-full justify-between">
                    <h4 className="text-blue-700 text-sm font-semibold self-center">Friend</h4>
                    <span className="ml-1 text-xs text-gray-500 self-center">Last online: 4h</span>
                  </span>
                  <div className="w-full flex">
                    <span className="text-xs text-gray-600 leading-tight">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, aliquam
                      voluptatem?
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FriendsTab;
