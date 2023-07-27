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
        <div className="section-center hero">
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
      </section>
      {/* end hero */}

      {/* technlogy life saver */}
      <div className="section-center tech-challenge">
        <div className="info">
          <h2>
            If You Need a Technology Lifesaver, You’ve Come to the Right Place!
          </h2>
          <div className="content">
            <p>
              We’ve helped many organisations overcome their technological
              challenges, whether big or small, and we can do the same for you.
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
        <img src={flyingWoman} alt="Flying Futuristic Woman" className="img" />
      </div>
      {/* end technlogy life saver */}

      {/* we can help  */}

      <section className="section-center we-can-help">
        <h2>We Can Help Organisations From Any Industry</h2>
        <div className="info">
          <img src={superCar} alt="Futuristici super car" className="img" />
          <p>
            After all, technology is a near-universal concern. We do have
            particularly high levels of experience with organisations in the
            recruiting and manufacturing industries.
          </p>
        </div>
      </section>
      {/* end we can help an */}

      {/* testimonials */}
      <Testimonials />
      {/*end testimonials */}

      {/* call to action */}
      <Cta img={futuristicPerson} alt={'futuristic person'}/>
      {/* end call to action */}
    </Wrapper>
  );
};

export default Home;
