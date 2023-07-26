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

  .card-container {
    display: grid;
    grid-template-columns:1fr;
    gap: 1rem;
    width: var(--view-width);
    max-width: var(--max-width-2);
    margin: 0 auto;
  }

  @media (min-width: 992px) {
    .card-container {
      grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    }
  }
`;

export default Wrapper;
