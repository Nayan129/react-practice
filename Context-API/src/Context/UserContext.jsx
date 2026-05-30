import React, { createContext } from "react";

export const userDataContext = createContext();

const user = "Nayan";

const UserContext = ({ children }) => {
  return (
    <userDataContext.Provider value={user}>{children}</userDataContext.Provider>
  );
};

export default UserContext;
