import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import { ThemeProvider } from "@mui/system";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);