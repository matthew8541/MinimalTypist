import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';

import { login } from '../store/slices/authSlice';

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isAuth, setIsAuth] = useState(null)
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(login({ username, password }));
  };

  let authStyle;
  if (isAuth == false) {
    authStyle = {color: "red"}
  } else {
    authStyle = {visibility: "hidden"}
  }

  return (
    <main className="centered userCard">
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor='username'>User</label>
          <input type="username" id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type="password" id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <h4 style={authStyle}>Something went wrong</h4>
        <Button
          variant="contained"
          color="primary"
          onClick={loginHandler}
        >
          Login
        </Button>
      </form>
    </main>
  );
}

export default Login;