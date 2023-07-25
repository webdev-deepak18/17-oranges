/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  max-width: var(--max-width-1);
  /* border: 1px solid lightblue; */

  .slider-container {
    margin-bottom: 2rem;
    /* border: 2px solid red; */
    min-height: 300px;
    background: var(--white);
    color: var(--grey-700);
    width: var(--view-width);
    max-width: 920px;
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-2);
    transition: var(--transition);
    position: relative;
   
    margin: 0 auto;
    margin-top: 6rem;
  }

  @media (min-width: 992px) {
    .slider-container{
      margin-top: -2rem;
      margin-left: 2rem
    }
}

  .slider-container:hover {
    box-shadow: var(--shadow-4);
  }

  .item {
    padding: 2rem;
  }

  .item .icon {
    width: 60px;
    display: block;
    margin: 0 auto;
    color: var(--primary-400);
    margin-bottom: 2rem;
  }

  .quote {
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  .divider-line {
    height: 2px;
    background: var(--grey-200);
    width: 30%;
    /* margin-bottom: 1rem; */
  }

  .author-info {
    display: grid;
    grid-template-columns: auto auto;
    gap: 0.5rem;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .author {
    color: var(--primary-500);
    line-height: 1.5;
  }

  .author span {
    display: block;
    color: var(--grey-500);
    font-size: var(--small-text);
  }

  .logo {
    width: 90px;
  }

  /* react slick buttons */

  .slick-prev,
  .slick-next {
    display: none !important;
  }
  .slick-dots li button:before {
    font-size: 16px;
  }

  .slick-dots li.slick-active button:before {
    color: var(--primary-500);
  }

  .slick-dots li button:before:hover {
    color: var(--primary-500) !important;
  }

  .slick-dots {
    bottom: 1rem;
  }

  @media (min-width: 992px) {
    .slider-container {
      padding: 2rem;
    }
    .quote {
      font-size: 1.2rem;
      line-height: 1.8;
    }
    .logo {
      width: 180px;
    }
    .author-info {
      font-size: 1.3rem;
      font-weight: bold;
    }
    .author-info span {
      font-size: 1rem;
    }

    margin-left: 6rem;
    margin-top: 5rem;
  }
`;

export default Wrapper;
