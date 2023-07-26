/** @format */

import Wrapper from "../assets/wrappers/Why17Oranges";
import { nanoid } from "nanoid";

import superCoolWoman from "../assets/images/super-cool-woman.webp";
import adamGibson from "../assets/images/adam-gibson.webp";

import happyGirl from "../assets/images/happy-girl.webp";
import socialResponsibility from "../assets/images/social-responsibility.webp";
import superCoolMan from "../assets/images/man-posing-with-headphones.webp";
import { FaQuoteLeft } from "react-icons/fa";
import Cta from "../components/Cta";
import thinkBigCardsData from "../utils/thinkBigCardsData";

const Why17Oranges = () => {
  return (
    <Wrapper>
      <section className="hero section-center">
        <h1 className="title">
          We help customers,
          <span className="orange-bold"> YOU CAN BE NEXT.</span>
        </h1>
      </section>

      <section className="info-section">
        <h4>
          We combine extensive business experience with technical skill. We
          don’t take ourselves too seriously. But we consistently deliver.
        </h4>
        <img src={superCoolWoman} alt="Super Cool Woman" className="img" />
      </section>

      {/* gibson quote */}
      <section className="section-center">
        <div className="gibson-quote">
          <img src={adamGibson} alt="Adam Gibson" className="img gibson-img" />
          <div className="quote-block">
            <span className="quote-icon">
              <FaQuoteLeft />
            </span>
            <div className="quote-info">
              <h3>
                Life’s too short not to do great things and have a little fun
                along the way.”
              </h3>
              <div className="divider-line"></div>
              <h4 className="author">
                Adam Gibson, <span>Our CEO</span>
              </h4>
            </div>
          </div>
        </div>
      </section>
      {/* end gibson quote */}

      {/* think big */}
      <section className="section-center">
        <h3 className="big-title">
          We encourage everyone to{" "}
          <span className="big-one orange-bold"> THINK</span>
          <span className="orange-bold big-two"> BIG</span>
        </h3>
        <div className="cards-container">
          {thinkBigCardsData.map((item) => {
            const { img, title, desc } = item;
            return (
              <article className="card" key={nanoid()}>
                <img src={img} className="img card-img" alt={title} />
                <div className="card-info">
                  <h3>{title}</h3>
                  <div className="divider-line"></div>
                  <p className="desc">{desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* end think big */}

      <Cta img={superCoolMan} />
    </Wrapper>
  );
};

export default Why17Oranges;
