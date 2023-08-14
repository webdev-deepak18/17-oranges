/** @format */

import React from "react";
import Wrapper from "../assets/wrappers/Card";
import { MdKeyboardArrowUp, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import Animate from "./Animate";

const CardVertical = ({ id, title, desc, img, cardClass, link }) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(!isHovering);
  const handleMouseLeave = () => setIsHovering(!isHovering);

  return (
    <Wrapper className={cardClass}>
      <Animate>
        <div
          className={`card `}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card-img">
            <img
              src={img}
              alt={title}
              className={isHovering ? "img img-hover" : "img"}
            />
          </div>
          <div className={isHovering ? "overlay-hover" : "overlay"}></div>

          <div className="info">
            <h3 className="card-title">{title}</h3>
            <p className={isHovering ? "desc show-desc" : "desc"}>{desc}</p>
            <Link className="card-btn ">
              {isHovering ? (
                <Link to={link} >
                  Case Study{" "}
                </Link>
              ) : (
                "More"
              )}
              {isHovering ? <MdKeyboardArrowRight /> : <MdKeyboardArrowUp />}
            </Link>
          </div>
        </div>
      </Animate>
    </Wrapper>
  );
};

export default CardVertical;
