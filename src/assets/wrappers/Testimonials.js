/** @format */

import styled from "styled-components";

const Wrapper = styled.section`
  /* sliders */
  .sliders-container {
    background: red;
    position: relative;
  }

  .mobile-img {
    position: absolute;
    top: 0;
    height: 200px;
  }

  .sliders {
    padding-top: 8rem;
    position: relative;
    width: 90%;
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
    box-shadow: var(--shadow-2);
  }

  .single-slider:hover{
    box-shadow: var(--shadow-4);
  }

  .quote-text-container {
    /* min-height: 300px; */
    margin-bottom: 2rem
  }

  .quote-icon {
    width: 50px;
    display: block;
    color: var(--primary-400);
    margin: 0 auto;
    margin-bottom: 1rem;
  }

  .quote-text {
    line-height: 1.8;
    font-size: clamp(1rem, 3vw, 1.3rem);
    margin-bottom: 1rem;
  }

  .author {
    color: var(--primary-500);
    font-size: clamp(1.1rem, 3vw, 1.5rem);
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
  /* end single slider css */
  /* end sliders */
`;

export default Wrapper;
