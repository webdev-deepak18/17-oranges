/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  /* hero section */

  .hero-section-center {
    display: grid;
    gap: 1rem;
  }

  /* tags */
  .tags {
    display: flex;
    gap: 0.5rem;
  }

  .tags span {
    display: grid;
    grid-template-columns: 15px auto;
    gap: 0.25rem;
    align-items: center;
    text-transform: uppercase;
    font-size: clamp(0.8rem, 3vw, 1.1rem);
  }

  .tags span svg {
    fill: var(--primary-500);
  }

  @media (min-width: 992px) {
    .hero-section-center {
      gap: 2rem;
    }
    .tags {
      gap: 1rem;
    }
    .tags span {
      grid-template-columns: 25px auto;
      font-size: clamp(0.8rem, 4vw, 1.5rem);
      gap: 0.75rem;
    }
  }
  /* end tags */

  /* hero section two */
  .hero-section-two {
    display: grid;
    grid-template-areas: "hero-img" "hero-info";
    width: 90vw;
    gap: 2rem;
    justify-items: stretch;
    position: relative;
  }

  .hero-info {
    grid-area: hero-info;
    display: grid;
    gap: 1rem;
    /* background: yellow; */
    text-align: center;
  }

  .hero-info > * {
    line-height: 1.3;
  }

  .hero-img {
    grid-area: hero-img;
    height: 400px;
  }

  .hero-img img {
    height: 100%;
    border-radius: 0.5rem;
  }

  @media (min-width: 768px) {
    .hero-section-two {
      grid-template-areas: ". hero-info hero-img";
      grid-template-columns: 3rem 1fr 20rem;
      align-items: center;
      margin-top: -4rem;
      gap: 1rem;
    }
    .hero-info {
      text-align: right;
      justify-self: end;
    }

    .hero-img {
      height: 350px;
    }
  }

  @media (min-width: 992px) {
    .hero-section-two {
      grid-template-columns: 2rem 1fr 25rem;
      align-items: end;
    }
    .hero-img {
      height: 400px;
      /* justify-self: start; */
    }

    .hero-info {
      margin-bottom: 4rem;
    }
  }

  @media (min-width: 1200px) {
    .hero-section-two {
      grid-template-areas: ". hero-info . hero-img";
      grid-template-columns: 3rem 1fr 3rem 25rem;
      align-items: end;
      margin-top: -12rem;
    }
    .hero-img {
      height: 500px;
    }

    .hero-info {
      margin-bottom: 4rem;
    }
  }

  @media (min-width: 1360px) {
    .hero-section-two {
      grid-template-areas: ". hero-info . hero-img";
      grid-template-columns: 2rem 1fr 3rem 30rem;
      justify-content: center;
      margin-top: -17rem;
      max-width: var(--max-width-2);
      /* background: red; */
    }
    .hero-img {
      height: 600px;
    }

    .hero-info {
      margin-bottom: 2rem;
    }
  }
  /* end hero section two */

  /* end hero section */

  /* tech challenge */
  .tech-challenge-section {
  }

  .tech-container {
    display: grid;
    grid-template-areas: "tech-img" "tech-info";
    gap: 2rem;
  }

  .tech-info {
    grid-area: tech-info;

    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .tech-info h2 {
    line-height: 1.3;
  }

  .tech-info .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    line-height: 1.5;
    position: relative;
    padding-left: 1rem;
  }

  .tech-info .content::before {
    content: "";
    position: absolute;
    width: 1px;
    height: 100%;
    background: var(--grey-100);
    left: 0;
  }

  .tech-img {
    grid-area: tech-img;
  }

  @media (min-width: 768px) {
    .tech-img {
      justify-self: center;
      max-width: 25rem;
    }
  }
  @media (min-width: 992px) {
    .tech-container {
      grid-template-areas: "tech-info . tech-img .";
      grid-template-columns: 3fr 2rem 2fr 2rem;
      align-items: start;
      gap: 3rem;
    }
    .tech-img {
      justify-self: stretch;
      max-width: 100%;
    }
    .tech-info .content {
      margin-left: 5rem;
      margin-right: 2rem;
    }
  }

  @media (min-width: 1200px) {
    .tech-container {
      grid-template-areas: ". tech-info . tech-img .";
      grid-template-columns: 1rem 3fr 1rem 3fr 1rem;
      align-items: start;
      gap: 3rem;
    }
    .tech-img {
      justify-self: stretch;
      max-width: 100%;
    }
  }

  /* end tech challenge */

  /* we can help any industry */

  .we-can-help {
    display: grid;
    gap: 2rem;
  }

  .we-can-help h2 {
    font-size: clamp(2rem, 3vw, 7rem);
    margin-bottom: 2rem;
    line-height: 1.3;
  }

  .we-can-help p{
    padding-left: 1rem;
  }

  .we-can-help p::before {
    content: "";
    width: 1px;
    background: var(--grey-200);
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  @media (min-width: 768px) {
    .we-can-help .info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      align-items: center;
    }

    .we-can-help p {
      line-height: 1.5;
      max-width: 400px;
      position: relative;
    }
  }

  @media (min-width: 992px) {
    .we-can-help .info {
      grid-template-columns: 3fr 2fr;
      gap: 4rem;
    }

    .we-can-help h2 {
      text-align: right;
      font-size: 6rem;
      margin-left: auto;
      margin-right: 7rem;
      font-weight: 500;
      max-width: 900px;
    }

    .we-can-help p {
      font-size: 1.3rem;
    }
  }
`;

export default Wrapper;
