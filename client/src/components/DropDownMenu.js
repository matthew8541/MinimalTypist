import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import "./DropDownMenu.css"

import { logout } from '../store/slices/authSlice';

const DropDownMenu = (props) => {
  const isLogin = useSelector(state => state.auth.isLogin)
  const dispatch = useDispatch();
  const history = useHistory();

  // close down the dropdown when the route changes
  useEffect(() => {
    // ComponenetWillUnmount
    return history.listen((location) => { 
      props.closeDropDown();
      // console.log(`You changed the page to: ${location.pathname}`)
   })
  }, [history])
  
  let dropdownClasses = ["dropdown"]

  if (props.show) {
    dropdownClasses = ["dropdown", "open"]
  }

  const logoutHandler = () => {
    dispatch(logout())
  }

  if (isLogin) {
    return (
      <nav className={dropdownClasses.join(" ")}>
        <ul>
          <li>
            <NavLink to='/home' className="link"> Home </NavLink>
          </li>
          <li>
            <NavLink to='/ranking' className="link"> Rank </NavLink>
          </li>
          <li>
            <NavLink to='/profile' className="link"> Profile </NavLink>
          </li>
          <li>
            <NavLink to='/' className="link" onClick={logoutHandler}> Logout </NavLink>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <nav className={dropdownClasses.join(" ")}>
      <ul>
        <li>
          <NavLink to='/home' className="link"> Home </NavLink>
        </li>
        <li>
          <NavLink to='/login' className="link"> Login </NavLink>
        </li>
        <li>
          <NavLink to='/register' className="link"> Register </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default DropDownMenu;
