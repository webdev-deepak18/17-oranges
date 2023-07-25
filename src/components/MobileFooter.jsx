/** @format */

import React from "react";
import logo from "../assets/images/17-oranges.png";
import whiteLogo from "../assets/images/17-oranges-white.png";
import { useGlobalContext } from "../context";
import { ReactComponent as Tshirt } from "../assets/images/t-shirt.svg";

import { ReactComponent as LinkedIn } from "../assets/images/linkedin-fill.svg";
import { NavLink, Link } from "react-router-dom";

const year = new Date();

const MobileFooter = () => {
  const { toggleTheme } = useGlobalContext();
  return (
    <div className="mobile-footer">
      {/* // logo */}
      <img src={toggleTheme ? whiteLogo : logo} alt="logo" className="logo" />

      {/* // menu list  */}
      <div className="menu-container">
        <div className="menu">
          <h4>Solutions</h4>
          <div className="links">
            <NavLink className="link" to="/solutions/development">
              Development
            </NavLink>
            <NavLink className="link" to="/solutions/consultancy">
              consultancy
            </NavLink>
            <NavLink className="link" to="/solutions/resourcing">
              resourcing
            </NavLink>
          </div>
        </div>
        <div className="menu">
          <h4>About</h4>
          <div className="links">
            <NavLink className="link" to="/about/why-17-oranges">
              Why 17 Oranges
            </NavLink>
            <NavLink className="link" to="/about/leadership">
              Leadership
            </NavLink>
            <NavLink className="link" to="/about/case-studies">
              Case Studies
            </NavLink>
          </div>
        </div>
      </div>

      {/* follow */}
      <div className="follow-container">
        <Link to="/">
          <LinkedIn />
          LinkedIn
        </Link>
        <Link to="/">
          <Tshirt />
          Merchandise
        </Link>
      </div>

      <small className="copyright">
        17 Oranges Limited © ${year.getFullYear()}
      </small>
    </div>
  );
};

export default MobileFooter;
