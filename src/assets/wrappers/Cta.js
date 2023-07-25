/** @format */

import styled from "styled-components";

const Wrapper = styled.section`
  margin-top: 5rem;
  position: relative;
  margin-bottom: 3rem;

  .cta-img {
    height: 10rem;
  }

  .nav-center {
    width: 90vw;
    background: var(--primary-500);
    max-width: var(--max-width-1);
    margin: 0 auto;
    position: relative;
    z-index: 10;
    margin-top: -3rem;
    padding: 2rem;
    border-radius: var(--borderRadius);
  }

  .info {
    display: grid;
    gap: 1rem;
    color: var(--white);
    justify-items: center;
  }

  .cta-btn {
    background: var(--grey-500);
    color: var(--white);
    padding: 1rem 2rem;
  }

  .cta-btn:hover {
    color: var(--primary-600);
    background: var(--white);
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: end;
    margin-top: 0;

    .cta-img {
      width: 130%;
      height: 75%;
    }

    .nav-center {
      background: rgba(235, 235, 235, .8);
      margin-top: 0;
      opacity: 1;
      width: 100%;
      align-items: top;
      margin-bottom: 4rem;

    }
    .info {
      justify-items: left;
      color: var(--grey);
    }

    .info h3 {
      font-size: clamp(3rem, 10vw, 5rem);
    }

    .cta-btn{
      font-size: clamp(1rem, 2vw, 1.5rem);
      padding: 1.2rem 3rem;
    }
  }
`;

export default Wrapper;
