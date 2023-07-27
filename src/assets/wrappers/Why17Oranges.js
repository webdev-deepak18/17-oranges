/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  /* info section */
  .info-section {
    position: relative;
  }

  .info-section h4 {
    margin-bottom: 2rem;
    grid-area: text;
  }

  @media (min-width: 768px) {
    .info-img {
      width: 60%;
      margin: 0 auto;
    }
  }

  @media (min-width: 992px) {
    .info-section {
      min-height: 300px;
      overflow: hidden;
      display: grid;
      grid-template-columns: 1fr;
      align-content: center;
    }
    .info-section h4 {
      margin-bottom: 0;
    }

    .info-img {
      width: 50%;
      margin: 0;
      position: absolute;
      right: 0;
      top: 0;
    }

    .info-section h4 {
      width: 45%;
    }
  }

  @media (min-width: 1200px) {
    .info-section {
      min-height: 450px;
    }
  }
  /* end info section */

  /* gibson quote */
  .gibson-quote {
    max-width: 992px;
    margin: 0 auto;
    display: grid;
    gap: 3rem;
    justify-items: center;
    align-items: center;

  }

  .gibson-img {
    max-width: 150px;
  }

  .quote-block {
    position: relative;
    display: grid;

  }
  .quote-icon {
    width: 50px;
    display: block;
    position: absolute;
    top: -1rem;
    left: 0;
    color: var(--primary-300);
  }

  .quote-info {
    /* background: var(--primary-100); */
    position: relative;
    display: grid;
    gap: 1rem;
    width: 80%;
    justify-self: right;
  }

  .quote-info h3 {
    line-height: 1.5;
    font-weight: 600;
  }

  .divider-line {
    height: 2px;
    background: var(--grey-100);
    width: 40%;
  }

  @media (min-width: 768px) {
    .gibson-quote {
      max-width: 450px;
    }

    .quote-info{
      width: 85%;
    }
   
  }

  @media (min-width: 992px) {
    .gibson-quote {
      grid-template-columns: 2fr 6fr;
      gap: 2rem;
      margin-top: 5rem;
      max-width: 850px;

    }
    .gibson-img {
      width: 100%;
      max-width: 100%;
      justify-self: center;
    
    }

    .quote-info {
      max-width: 100%;

    }

    .quote-icon{
      left: 2rem;
    }
  }

  /* think big */

  .big-title {
    text-align: center;
  }
  .big-one {
    font-size: clamp(4rem, 10vw, 6rem);
  }
  .big-two {
    font-size: clamp(6rem, 15vw, 22rem);
    margin-left: -1rem;
  }

 
  .cards-container {
    margin-top: 3rem;
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
  }

  .card {
    display: grid;
    gap: 1.5rem;
  }

  .card-info {
    padding: 0.5rem;
    display: grid;
    gap: 0.8rem;
  }

  .card-info p {
    line-height: 1.5;
  }

  .card-img {
    border-radius: var(--borderRadius);
  }

  @media (min-width: 768px) {
    .cards-container {
      grid-template-columns: repeat(2, 1fr);
    }
    .big-title{
      font-size: 2rem;
    }
  }

  @media (min-width: 992px) {
    .cards-container {
      grid-template-columns: repeat(3, 1fr);
    }
    .big-title{
      text-align: left;
    }
  }

  @media (min-width: 1200px) {
    .big-title{
      text-align: center;
    }
    .cards-container {
      grid-template-columns: repeat(5, 1fr);
      /* grid-template-rows: 1fr auto; */
      max-width: 1200px;
      margin: 0 auto;
      margin-top: 3rem;
      gap: 5rem;
    }

    .card-img {
      height: 110px;
      width: 110px;
    }

    .card-info {
      /* background: red; */
      width: 180px;
      height: 180px;
      /* gap: 1rem; */
      align-content: start;
      padding: 0;
    }

    .card-info h3 {
      font-size: 2rem;
    }
  }

  /* end thik big */

  /* social commitment */
  .social-section{
    margin-bottom: 3rem;
  }

  .social-section h1{
    margin-bottom: 2rem;
  }

  .info-block {
    display: grid;
    gap: 2rem;
    max-width: var(--max-width-2);
    margin: 0 auto;
  }

  .img-block {
    display: grid;
    gap: 2rem;
    align-content: space-between;
  }

  .img-block h4 {
    line-height: 1.5;
  }

  .commitment-cards-block {
    display: grid;
    gap: 3rem;
    align-self: start;
  }

  .commitment-card {
    display: grid;
    gap: 1rem;
    width: 95%;
    justify-self: right;
    position: relative;
    align-content: start;
  }

  .commitment-card::before {
    content: "";
    height: 100%;
    width: 1px;
    background: var(--grey-100);
    position: absolute;
    top: 0;
    left: -1rem;
    margin-right: 1rem;
  }

  .commitment-card h3 {
    line-height: 1.5;
    color: var(--primary-500);
  }

  .commitment-card p {
    line-height: 1.5;
  }

  @media (min-width: 992px) {
    .info-block {
      grid-template-columns: 3fr 2fr;
      margin-top: 5rem;
      align-content: space-between;
    }

    .img-block {
      width: 85%;
    }

    .img-block h4 {
      font-size: 1.5rem;
    }

    .img-block .img {
      height: 30rem;
    }

    .commitment-cards-block {
      gap: 6rem;
    }
  }

  /* end social commitment */
`;

export default Wrapper;
