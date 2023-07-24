/** @format */

import React from "react";
import { menuLinks } from "../utils/menuData";
import { useGlobalContext } from "../context";

const Menu = () => {
  const { setPageId, pageId } = useGlobalContext();
  const currentPage = menuLinks.find((item) => item.pageId === pageId);

  return (
    <div className="nav-links">
      {menuLinks.map((item) => {
        const { pageId, page } = item;
        return (
          <button
            type="button"
            className="nav-link"
            onMouseEnter={() => setPageId(pageId)}
            key={pageId}
          >
            {page}
          </button>
        );
      })}
      <button type="button" className="nav-link-2">sign in</button>
      <button type="button" className="nav-link-2 active-btn">get started</button>
    </div>
  );
};

export default Menu;
