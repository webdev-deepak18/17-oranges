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
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  .answers {
    display: grid;
    gap: 2rem;
  }

  .answers h3 {
    margin-top: 2rem;
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
