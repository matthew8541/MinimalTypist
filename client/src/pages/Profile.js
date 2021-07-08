import React from 'react'

import { useSelector } from 'react-redux';

const Login = () => {
  const username = useSelector(state => state.auth.username);
  const email = useSelector(state => state.auth.email);

  return (
    <div>
      <h1 className="centered">Profile Page</h1>
      <h3 className="centered">Username: {username}</h3>
      <h3 className="centered">Email: {email}</h3>
    </div>
  );
}

export default Login;