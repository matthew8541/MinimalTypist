import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DotLoader from "react-spinners/DotLoader";

import { setProfile } from '../store/slices/authSlice';
import { getProfileAction } from '../store/actions/profileActions';

const Login = () => {
  const username = useSelector(state => state.auth.username);
  const email = useSelector(state => state.auth.email);
  const id = useSelector(state => state.auth.id);
  const records = useSelector(state => state.auth.record);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProfile = async () => {
      const { currUser, profile } = await getProfileAction(id)
      dispatch(setProfile({ currUser, profile }))
    }
    
    fetchProfile();

    // eslint-disable-next-line
  }, [])


  // Loader
  if (!(username && email && records)) {
    return <div className="middle">
      <DotLoader loading={true} size={50} color="#fff"></DotLoader>
    </div>
  }

  return (
    <div>
      <h1 className="centered">Profile Page</h1>
      <h3 className="centered">Username: {username}</h3>
      <h3 className="centered">Email: {email}</h3>
      <h3 className="centered">Record</h3>
      <ul className="centered">
        {records.map((record, index) =>
          <li key={index}>WPM: {record.wpm} Accuracy: {record.accuracy}% Date: {record.date}</li>
        )}
      </ul>
    </div>
  );
}

export default Login;