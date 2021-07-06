import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../store/slices/authSlice';
import classes from "./NavBar.module.css";

const Hamburger = props => (
  <button className={classes.hamburger} onClick={props.click}>
    <div />
    <div />
    <div />
  </button>
);

const NavBar = (props) => {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.auth.isLogin)

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header className={classes.header}>

      <div >
        <NavLink to='/' className={classes.logo}>MinimalTypist</NavLink>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/home' activeClassName={classes.active}>
              Home
            </NavLink>
          </li>
          {
            isLogin &&
            <li>
              <NavLink to='/ranking' activeClassName={classes.active}>
                Rank
              </NavLink>
            </li>
          }
          {
            isLogin &&
            <li>
              <NavLink to='/profile' activeClassName={classes.active}>
                Profile
              </NavLink>
            </li>
          }
          {
            !isLogin &&
            <li>
              <NavLink to='/login' activeClassName={classes.active}>
                Login
              </NavLink>
            </li>
          }
          {
            !isLogin &&
            <li>
              <NavLink to='/register' activeClassName={classes.active}>
                Register
              </NavLink>
            </li>
          }
          {
            isLogin &&
            <li>
              <NavLink to="/" onClick={logoutHandler}>
                Logout
              </NavLink>
            </li>
          }
        </ul>
      </nav>
      <Hamburger click={props.clickDropDown} />
    </header>
  );
}

export default NavBar;