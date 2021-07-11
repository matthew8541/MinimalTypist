import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';

import { loginAction } from '../store/actions/authActions';
import { login } from '../store/slices/authSlice';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(null)

  const dispatch = useDispatch();

  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      const res = await loginAction({ email, password })
      // console.log("Login Page -> ", res)
      if (res.status === 200) {
        dispatch(login(res.data.result))
      } else {
        setIsAuth(false);
      }
    } catch (error) {
      setIsAuth(false);
      // console.log("Error: ", error)
    }
  };

  let authStyle;
  if (isAuth === false) {
    authStyle = { color: "red" }
  } else {
    authStyle = { visibility: "hidden" }
  }

  return (
    <main className="centered userCard">
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor='email'>Email</label>
          <input type="email" id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type="password" id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <h4 style={authStyle}>Invalid Email or Password</h4>
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