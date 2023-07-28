/** @format */

import styled from "styled-components";

const Wrapper = styled.section`
  padding-top: 0;
  margin-bottom: 5rem;
  /* sliders */
  .testimonials-container {
    position: relative;
  }
  .sliders-container {
    /* background: red; */
    position: relative;
  }

  .section-center {
    position: relative;
  }
  .desktop-img {
    display: none;
  }

  .section-title {
    margin-bottom: 2rem;
    background: rgba(255, 255, 255, 0.8);
    padding: 1rem 0 1rem 1rem;
    border-radius: var(--borderRadius);
  }
  .section-title h2 {
    color: var(--grey-600);
    font-size: 1.5rem;
  }
  .section-title h2 span {
    display: block;
    font-size: 3rem;
  }

  .author-logo-container {
    display: grid;
    gap: 2rem;
  }

  .mobile-img {
    position: absolute;
    top: 0;
    height: 200px;
  }

  .sliders {
    padding-top: 8rem;
    position: relative;
    width: 85%;
    margin: 0 auto;
  }

  /* single slider css */
  .single-slider {
    background: var(--white);
    padding: 1rem;
    display: grid;
    justify-items: center;
    text-align: left;
    border-radius: 10px;
    height: auto;
  }

  .quote-text-container {
    /* min-height: 300px; */
    margin-bottom: 2rem;
  }

  .quote-icon {
    width: 50px;
    display: block;
    color: var(--primary-300);
    margin: 0 auto;
    margin-bottom: 1rem;
  }

  .quote-text {
    line-height: 1.8;
    font-size: clamp(1rem, 3vw, 1.2rem);
    margin-bottom: 1rem;
    color: var(--grey-500);
  }

  .author {
    color: var(--primary-500);
    font-size: clamp(1.1rem, 3vw, 1.3rem);
  }

  .author-title {
    display: block;
    color: var(--grey-400);
    font-size: clamp(0.8rem, 3vw, 1rem);
  }

  .logo-container {
    max-width: 120px;
    margin: 0 auto;
  }

  /* tablet css */
  @media (min-width: 768px) {
    .section-title h2 span {
      display: inline;
      font-size: 4rem;
    }
    .single-slider {
      padding: 3rem;
    }

    .section-title {
      max-width: 650px;
    }
    .sliders {
      padding-top: 0;
      max-width: 800px;
      margin: 0 auto 0 0;
    }

    .author-logo-container {
      grid-template-columns: 1fr 1fr;
      justify-content: space-between;
      align-items: center;
    }

    .logo-container {
      margin: 0;
      justify-self: end;
    }
  }

  @media (min-width: 992px) {
    .sliders {
      max-width: 850px;
    }
    .mobile-img {
      display: none;
    }

    .desktop-img {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      width: 60%;
    }

    .testimonials-container {
      padding-top: 5rem;
    }

    .section-title h2 {
      font-size: 2rem;
    }
    .slick-prev,
    .slick-next {
      display: none !important;
    }
  }

  @media (min-width: 1200px) {
    .quote-icon {
      margin-bottom: 3rem;
      width: 70px;
    }
    .single-slider {
      padding: 4rem;
    }
    .logo-container {
      max-width: 150px;
    }
    .testimonials-container {
      padding-top: 11rem;
    }

    .section-title {
      max-width: 850px;
    }
    .section-title h2 {
      font-size: 2.5rem;
    }
    .section-title h2 span {
      font-size: 5.5rem;
    }
  }

  @media (min-width: 1550px) {
    .sliders {
      max-width: 1020px;
    }
    .section-title {
      max-width: 980px;
    }
    .section-title h2 {
      font-size: 2.5rem;
    }
    .section-title h2 span {
      font-size: 7rem;
    }
  }

  /* end single slider css */

  /* slider library css */

  .slick-slider {
    box-shadow: var(--shadow-4);
  }

  .slick-prev::before,
  .slick-next::before {
    color: var(--primary-300);
    font-size: clamp(1rem, 3vw, 1.5rem);
    transition: var(--transition);
  }
  .slick-prev::before:hover,
  .slick-next::before:hover {
    color: var(--primary-700);
    transform: scale(1.02);
  }

  .slick-dots {
    bottom: -3rem;
  }

  .slick-dots li button:before {
    font-size: 12px;
    color: var(--primary-500);
  }

  /* end sliders */
`;

export default Wrapper;
