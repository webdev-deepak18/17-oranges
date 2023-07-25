/** @format */

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Wrapper from "../assets/wrappers/Testimonials";
import happyGirl from "../assets/images/happy-girl.webp";
import siteforum from "../assets/images/siteforum.png";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="section-center testimonials-section">
      {/* title */}
      <img src={happyGirl} alt="happy futuristic girl" className="img testimonials-img" />
      <h2 className="title">
        Why clients <span className="orange-bold">17 Oranges</span>
      </h2>
      <Wrapper>
        {/* testimonial slider */}
        <div className="slider-container">
          <Slider {...settings}>
            <div className="item">
              <span className="icon">
                <FaQuoteLeft />
              </span>
              <p className="quote">
                We chose to partner with 17 Oranges because I simply could not
                find another team that offer the wide range of expertise
                combined with the real-world experience that they have in
                abundance. They truly understand what is is like to live ours
                and our client's journey which makes it so simple to arrive at
                our end goal. We have now built a solid partnership with them
                that will see us well into the future.”
              </p>
              {/* <div className="divider-line"></div> */}
              <div className="author-info">
                <p className="author">
                  Mark Schlenzig, <span>Cofounder - SITEFORUM</span>
                </p>
                <img src={siteforum} alt="siteforum logo" className="logo" />
              </div>
            </div>

            <div className="item">
              <span className="icon">
                <FaQuoteLeft />
              </span>
              <p className="quote">
                We chose to partner with 17 Oranges because I simply could not
                find another team that offer the wide range of expertise
                combined with the real-world experience that they have in
                abundance. They truly understand what is is like to live ours
                and our client's journey which makes it so simple to arrive at
                our end goal. We have now built a solid partnership with them
                that will see us well into the future.”
              </p>
              {/* <div className="divider-line"></div> */}
              <div className="author-info">
                <p className="author">
                  Mark Schlenzig, <span>Cofounder - SITEFORUM</span>
                </p>
                <img src={siteforum} alt="siteforum logo" className="logo" />
              </div>
            </div>

            <div className="item">
              <span className="icon">
                <FaQuoteLeft />
              </span>
              <p className="quote">
                We chose to partner with 17 Oranges because I simply could not
                find another team that offer the wide range of expertise
                combined with the real-world experience that they have in
                abundance. They truly understand what is is like to live ours
                and our client's journey which makes it so simple to arrive at
                our end goal. We have now built a solid partnership with them
                that will see us well into the future.”
              </p>
              {/* <div className="divider-line"></div> */}
              <div className="author-info">
                <p className="author">
                  Mark Schlenzig, <span>Cofounder - SITEFORUM</span>
                </p>
                <img src={siteforum} alt="siteforum logo" className="logo" />
              </div>
            </div>

            <div className="item">
              <span className="icon">
                <FaQuoteLeft />
              </span>
              <p className="quote">
                We chose to partner with 17 Oranges because I simply could not
                find another team that offer the wide range of expertise
                combined with the real-world experience that they have in
                abundance. They truly understand what is is like to live ours
                and our client's journey which makes it so simple to arrive at
                our end goal. We have now built a solid partnership with them
                that will see us well into the future.”
              </p>
              {/* <div className="divider-line"></div> */}
              <div className="author-info">
                <p className="author">
                  Mark Schlenzig, <span>Cofounder - SITEFORUM</span>
                </p>
                <img src={siteforum} alt="siteforum logo" className="logo" />
              </div>
            </div>
          </Slider>
        </div>
        {/* img */}
      </Wrapper>
    </section>
  );
};

export default Testimonials;
