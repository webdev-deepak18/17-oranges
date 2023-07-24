/** @format */

import React from "react";
import {useGlobalContext} from '../context'
import { menuLinks} from '../utils/menuData'

const Submenu = () => {
 const {pageId, setPageId} = useGlobalContext()
 const currentPage = menuLinks.find((item)=>item.pageId === pageId)
const handleMouseLeave = () => {
  setPageId(null)
}

  return <div className="submenu" onMouseLeave = {handleMouseLeave}>
    <h5>{currentPage?.page}</h5>
    <div className="submenu-links">
      {currentPage?.links?.map((item)=>{
        const {id, url, label, icon} = item
        return <a href={url} key={id} className="menu-item">{icon} {label}</a>
      })}
    </div>
  </div>
};

export default Submenu;
