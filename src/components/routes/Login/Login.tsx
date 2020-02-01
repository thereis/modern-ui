import React from "react";

interface LoginProps {
  handleLoginSubmit: (e: any) => void;
}

const Login: React.FC<LoginProps> = ({ handleLoginSubmit }) => {
  return (
    <div className="bg-gray-300 max-w-3xl mx-auto mt-20">
      <div className="border border-gray-400 rounded shadow bg-gray-100 flex justify-between p-1">
        <div className="p-1 border flex rounded border-gray-200 flex-1 p-px bg-white">
          <div className="bg-blue-300 rounded w-full"></div>
        </div>
        <div className="px-12 py-2">
          <div>
            <span className="text-4xl">LOGO</span>
          </div>
          <div className="">
            <form className="flex flex-col" onSubmit={handleLoginSubmit}>
              <label className="text-xs text-gray-500" htmlFor="input__username">
                Username
              </label>
              <input
                id="input__username"
                className="rounded-sm border border-gray-400 bg-gray-200 px-1"
                type="text"
              />
              <label className="text-xs text-gray-500" htmlFor="input__password">
                Password
              </label>
              <input
                id="input__password"
                className="rounded-sm border border-gray-400 bg-gray-200 px-1"
                type="password"
              />
              <input
                className="mt-2 border border-blue-400 rounded-sm bg-blue-300 text-sm text-gray-200"
                type="submit"
                value="Login"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
