/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  .hero-title {
    display: flex;
    flex-direction: column;
    gap: 2rem;
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

    @media (min-width: 1400px){
      .cards-container{
        max-width: 1170px;
        margin-right: 2rem;
        gap:2rem;
      }
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
