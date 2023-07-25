/** @format */

import React from "react";
import { useGlobalContext } from "../context";
import { menuLinks } from "../utils/menuData";

const Submenu = () => {
  const { pageId, setPageId, leftZero, leftOne } = useGlobalContext();
  const currentPage = menuLinks.find((item) => item.pageId === pageId);
  const handleMouseLeave = () => {
    return
    setPageId(null);
  };

  const leftValueZero = `${pageId === "solutions" && leftZero}px`;
  console.log(leftValueZero);

  let leftValue = 0;
  if (pageId === "solutions") {
    leftValue = leftZero;
  }

  if (pageId === "about") {
    leftValue = leftOne;
  }
  console.log(leftValue);

  return (
    <div
      className={currentPage ? "submenu" : "hide-submenu"}
      onMouseLeave={handleMouseLeave}
    >
      {currentPage ? (
        <div className="content" style={{ left: `${leftValue}px` }}>
          {/* <h4>{currentPage?.page}</h4> */}
          <div className="submenu-links">
            {currentPage?.links?.map((item) => {
              const { id, url, label, icon } = item;
              return (
                <a href={url} key={id} className="menu-item">
                  {icon} {label}
                </a>
              );
            })}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Submenu;
