import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import Profile from "./pages/Profile";

import { login } from './store/slices/authSlice';
import { checkLoggedIn } from "./store/actions/authActions";

function App() {
  const [showDropDown, setShowDropDown] = useState(false);
  const isLogin = useSelector(state => state.auth.isLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    checkLoggedIn(dispatch, login);
    // eslint-disable-next-line
  }, [])
  
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
      <DropDownMenu show={showDropDown} closeDropDown={backDropHandler} />
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
