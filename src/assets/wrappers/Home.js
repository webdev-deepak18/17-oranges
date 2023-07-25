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

  /* tech challenge */
  .tech-challenge {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .tech-challenge h2 {
    margin-bottom: 2rem;
    line-height: 1.5;
  }
  .tech-challenge p {
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  @media (min-width: 992px) {
    .tech-challenge {
      grid-template-columns: 3fr 2fr;
    }

    .tech-challenge .info {
      max-width: 90%;
    }

    .tech-challenge .content {
      max-width: 400px;
      margin-left: 9rem;
      position: relative;
      margin-top: 3rem;
    }

    .tech-challenge .content::before {
      content: "";
      width: 1px;
      background: var(--grey-200);
      height: 100%;
      position: absolute;
      top: 0;
      left: -1.5rem;
    }
  }

  /* we can help any industry */
  .we-can-help h2 {
    font-size: clamp(2rem, 3vw, 7rem);
    margin-bottom: 2rem;
    line-height: 1.3;
  }

  .we-can-help .info {
    display: grid;
    gap: 2rem;
    align-items: center;
  }

  .we-can-help p {
    line-height: 1.5;
    max-width: 400px;
    position: relative;;
  }

  @media (min-width: 992px) {
    .we-can-help .info {
      grid-template-columns: 3fr 2fr;
      gap: 4rem;
    }

    .we-can-help h2{
      text-align: right;
      font-size: 6rem;
      margin-left: auto;
      margin-right: 7rem;
      font-weight: 500;
      max-width: 900px;
    }

    .we-can-help p::before {
      content: "";
      width: 1px;
      background: var(--grey-200);
      height: 100%;
      position: absolute;
      top: 0;
      left: -1.5rem;
    }

    .we-can-help p{
      font-size: 1.3rem;
    }
  }
`;

export default Wrapper;
