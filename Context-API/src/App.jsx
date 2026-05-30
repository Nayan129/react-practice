import React, { useContext } from "react";
import { userDataContext } from "./Context/UserContext";

const App = () => {
  const data = useContext(userDataContext);
  return <div>Hello {data}</div>;
};

export default App;
