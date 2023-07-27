/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  .title {
    margin: 0 auto;
  }
  .hero-section {
    padding-bottom: 0;
  }

  @media (min-width: 992px) {
    .hero-section .title {
      font-size: 5rem;
      max-width: 1200px;
    }
  }

  .letter-section {
    max-width: 750px;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    background: var(--white);
    padding: 1rem;
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-2);
    transition: var(--transition);
  }

  .letter-section:hover {
    box-shadow: var(--shadow-4);
  }

  .letter-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .letter-info p {
    line-height: 1.5;
  }

  .author-container {
    display: grid;
    grid-template-columns: auto 100px;
    align-items: center;
    justify-content: start;
    gap: 2rem;
  }

  .author-info {
    display: grid;
    justify-content: start;
  }

  .divider-line {
    height: 1px;
    background: var(--grey-200);
    width: 100%;
    margin-bottom: 0.75rem;
  }

  @media (min-width: 992px) {
    .letter-section {
      padding: 5rem;
      margin-top: 5rem;
    }
    .author-container {
      gap: 3rem;
    }
  }

  /* creative team */

  .creative-section .title {
    /* background: yellow; */
    display: grid;
    gap: 2rem;
    min-width: 100%;
  }

  @media (min-width: 992px) {
    .creative-section .title{
      grid-template-columns: 4fr 2fr;
      align-items: center;
      gap: 1rem;
    }

    .creative-section h4{
      font-size: 1.5rem;
    }
  }

  .creative-section h4 {
    line-height: 1.3;
    max-width: 800px;
  }

  .cards-container {
    margin-top: 5rem;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

export default Wrapper;
