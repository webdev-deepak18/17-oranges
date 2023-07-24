/** @format */

import styled from "styled-components";

export const BaseTheme = {
  color: "#292929",
  background: "#d6d6d6",
};

export const DarkTheme = {
  color: "#d6d6d6",
  background: "#292929",
};

export const Container = styled.div`
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
`;
