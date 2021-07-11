import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DotLoader from "react-spinners/DotLoader";

import { setProfile } from '../store/slices/authSlice';
import { getProfileAction } from '../store/actions/authActions';


const Login = () => {
  const username = useSelector(state => state.auth.username);
  const email = useSelector(state => state.auth.email);
  const id = useSelector(state => state.auth.id);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getProfileAction(id)
      console.log("Profile Page: ", data)
      dispatch(setProfile(data))
    }
    if (!username || !email) {
      fetchProfile();
    }
    // eslint-disable-next-line
  }, [])

  if (!username || !email) {
    return <div className="middle">
      <DotLoader loading={true} size={50} color="#fff"></DotLoader>
    </div>
  }

  return (
    <div>
      <h1 className="centered">Profile Page</h1>
      <h3 className="centered">Username: {username}</h3>
      <h3 className="centered">Email: {email}</h3>
    </div>
  );
}

export default Login;