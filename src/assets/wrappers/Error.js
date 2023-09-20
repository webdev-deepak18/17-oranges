/** @format */

import styled from "styled-components";



const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: red;
  background: linear-gradient(190deg, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 0) 66%),
    url("../../public/sad-austronaut.webp");
  background-size: cover;
  background-position: center;
  display: grid;
  align-content: end;

  justify-content: center;
  position: relative;

  .content {
    background: rgba(0, 0, 0, 0.8);
    width: 95%;
    max-width: 800px;
    padding: 2rem 1rem;
    margin-bottom: 3rem;
    text-align: center;
    border-radius: 15px;
    color: var(--white);
   
  }
  h2{
    font-size: 2rem;
  }
  .error-btn {
    margin-top: 2rem;
    font-size: 1.5rem;
  }

  .logo {
    position: fixed;
    top: 5%;
    right: 10%;
    width: 150px;
  }

  @media (min-width: 992px) {
    .content {
      width: 100%;
      padding: 3rem;
    }
  }
`;

export default Wrapper;
