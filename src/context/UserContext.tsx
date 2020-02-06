import React, { createContext } from "react";
import { useContext } from "react";

interface User {
  username?: string;
  look?: string;
}

interface UserProviderProps {
  children: React.ReactNode;
  value: User;
}

const UserContext = createContext<User | undefined>(undefined);

export const UserProvider: React.FC<UserProviderProps> = ({ children, value }) => {
  return <UserContext.Provider value={value}>{children} </UserContext.Provider>;
};

export const useUserState = () => {
  const context = useContext(UserContext);

  // Throw error if used outside the User provider
  if (context === undefined) throw new Error("useUserState must be used within a UserProvider");

  return context;
};
