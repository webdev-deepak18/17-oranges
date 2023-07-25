/** @format */

import React from "react";
import Submenu from "../components/Submenu";

import youngMan from "../assets/images/young-man-enjoying-metaverse.webp";
import flyingWoman from "../assets/images/futuristic-woman-flying.webp";
import superCar from "../assets/images/super-car.webp";
import happyGirl from "../assets/images/happy-girl.webp";
import futuristicPerson from "../assets/images/futuristic-person.webp";
import { ReactComponent as Development } from "../assets/images/development.svg";
import { ReactComponent as Consultancy } from "../assets/images/consultancy.svg";
import { ReactComponent as Resources } from "../assets/images/resources.svg";

import Wrapper from "../assets/wrappers/Home";

const Home = () => {
  return (
    <Wrapper>
      {/* hero */}
      <div className="section-center hero-section-center">
        <div className="hero">
          <div className="info">
            <h1>
              We Make Great Technology Happen,
              <span className="orange-bold"> BEAUTIFULLY</span>
            </h1>
            <div className="tags">
              <span>
                <Development />
                Development
              </span>
              <span>
                <Consultancy />
                Consultancy
              </span>
              <span>
                <Resources />
                Resourcing
              </span>
            </div>
          </div>
          <div className="hero-img">
            <img src={youngMan} alt="" className="img" />
          </div>
          <div className="technology">
            <h2>
              Is your technology getting in the way of your organisation’s
              success?
            </h2>
            <h3>Maybe you know what you need to do. Maybe you don’t.</h3>
          </div>
        </div>
      </div>
      {/* end hero */}

      {/* we can help any industry */}
      <h3>we can help any industry</h3>
      {/* end we can help any industry */}

      {/* testimonials */}
      <h3>Testimonials</h3>
      {/*end testimonials */}

      {/* call to action */}
      <h3>call to action</h3>
      {/* end call to action */}
    </Wrapper>
  );
};

export default Home;
