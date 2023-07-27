/** @format */

import styled from "styled-components";

const Wrapper = styled.section`
  .hero {
    display: grid;
    gap: 2rem;
  }

  .hero .info {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    align-items: center;
  }

  .hero .info p {
    line-height: 1.5;
  }

  .hero .info h3 {
    line-height: 1.3;
  }

  @media (min-width: 768px) {
    .hero .info {
      grid-template-columns: 2fr 3fr;
      gap: 2rem;
    }
    .hero p {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 992px) {
    .hero {
      gap: 4rem;
    }

    .hero .info {
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
    }

    .hero .info h3 {
      justify-self: center;
      max-width: 450px;
    }

    .hero p {
      max-width: 450px;
      justify-self: center;
    }
  }

  /* cards */
  .cards-container {
    display: grid;
    gap: 2rem;
  }

  @media (min-width: 768px) {
    .cards-container {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 1200px) {
    .cards-container {
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "one ."
        "one two"
        "one two"
        "one two"
        "three two"
        "three four"
        "three four"
        "three four"
        ". four";
      max-width: 900px;
      justify-content: right;
      margin-left: auto;
      margin-right: 5rem;
    }

    .card-one {
      grid-area: one;
    }
    .card-two {
      grid-area: two;
    }
    .card-three {
      grid-area: three;
    }
    .card-four {
      grid-area: four;
    }
  }

  /* end cards */
`;

export default Wrapper;
