/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  .hero {
  }
  h1 {
    margin: 0 auto;
    margin-bottom: 2rem;
  }

  /* icon cards */

  .icons-cards-container {
    display: grid;
    gap: 5rem 3rem;
    margin: 0 auto;
    justify-items: center;
    /* max-width: 992px; */
    margin: 0 auto;
  }

  @media (min-width: 728px) {
    .icons-cards-container {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 1200px) {
    .icons-cards-container {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  .strategy-card {
    display: grid;
    justify-content: space-between;
    justify-items: center;
    text-align: center;
    max-width: 350px;
  }

  .strategy-card h3 {
    text-transform: uppercase;
    margin-block: 2rem;
  }

  .strategy-card p {
    line-height: 1.5;
  }

  .icon {
    width: 150px;
    height: 150px;
    background: var(--primary-500);
    padding: 20px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    color: var(--white);
  }

  .icon span {
    width: 80px;
    display: grid;
    place-items: center;
    color: var(--white);
  }

  /* end icon cards */

  .card-container {
    /* background: lightgrey; */
    display: grid;
    grid-template-columns: 1fr;
    /* gap: 1rem; */
    width: var(--view-width);
    max-width: var(--max-width-3);
    margin: 5rem auto;
  }
  .card {
    max-width: 100% !important;
  }

  @media (min-width: 728px) {
    .card-container {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 992px) {
    .card-container {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .section-title{
      max-width: 100%;
    }
  }

  /* end cards */

  /* answers */


  .answers {
    display: grid;
    gap: 2rem;
  }

  .answers h1{
    font-size: clamp(2.5rem, 5vw, 6rem);
    line-height: 1.4;
  }

  .answers h3 {
    margin-top: 2rem;
  }

  @media (min-width: 768px) {
    .answers {
      grid-template-columns: 3fr 2fr;
      gap: 5rem;
    }
  }

  @media (min-width: 992px) {
    .answers {
      grid-template-columns: 4fr 1fr;
      gap: 5rem;
    }

    .answers .img-container img {
      height: 100%;
    }
  }
`;
export default Wrapper;
