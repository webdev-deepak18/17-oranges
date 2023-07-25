/** @format */

import styled from "styled-components";

export const FooterWrapperMain = styled.footer`
  display: grid;
  padding: 2rem 1.5rem;
  gap: 2rem;
  max-width: var(--max-width-2);
  margin: 0 auto;

  /* mobile footer */
  .mobile-footer {
    display: grid;
    gap: 2rem;
  }

  .mobile-footer .logo {
    max-width: 130px;
  }

  .menu-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 70vw;
    gap: 2rem;
    max-width: 400px;
    justify-content: start;
  }

  .menu-container .links {
    display: grid;
    gap: 0.5rem;
  }

  .menu-container h4,
  .menu-container h5 {
    margin-bottom: 1rem;
  }

  .links a {
    font-size: var(--small-text);
    transition: var(--transition);
  }

  .links a:hover {
    color: var(--primary-500);
  }

  .follow-container {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: start;
    gap: 1rem;
  }

  .follow-container a {
    display: grid;
    grid-template-columns: 15px 1fr;
    gap: 0.5rem;
    align-items: center;
    font-size: var(--small-text);
  }

  .follow-container a:hover {
    color: var(--primary-500);
  }

  .copyright {
  }

  .desktop-footer {
    display: none;
  }

  @media (min-width: 992px) {
    .mobile-footer {
      display: none;
    }

    .desktop-footer {
      display: grid;
      grid-template-columns: auto 1fr;
      justify-content: space-between;
      gap: 2rem;
      align-items: center;
    }

    .desktop-footer .menu {
      justify-self: right;
    }

    .desktop-footer .logo {
      max-width: 130px;
    }

    .desktop-footer .logo-container {
      display: grid;
      align-content: space-between;
      height: 8rem;
    }

    .desktop-footer .menu-container {
      align-content: center;
    }

    .desktop-footer .follow-container {
      margin-bottom: 0.5rem;
    }
  }
`;
