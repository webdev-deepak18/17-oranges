/** @format */

import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "styled-components";

import { useGlobalContext } from "../context";

import {
  DarkTheme,
  BaseTheme,
  Container,
} from "../assets/wrappers/ToggleTheme";
import StickySidebar from "../components/StickySidebar";
import MayIHelp from "../components/MayIHelp";

const HomeLayout = () => {
  const { toggleTheme, setToggleTheme } = useGlobalContext();

  return (
    <ThemeProvider theme={toggleTheme ? DarkTheme : BaseTheme}>
      <Container>
        <Navbar />
        <div className="page">
          <button
            className="btn"
            type="button"
            onClick={() => setToggleTheme(!toggleTheme)}
          >
            Toggle Theme
          </button>

          <Outlet />
        </div>
        <StickySidebar/>
        <MayIHelp/>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default HomeLayout;
