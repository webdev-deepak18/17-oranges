/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  .hero {
    display: grid;
    gap: 1.5rem;
  }

  .hero h1 {
    line-height: 1.5;
    max-width: 800px;
  }

  .hero .info {
  }

  .tags {
    display: flex;
    gap: 0.5rem;
    margin-block: 1.5rem;
  }

  .tags span {
    display: grid;
    grid-template-columns: 15px auto;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.85rem;
    text-transform: uppercase;
  }

  .tags span svg {
    fill: var(--primary-500);
  }

  .hero-img .img {
    height: 500px;
  }

  .technology {
    max-width: 600px;
  }

  .technology h2 {
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  .technology h3 {
    line-height: 1.5;
  }

  @media (min-width: 768px) {
    .tags {
      gap: 2rem;
    }
    .tags span {
      font-size: 1.2rem;
      grid-template-columns: 20px auto;
    }
    .hero-img {
      width: 400px;
      margin: 0 auto;
    }
  }

  @media (min-width: 992px) {
    .hero {
      gap: 10rem;
    }
    .hero-img {
      display: none;
    }

    .hero .info h1 {
      max-width: 1000px;
      font-size: 6rem;
    }

    .technology h2 {
      font-size: 2.5rem;
    }

    .technology h3 {
      font-size: 1.7rem;
      max-width: 500px;
      margin-left: auto;
    }
    .tags span {
      font-size: 1.5rem;
      grid-template-columns: 25px auto;
    }

    .technology {
      text-align: right;
      max-width: 700px;

      margin-left: 5rem;
    }

    .hero {
      /* position: absolute; */
      width: 95vw;
      max-width: 1700px;
    }

    .hero-img {
      display: block;
      position: absolute;
      top: 30rem;
      right: 2rem;
      width: 500px;
    }
    .hero-img .img {
      height: 700px;
    }
  }
`;

export default Wrapper;
