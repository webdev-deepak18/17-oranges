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

import { commitCardsData } from "../utils/thinkBigCardsData";
import Testimonials from "../components/Testimonials";
import { motion } from "framer-motion";
import Animate from "../components/Animate";

const Why17Oranges = () => {
  return (
    <Wrapper>
      <section className="section">
        <div className="section-center">
          <div className="section-title">
            <Animate>
              <h1>
                We Help Clients
                <br />
                <span className="orange-bold"> FULL STOP.</span>
              </h1>
            </Animate>
          </div>
        </div>
      </section>

      <section className="section info-section">
        <div className="section-center">
          <Animate>
            <h4>
              We combine extensive business experience with technical skill. We
              don’t take ourselves too seriously. But we consistently deliver.
            </h4>
          </Animate>
        </div>
        <motion.img
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.25 }}
          initial="hidden"
          animate="visible"
          src={superCoolWoman}
          alt="super cool woman"
          className="img info-img"
        />
      </section>

      {/* gibson quote */}
      <section className="section">
        <div className="section-center">
          <div className="gibson-quote">
            <Animate>
              <img
                src={adamGibson}
                alt="Adam Gibson"
                className="img gibson-img"
              />
            </Animate>
            <Animate>
              <div className="quote-block">
                <span className="quote-icon">
                  <FaQuoteLeft />
                </span>
                <div className="quote-info">
                  <h3>
                    Life’s too short not to do great things and have a little
                    fun along the way.”
                  </h3>
                  <div className="divider-line"></div>
                  <h4 className="author">
                    Adam Gibson, <span>Our CEO</span>
                  </h4>
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </section>
      {/* end gibson quote */}

      {/* think big */}
      <section className="section">
        <div className="section-center">
          <Animate>
            <h3 className="big-title">
              We encourage everyone to{" "}
              <span className="big-one orange-bold"> THINK</span>
              <span className="orange-bold big-two"> BIG</span>
            </h3>
          </Animate>
          <div className="cards-container">
            {thinkBigCardsData.map((item) => {
              const { img, title, desc } = item;
              return (
                <Animate key={nanoid()}>
                  <article className="card">
                    <img src={img} className="img card-img" alt={title} />
                    <div className="card-info">
                      <h3>{title}</h3>
                      <div className="divider-line"></div>
                      <p className="desc">{desc}</p>
                    </div>
                  </article>
                </Animate>
              );
            })}
          </div>
        </div>
      </section>
      {/* end think big */}
      <Testimonials img={happyGirl} />
      {/* commitment */}
      <section className="section social-section">
        <div className="section-center">
          <div className="section-title">
            <Animate>
              <h1>
                Our Commitment to do the{" "}
                <span className="orange-bold">RIGHT THING</span>
              </h1>
            </Animate>
          </div>

          <div className="info-block">
            <div className="img-block">
              <Animate>
                <h4>
                  We believe in acting responsibly. That’s why we’re committed
                  to integrating sustainability into every part of the business,
                  including with our clients, solutions and the entire supply
                  chain.
                </h4>
              </Animate>
              <Animate>
                <img
                  src={socialResponsibility}
                  alt="social responsibility"
                  className="img commitment-img"
                />
              </Animate>
            </div>

            <div className="commitment-cards-block">
              {commitCardsData.map((item) => {
                const { title, desc } = item;
                return (
                  <Animate key={nanoid()}>
                    <div className="commitment-card">
                      <h3>{title}</h3>
                      <p>{desc}</p>
                    </div>
                  </Animate>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* end commitment */}

      <Cta img={superCoolMan} />
    </Wrapper>
  );
};

export default Why17Oranges;
