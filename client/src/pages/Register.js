import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';

import { register } from '../store/slices/authSlice';

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isValid, setIsValid] = useState(null)

  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(register({username, email, password}));
  };

  let validStyle;
  if (isValid == false) {
    validStyle = {color: "red"}
  } else {
    validStyle = {visibility: "hidden"}
  }

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
        <h4 style={validStyle}>Something went wrong</h4>
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