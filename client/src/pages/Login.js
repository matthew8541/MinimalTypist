import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';

import { login } from '../store/slices/authSlice';

const Login = () => {
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(login());
  };

  return (
    <main className="centered userCard">
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor='email'>Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type="password" id="password" />
        </div>
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