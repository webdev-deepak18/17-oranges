/** @format */

import React, { useState } from "react";
import Wrapper from "../assets/wrappers/TeamCard";
import professionalWoman from "../assets/images/professional-woman-smiling.webp";
import Animate from "./Animate";
import { AiOutlineLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";


const TeamCard = ({ image, name, role, linkedIn }) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(!isHovering);
  const handleMouseLeave = () => setIsHovering(!isHovering);
  return (
    <Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Animate>
        <div
          className={isHovering ? "card-container hovering" : "card-container"}
        >
          <img src={image} alt="a smiling woman" className="img card-img" />
          <div className="card-info">
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              veritatis explicabo placeat similique delectus maxime fugit
              obcaecati suscipit ipsum cumque!
            </p>
            <div className="divider-line"></div> */}
            <h5>
              {name} <span>{role}</span>
            </h5>
            <Link to={linkedIn} target="_blank" className="icon"><AiOutlineLinkedin/></Link>
          </div>
        </div>
      </Animate>
    </Wrapper>
  );
};

export default TeamCard;
