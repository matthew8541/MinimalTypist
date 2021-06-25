import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import NavBar from "./components/NavBar"
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Intro />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
