/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  .title {
    margin: 0 auto;
  }

  .info-section {
    display: grid;
    width: 100vw;
    margin: 0 auto;
    gap: 2rem;
    align-items: center;
  }

  .info-section .img {
    max-height: 450px;
  }

  .info-section h4 {
    width: 90%;
    margin: 0 auto;
    justify-self: center;
    line-height: 1.3;
  }

  @media (min-width: 768px) {
    .info-section {
      grid-template-columns: 1fr 1fr;
    }
    .info-section h4 {
      max-width: 20rem;
    }
  }

  @media (min-width: 992px) {
    .info-section {
      grid-template-columns: 3fr 4fr;
    }
    .info-section h4 {
      max-width: 25rem;
    }
  }

  /* gibson quote */
  .gibson-quote {
    max-width: 992px;
    margin: 0 auto;
    display: grid;
    gap: 3rem;
    justify-items: center;
    align-items: center;
  }

  .gibson-img {
    max-width: 150px;
  }

  .quote-block {
    /* background: red; */
    position: relative;
    display: grid;
  }
  .quote-icon {
    width: 50px;
    display: block;
    position: absolute;
    top: -1rem;
    left: 0;
    color: var(--primary-300);
  }

  .quote-info {
    /* background: var(--primary-100); */
    position: relative;
    display: grid;
    gap: 1rem;
    width: 80%;
    justify-self: right;
  }

  .quote-info h3 {
    line-height: 1.5;
    font-weight: 600;
  }

  .divider-line {
    height: 2px;
    background: var(--grey-100);
    width: 40%;
  }

  @media (min-width: 500px) {
    .quote-info {
      width: 85%;
      max-width: 400px;
    }
  }

  @media (min-width: 992px) {
    .gibson-quote {
      grid-template-columns: 2fr 4fr;
      gap: 5rem;
      margin-top: 5rem;
    }
    .gibson-img {
      max-width: 100%;
    }

    .quote-info {
      max-width: 100%;
    }
  }

  /* think big */
  .big-title {
    text-align: center;
  }
  .big-one {
    font-size: clamp(4rem, 10vw, 6rem);
  }
  .big-two {
    font-size: clamp(6rem, 15vw, 22rem);
    margin-left: -1rem;
  }

  .cards-container {
    margin-top: 3rem;
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
  }

  .card {
    display: grid;
    gap: 1.5rem;
  }

  .card-info {
    padding: 0.5rem;
    display: grid;
    gap: 0.8rem;
  }

  .card-info p {
    line-height: 1.5;
  }

  .card-img{
    border-radius: var(--borderRadius);
  }

  @media (min-width: 768px) {
    .cards-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 992px) {
    .cards-container {
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: 1fr auto;
      max-width: 1200px;
      margin: 0 auto;
      margin-top: 3rem;
      gap: 5rem;
 
    }

    .card-img {
      height:110px;
      width: 110px;

    }

    .card-info {
      /* background: red; */
      width: 180px;
      height: 180px;
      /* gap: 1rem; */
      align-content: start;
      padding: 0;
    }

    .card-info h3{
      font-size: 2rem;
    }
  }

  /* end thik big */
`;

export default Wrapper;
