/** @format */

import React, { useState } from "react";
import Wrapper from "../assets/wrappers/TeamCard";
import professionalWoman from "../assets/images/professional-woman-smiling.webp";

const TeamCard = ({img}) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(!isHovering);
  const handleMouseLeave = () => setIsHovering(!isHovering);
  return (
    <Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={isHovering ? 'card-container hovering': 'card-container'}>
        <img
          src={img}
          alt="a smiling woman"
          className="img card-img"
        />
        <div className="card-info">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            veritatis explicabo placeat similique delectus maxime fugit
            obcaecati suscipit ipsum cumque!
          </p>
          <div className="divider-line"></div>
          <h5>
            May Anna <span>Manager</span>
          </h5>
        </div>
      </div>
    </Wrapper>
  );
};

export default TeamCard;
