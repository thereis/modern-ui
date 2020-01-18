import React from "react";
import MainLayout from "components/layout/MainLayout";
import FriendlistItem from "components/FriendlistItem";

const Profile = () => {
  return (
    <MainLayout>
      <div className="">
        <div className="relative bg-gray-100 flex flex-col overflow-hidden">
          <div
            className="h-32 flex flex-col justify-end"
            style={{ backgroundImage: `url(/assets/images/sweden.png)` }}
          >
            <div
              className="w-20 h-32 absolute z-30 bg-no-repeat bg-center"
              style={{
                backgroundImage: `url("https://www.habbo.nl/habbo-imaging/avatarimage?figure=${process.env.REACT_APP_HABBO_FIGURE}")`,
                backgroundPositionY: "-3px",
                backgroundPositionX: "7px",
                top: "50px"
              }}
            ></div>
            <div className="w-full flex justify-end p-2">
              <button className="bg-gray-100 border border-gray-400 shadow rounded-sm px-2 py-px text-gray-600 font-semibold text-xs">
                <i className="fas fa-user-plus mr-1"></i>
                Add friend
              </button>
            </div>
          </div>
          <div className="flex bg-gray-100 border-t border-b border-gray-400 text-sm pl-24 justify-start">
            <button className="bg-gray-200 border-r border-l border-gray-300 px-4 py-2">
              <span className="font-semibold text-gray-700">Chuckie</span>
            </button>
            <button className="px-4 py-2 border-r border-gray-300">
              <span className=" text-gray-600">Friends</span>
              <span className="text-xs ml-1 text-gray-400">23</span>
            </button>
          </div>
        </div>
        <div className="p-2">
          <h4 className="text-gray-500 mb-1 self-center text-xs font-semibold self-center">
            Badges (231)
          </h4>
          <div className="bg-gray-100 border border-gray-400 rounded overflow-hidden">
            <div className="p-1 flex ">
              <div className="flex flex-wrap">
                {[...Array(6)].map(badge => (
                  <div
                    className="h-12 w-12 mr-1 bg-gray-300 rounded bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(/assets/images/badges/TC1.gif)` }}
                  ></div>
                ))}
              </div>
              <div className="text-xs flex flex-col flex-1 justify-center text-gray-600">
                <span className="self-center">See all</span>
                <i className="fas fa-chevron-down ml-1 self-center"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 hidden">
          <h4 className="text-gray-500 mb-1 self-center text-xs font-semibold self-center">
            Chuckie's friends (23)
          </h4>
          <div className="bg-gray-100 border border-gray-400 rounded overflow-hidden">
            {[...Array(23)].map(friend => (
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
      </div>
    </MainLayout>
  );
};

export default Profile;
