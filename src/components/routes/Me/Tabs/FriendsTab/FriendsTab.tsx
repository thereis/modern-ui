import React from "react";
import FriendlistItem from "components/FriendlistItem";

const FriendsTab = () => {
  const onlineFriends = 5;
  const offlineFriends = 20;
  return (
    <div className="p-2">
      {/* Search friends */}
      <div className="flex w-full bg-gray-300 rounded text-sm border border-gray-400">
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
      <div className="w-full border border-gray-400 bg-gray-100 rounded">
        {[...Array(onlineFriends)].map((val, index) => {
          return (
            <FriendlistItem
              key={"friend" + index}
              user={{
                username: "Friend",
                look: process.env.REACT_APP_HABBO_FIGURE,
                isOnline: true
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FriendsTab;
