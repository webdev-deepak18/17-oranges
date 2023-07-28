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
      {/* hero */}
      <section className="section">
        <div className="section-center hero-section-center">
          <div className="section-title">
            <h1>
              We Make Great Technology Happen
              <span className="orange-bold"> BEAUTIFULLY</span>
            </h1>
          </div>
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
      </section>

      <section className="section hero-section-two">
        <div className="section-title hero-info">
          <h3>
            If You Need a Digital Transformation Partner, You’ve Come to the
            Right Place!
          </h3>
          <h5>
            Maybe you know what you need to do.
            <br /> Maybe you don’t.
          </h5>
        </div>
        <div className="hero-img">
          <img src={youngMan} alt="young futuristic man" className="img" />
        </div>
      </section>
      {/* end hero */}

      {/* technlogy life saver */}
      <section className="section tech-challenge-section">
        <div className="section-center tech-container ">
          <div className="tech-info">
            <h2>
              If You Need a Technology Lifesaver, You’ve Come to the Right
              Place!
            </h2>
            <div className="content">
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
          <div className="tech-img">
            <img
              src={flyingWoman}
              alt="Flying Futuristic Woman"
              className="img"
            />
          </div>
        </div>
      </section>
      {/* end technlogy life saver */}

      {/* we can help  */}

      <section className="section">
        <div className="section-center we-can-help">
          <div className="section-title">
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
      <Testimonials />
      {/*end testimonials */}

      {/* call to action */}
      <Cta img={futuristicPerson} alt={"futuristic person"} />
      {/* end call to action */}
    </Wrapper>
  );
};

export default Home;
