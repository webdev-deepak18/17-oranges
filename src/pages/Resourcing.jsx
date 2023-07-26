/** @format */

import Wrapper from "../assets/wrappers/Resourcing";
import { nanoid } from "nanoid";

import afroAmerican from "../assets/images/happy-african-man-with-wireless-headphone.webp";
import austronautOne from "../assets/images/austronaut-one.webp";
import austronautTwo from "../assets/images/austronaut-two.webp";
import austronautThree from "../assets/images/austronaut-three.webp";
import coolMan from "../assets/images/coolman-using-smartphone.webp";
import coolWoman from "../assets/images/cool-woman-wearing-specs.webp";
import CardVertical from "../components/CardVertical";

import Cta from "../components/Cta";

const cardDataOne = {
  title: "Use Our Experts",
  desc: "Use our technology experts — developers, administrators, Salesforce consultants, etc. — to achieve amazing results.",
  img: austronautOne,
  cardClass: "",
  id: nanoid(),
};
const cardDataTwo = {
  title: "Build Your Team",
  desc: "We build or fill out your IT team by bringing in professionals with the skill sets you need to achieve your technology goals.",
  img: austronautTwo,
  cardClass: "",
  id: nanoid(),
};

const cardDataThree = {
  title: "Get Operations Support",
  desc: "We operate your IT team using our agile approach. We manage each team member and grow the team as needed.",
  cardClass: "",
  img: austronautThree,
  id: nanoid(),
};

const Resources = () => {
  return (
    <Wrapper>
      <section className="hero section-center">
        <h1 className="title">
          Welcome to Your Very Own{" "}
          <span className="orange-bold"> IT STAFF RESOURCING HUB</span>
        </h1>
      </section>

      <section className="info-section">
        <h4>
          Need tech expert guidance or help filling in skills gaps. We can
          create and/or manage your IT team as needed. So you can focus on
          growing your business.
        </h4>
        <img src={afroAmerican} alt="arfo american" className="img" />
      </section>

      {/* cards */}
      <section className="card-container">
        <CardVertical {...cardDataOne} />
        <CardVertical {...cardDataTwo} />
        <CardVertical {...cardDataThree} />
      </section>
      {/* end cards */}

      {/* answers section */}

      <section className="section-center">
        <div className="answers">
          <div className="info">
            <h1 className="title">
              Flexible <span className="orange-bold">RESOURCING</span> for Seamless Operations
            </h1>
            <h3>(because we’ve heard most of them before)</h3>
          </div>
          <div className="img-container">
            <img src={coolMan} alt="futuristic woman" className="img" />
          </div>
        </div>
      </section>

      {/* end answers section */}
      <Cta img={coolWoman} />
    </Wrapper>
  );
};

export default Resources;
