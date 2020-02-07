import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppState } from 'context/app.context';

const HeaderDropDown = () => {
  const [visible, setVisible] = useState(false);

  const { user } = useAppState();

  const habboFigure = {
    backgroundImage: `url("https://www.habbo.nl/habbo-imaging/avatarimage?figure=${process.env.REACT_APP_HABBO_FIGURE}&size=s")`,
    backgroundPositionY: '-4px',
    backgroundPositionX: '1px'
  };
  return (
    <div
      className="hover:bg-fadedwhite-100 cursor-pointer rounded relative  inline-block w-40 "
      onMouseEnter={() => setVisible(!visible)}
      onMouseLeave={() => setVisible(!visible)}
    >
      <div
        className={`w-full relative flex ${
          visible ? ' rounded-t' : ' rounded'
        } border-gray-400   z-50`}
      >
        <button className="flex p-1 w-full justify-between">
          <div
            className="h-8 w-8 bg-center flex-shrink-0 bg-no-repeat rounded bg-gray-200"
            style={habboFigure}
          ></div>
          <div className="flex flex-col w-full self-center">
            <span className="text-white text-center flex-grow self-center mx-1 font-semibold text-sm">
              {user?.username}
            </span>
            <div
              className={`${
                visible ? 'h-2' : 'h-0'
              } overflow-hidden flex justify-center bg-fade`}
            >
              <i
                className={`fas fa-caret-down self-center text-xs text-fadedwhite-500 mr-2`}
              ></i>
            </div>
          </div>
        </button>
      </div>
      {visible && (
        <div className="absolute w-full">
          <div className="mt-2 p-1 flex shadow flex-col bg-gray-100 border border-gray-400 w-full rounded">
            <Link
              className="p-1 text-xs text-gray-500 rounded hover:bg-gray-200"
              to="#"
            >
              Inbox
            </Link>
            <Link
              className="p-1 text-xs text-gray-500 rounded hover:bg-gray-200"
              to="#"
            >
              Settings
            </Link>
            <Link
              className="p-1 text-xs text-gray-500 rounded hover:bg-gray-200"
              to="#"
            >
              Log out
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderDropDown;
