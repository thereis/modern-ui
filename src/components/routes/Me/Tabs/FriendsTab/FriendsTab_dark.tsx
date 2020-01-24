import React from "react";
import { Link } from "react-router-dom";
import FriendlistItem from "components/FriendlistItem";

const FriendsTab = () => {
  const onlineFriends = 5;
  const offlineFriends = 20;
  return (
    <div className="p-2">
      {/* Search friends */}
      <div className="flex w-full bg-gray-800 rounded text-sm border border-gray-700 overflow-hidden">
        <div>
          <i className="fas fa-search text-gray-700 self-center p-2 text-sm" />
        </div>
        <input
          className="flex-1 bg-gray-800 py-1 px-1 pb-1"
          type="text"
          placeholder="Search Habbos..."
        />
      </div>

      {/* Online friends */}
      <h4 className="text-gray-700 mb-1 self-center text-xs font-semibold self-center mt-1">
        Online friends ({onlineFriends})
      </h4>
      <div className="w-full border border-gray-700 bg-gray-800 rounded overflow-hidden">
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
      <h4 className="text-gray-600 my-1 self-center text-xs font-semibold self-center">
        Offline friends ({offlineFriends})
      </h4>
      <div className="w-full border border-gray-700 bg-gray-800 rounded overflow-hidden">
        {[...Array(offlineFriends)].map((value, index) => (
          <FriendlistItem
            user={{
              username: "Friend",
              look: process.env.REACT_APP_HABBO_FIGURE,
              isOnline: false
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FriendsTab;
