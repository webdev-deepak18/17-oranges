/** @format */

import React from "react";
import Wrapper from "../assets/wrappers/Development";
import Cta from "../components/Cta";
import happyAsianWoman from "../assets/images/happy-asian-woman.webp";
import CardVertical from "../components/CardVertical";
import {nanoid} from 'nanoid'

import legacySoftwareManagement from "../assets/images/legacy-software-management.webp";
import enhancementsAndIntegrations from "../assets/images/enhancements-and-integrations.webp";
import bespokeProductDesignAndBuild from "../assets/images/bespoke-product-design-and-build.webp";
import dataManagement from "../assets/images/data-management.webp";
import CardHorizontal from "../components/CardHorizontal";

const dataOne = {
  title: "Legacy Software Management",
  desc: "We’ll manage your technology estate to ensure that it not only meets your needs, but also that it aligns with your goals. ",
  img: legacySoftwareManagement,
  cardClass: 'card-one',
  id: nanoid()
};
const dataTwo = {
  title: "Enhancements & Integrations",
  desc: "We offer amazing design and architecture to empower digital transformation that leads to business success. ",
  img: enhancementsAndIntegrations,
  cardClass: 'card-two',
  id: nanoid(),
};

const dataThree = {
  title: "Bespoke Product Design & Build",
  desc: "We deliver scalable, secure & reliable applications for even the most complex business requirements of global companies. ",
  cardClass: 'card-three',
  img: bespokeProductDesignAndBuild,
  id: nanoid(),
};

const dataFour = {
  title: "Data Management",
  desc: "Data powers business today. Whether you want to migrate, enrich or consolidate data, we have the expertise you need.",
  cardClass: 'card-four',
  img: dataManagement,
  id: nanoid(),
};




const Development = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <div className="hero">
          <h1 className="title">
            Real-World Solutions, Out-of-This
            <span className="orange-bold"> World IMPACT</span>
          </h1>
          <div className="info">
            <h3>
              We turn days into hours and hours into seconds.We can do the same
              for you.
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>

      <div className="card-container">
        <CardVertical {...dataOne} />
        <CardHorizontal {...dataTwo} />
        <CardHorizontal {...dataThree}  />        
        <CardVertical {...dataFour} />
      </div>
      <Cta img={happyAsianWoman} alt="Happy Asian Woman" />
    </Wrapper>
  );
};

export default Development;
