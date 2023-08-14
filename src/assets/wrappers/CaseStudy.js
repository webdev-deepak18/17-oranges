import styled from "styled-components";

const Wrapper = styled.div`
  .content-section {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: "content";
    padding-top: 0;
  }

  .content-center {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    grid-area: content;
    max-width: 650px;
    /* border: 1px solid red; */
  }

  h2 {
    color: var(--primary-500);
    margin-bottom: 1rem;
  }

  p,
  ul li {
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: clamp(.8rem, 3vw, 1.2rem);
    letter-spacing: .15px;
  }

  ul {
    padding-left: 2rem;
  }

  ul li {
    position: relative;
    padding-left: 2rem;
  }

  li:before {
    content: "";
    position: absolute;
    top: 7px;
    left: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--primary-500);
  }

  /* small */
  @media (min-width: 600px) {
    .content-section {
      grid-template-columns: 1fr auto 1fr;
      grid-template-areas: ". content .";
    }
  }

  /* large */
  @media (min-width: 1200px) {
    .content-section {
      grid-template-columns: 20% auto 10%;
      grid-template-areas: ". content .";
    }

  }
`;

export default Wrapper