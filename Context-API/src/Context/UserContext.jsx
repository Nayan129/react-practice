import React, { createContext } from "react";

export const userDataContext = createContext();

const UserContext = ({ children }) => {
  return <div>{children}</div>;
};

export default UserContext;
