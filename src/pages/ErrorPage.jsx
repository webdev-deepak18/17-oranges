/** @format */

import React from "react";
import Wrapper from "../assets/wrappers/Error";
import logo from "../assets/images/17-oranges.png";
import whiteLogo from "../assets/images/17-oranges-white.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="content">
        <h2>Oops - content not found...</h2>
        <Link to="/" className="btn error-btn">
          Home
        </Link>
      </div>
      <Link to="/">
        <img src={whiteLogo} alt="17 oranges" className="logo" />
      </Link>
    </Wrapper>
  );
};

export default ErrorPage;
