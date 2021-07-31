import React from 'react'
import "./assets/css/App.css";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Nunito Sans"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
