import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';

import { register } from '../store/slices/authSlice';

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(register({username, email, password}));
  };

  return (
    <main className="centered userCard">
      <h2>Register</h2>
      <form>
      <div>
          <label htmlFor='user'>Username</label>
          <input type="user" id="user" value={username} onChange={(event) => setUsername(event.target.value)}/>
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={loginHandler}
        >
          Register
        </Button>
      </form>
    </main>
  );
}

export default Register;