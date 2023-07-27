/** @format */

import React from "react";

import { nanoid } from "nanoid";

import timeIsMoney from "../assets/images/time-is-money.webp";
import oneInOneOut from "../assets/images/one-in-one-out.webp";
import constructingValue from "../assets/images/constructing-value.webp";
import comingSoon from "../assets/images/coming-soon.webp";
import fashionYoungGirl from "../assets/images/fashion-young-girl.webp";
import Wrapper from "../assets/wrappers/CaseStudies";

import Cta from "../components/Cta";
import CardVertical from "../components/CardVertical";

const cardDataOne = {
  title: "Factoring: Time is Money",
  desc: "Global factoring business using a new portal to replace forms and faxes! What once took hours, now takes seconds. Happier client, happier colleagues.",
  img: timeIsMoney,
  cardClass: "card-one",
  id: nanoid(),
};
const cardDataTwo = {
  title: "One In, One Out?",
  desc: "Consulting to a leading executive search company based in North America. Our client's ambitious transformation plans required so much more than a technology swap.",
  img: oneInOneOut,
  cardClass: "card-two",
  id: nanoid(),
};

const cardDataThree = {
  title: "Constructing Value",
  desc: "A European client planning the migration of 20-year-old manual processes to an online portal. Sustainability, scale and efficiency in one simple system.",
  cardClass: "card-three",
  img: constructingValue,
  id: nanoid(),
};

const cardDataFour = {
  title: "Coming soon!",
  desc: "",
  cardClass: "card-four",
  img: comingSoon,
  id: nanoid(),
};

const CaseStudies = () => {
  return (
    <Wrapper>
      <section className="section">
        <div className="section-center">
          <div className="section-title">
            <h1>
              Discover Our Transformative Work Through
              <span className="orange-bold"> CASE STUDIES</span>
            </h1>
            <h4>
              Dive into real-world examples showcasing how our innovative
              technology solutions have revolutionized businesses and empowered
              our clients to thrive.
            </h4>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-center">
          <div className="cards-container">
            <CardVertical {...cardDataOne} />
            <CardVertical {...cardDataTwo} />
            <CardVertical {...cardDataThree} />
            <CardVertical {...cardDataFour} />
          </div>
        </div>
      </section>

      <Cta img={fashionYoungGirl} alt="Happy Asian Woman" />
    </Wrapper>
  );
};

export default CaseStudies;
