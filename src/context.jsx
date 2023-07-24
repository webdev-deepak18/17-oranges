/** @format */

import { useState, useContext, createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const[toggleTheme, setToggleTheme] = useState(false)
  return (
    <AppContext.Provider value={{toggleTheme, setToggleTheme  }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
