import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//React router
import { BrowserRouter } from "react-router-dom";
//Material UI
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    color: "white",
  },
});

ReactDOM.render(
  //<React.StrictMode>
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  //</React.StrictMode>,
  document.getElementById("root")
);
