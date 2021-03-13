import React from "react";
import { createMuiTheme } from "@material-ui/core";

import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import Board from "./components/Board";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#248bd2" },
  },
  typography: {
    fontFamily: `"Helvetica Neue", "Arial", sans-serif`,
  },
});

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Board />
      </ThemeProvider>
    </div>
  );
}

export default App;
