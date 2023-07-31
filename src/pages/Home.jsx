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
import Testimonials from "../components/Testimonials";
import Cta from "../components/Cta";

const Home = () => {
  return (
    <Wrapper>
      <section className="section">
        <div className="section-center hero-center">
          <div className="section-title hero-info-container">
            <h1>
              We Make Great Technology Happen,{" "}
              <span className="orange-bold">BEAUTIFULLY</span>
            </h1>
            <div className="tags">
              <div className="tag">
                <span>
                  <Development />
                </span>
                <p>Development</p>
              </div>
              <div className="tag">
                <span>
                  <Consultancy />
                </span>
                <p>Consultancy</p>
              </div>
              <div className="tag">
                <span>
                  <Resources />
                </span>
                <p>Resourcing</p>
              </div>
            </div>
          </div>
          <div className="hero-img">
            <img src={youngMan} alt="futuristic person" className="img" />
          </div>
        </div>
      </section>

      <section className="section ">
        <div className="section-center intro-center">
          <div className="intro-img">
            <img
              src={flyingWoman}
              alt="futuristic flying woman"
              className="img"
            />
          </div>
          <div className="intro-content">
            <h3>
              If You Need a Digital Transformation Partner, You’ve Come to the
              Right Place!
            </h3>
            <div className="intro-desc">
              <p>
                We understand how frustrating technology challenges can be, and
                how damaging they can be to growth, efficiency, and just about
                everything, really.
              </p>
              <p>
                We’ve helped many organisations overcome their technological
                challenges, whether big or small, and we can do the same for
                you.
              </p>
              <p>
                We use a simple framework that delivers clarity, confidence, and
                amazing outcomes.
              </p>
              <p>
                We immerse ourselves with your organisation, so we fully
                understand your situation and business objectives. Then we
                determine where things are breaking down, where you need to
                streamline your processes, and ultimately where your technology
                needs to go.
              </p>
              <p>Then, using our agile approach, we make sure you get there.</p>
            </div>
          </div>
        </div>
      </section>

      {/* we can help  */}

      <section className="section">
        <div className="section-center we-can-help">
          <div className="section-title ">
            <h1>
              We Can Help Organisations From{" "}
              <span className="orange-bold"> ANY INDUSTRY</span>
            </h1>
          </div>
          <div className="info">
            <img src={superCar} alt="Futuristici super car" className="img" />
            <p>
              After all, technology is a near-universal concern. We do have
              particularly high levels of experience with organisations in the
              recruiting and manufacturing industries.
            </p>
          </div>
        </div>
      </section>
      {/* end we can help an */}

      {/* testimonials */}
      <Testimonials img={happyGirl} />
      {/*end testimonials */}

      {/* call to action */}
      <Cta img={futuristicPerson} alt={"futuristic person"} />
      {/* end call to action */}
    </Wrapper>
  );
};

export default Home;
