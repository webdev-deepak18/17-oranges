/** @format */

import React from "react";
import Wrapper from "../assets/wrappers/ToolsSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { nanoid } from "nanoid";

import toolsSliderData from "../utils/toolsSliderData";

const ToolsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    // speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 3000,
    pauseOnHove: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Wrapper>
      <div className="section-center">
        <h2 className="section-title">
          Some of the invaluable tools that deliver results for you
        </h2>

        <div className="slider-container">
          <Slider {...settings}>
            {toolsSliderData.map((item) => {
              const { tool, title } = item;
              return (
                <article className="tool-container" key={nanoid()}>
                  <article className="logo-container">
                    <span className="logo">{tool}</span>
                  </article>
                  <p className="tool-title">{title}</p>
                </article>
              );
            })}
          </Slider>
        </div>
      </div>
    </Wrapper>
  );
};

export default ToolsSlider;
