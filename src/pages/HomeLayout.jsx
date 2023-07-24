/** @format */

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "styled-components";

import {useGlobalContext} from '../context'

import {
  DarkTheme,
  BaseTheme,
  Container,
} from "../assets/wrappers/ToggleTheme";

const HomeLayout = () => {
const {toggleTheme} = useGlobalContext()
 
  return (
    <ThemeProvider theme={ toggleTheme ? DarkTheme : BaseTheme}>
      <Container>
        <Navbar />
        <h1>Hello World</h1>
        <br></br>
        <br></br>
        <Outlet />
        <br></br>
        <br></br>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default HomeLayout;
