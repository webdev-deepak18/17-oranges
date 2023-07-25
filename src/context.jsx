/** @format */

import { useState, useContext, createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [toggleTheme, setToggleTheme] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isShowSubmenu, setIsShowSubmenu] = useState(false);
  const [pageId, setPageId] = useState(null);
  const [leftZero, setLeftZero] = useState(0)
  const [leftOne, setLeftOne] = useState(0)
  const [showSmiley, setShowSmiley] = useState(false)
  const greeting = 'hello world'

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const toggleSubmenu = () => setIsShowSubmenu(!isShowSubmenu);

  return (
    <AppContext.Provider
      value={{
        toggleTheme,
        setToggleTheme,
        isSidebarOpen,
        toggleSidebar,
        isShowSubmenu,
        setIsShowSubmenu,
        pageId,
        setPageId,
        greeting,
        leftZero,
        setLeftZero,
        leftOne,
        setLeftOne,
        showSmiley,
        setShowSmiley
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
