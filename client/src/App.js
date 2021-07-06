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
import Login from "./pages/Login";
import Register from "./pages/Register";
import Ranking from "./pages/Ranking";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

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
      <DropDownMenu show={showDropDown}/>
      {backdrop}

      <Switch>
        <Route path="/" exact>
          <Intro />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/ranking">
          <Ranking />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
