import { createGlobalStyle } from "styled-components";

const lightTheme = {
  textColor: "gray-900",
  backgroundColor: "gray-100",
  cardBackgroundColor: "white",
  primaryColor: "purple",
  secondaryColor: "darkorchid",
};

const darkTheme = {
  textColor: "white",
  backgroundColor: "gray-800",
  cardBackgroundColor: "gray-700",
  primaryColor: "purple",
  secondaryColor: "darkorchid",
};

const GlobalStyles = createGlobalStyle`
    body {
        font-family: sans-serif;
        margin: 0;
        padding: 0;
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.textColor};
    }
`;

export { lightTheme, darkTheme, GlobalStyles };
