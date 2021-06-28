import React, { useState } from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import NavBar from "./components/NavBar"
import DropDownMenu from "./components/DropDownMenu";
import BackDrop from "./components/BackDrop";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import NotFound from "./pages/NotFound";

function App() {
  const [showDropDown, setShowDropDown] = useState(false);

  const clickDropDownHandler = () => {
    setShowDropDown((prevState) => !prevState)
  }

  const backDropHandler = () => {
    setShowDropDown(false)
  }

  let backdrop;

  if (showDropDown) {
    backdrop = <BackDrop click={backDropHandler}/>
  }

  return (
    <div>
      <NavBar clickDropDown={clickDropDownHandler}/>
      {showDropDown&&<DropDownMenu show={showDropDown}/>}
      {backdrop}

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
