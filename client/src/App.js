import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Switch,
  Route,
  Redirect
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

  const isLogin = useSelector(state => state.auth.isLogin);

  const clickDropDownHandler = () => {
    setShowDropDown((prevState) => !prevState)
  }

  const backDropHandler = () => {
    setShowDropDown(false)
  }

  let backdrop;

  if (showDropDown) {
    backdrop = <BackDrop click={backDropHandler} />
  }

  return (
    <div>
      <NavBar clickDropDown={clickDropDownHandler} />
      <DropDownMenu show={showDropDown} />
      {backdrop}
      <Switch>
        <Route path="/" exact component={Intro} />
        <Route path="/home" component={Home} />
        <Route path="/register">
          {!isLogin ? <Register /> : <Redirect to="/home" />}
        </Route>
        <Route path="/login">
          {!isLogin ? <Login /> : <Redirect to="/home" />}
        </Route>
        <Route path="/ranking">
          {isLogin ? <Ranking /> : <Redirect to="/" />}
        </Route>
        <Route path="/profile">
          {isLogin ? <Profile /> : <Redirect to="/" />}
        </Route>
        <Route path='*' component={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}

export default App;
