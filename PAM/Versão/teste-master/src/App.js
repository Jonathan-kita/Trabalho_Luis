import React from "react";
import { BrowserRouter, Router } from "react-router-dom";

import Routes from "./routes";
import history from "./services/history";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <Router history={history}>
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Router>
  );
}

export default App;
