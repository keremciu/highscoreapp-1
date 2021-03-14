import React from "react";
import { createMuiTheme } from "@material-ui/core";

import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import Main from "./pages/Main";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#248bd2" },
    secondary: {
      main: "#4000d0",
    },
  },
  typography: {
    fontFamily: `"Helvetica Neue", "Arial", sans-serif`,
  },
});

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
