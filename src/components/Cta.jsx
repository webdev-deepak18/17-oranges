/** @format */

import React from "react";

import Wrapper from "../assets/wrappers/Cta";

import { Link } from "react-router-dom";

const Cta = ({ img, alt }) => {
  return (
    <Wrapper>
      <img src={img} alt={alt} className="cta-img img" />
      <div className="info-container">
        <div className="info">
          <h2>We’re here to help</h2>
          <h4>Let’s start by discussing your challenge.</h4>
          <Link to="/contact" className="cta-btn btn">
            Get Started
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cta;
