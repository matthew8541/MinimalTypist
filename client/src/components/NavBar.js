import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../store/slices/authSlice';
import classes from "./NavBar.module.css";

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
      {isLogin ? (
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink to='/home' activeClassName={classes.active}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/ranking' activeClassName={classes.active}>
                Rank
              </NavLink>
            </li>

            <li>
              <NavLink to='/profile' activeClassName={classes.active}>
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/" onClick={logoutHandler}>
                Logout
              </NavLink>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink to='/home' activeClassName={classes.active}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/login' activeClassName={classes.active}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to='/register' activeClassName={classes.active}>
                Register
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
      <Hamburger click={props.clickDropDown} />
    </header>
  );
}

export default NavBar;

const Hamburger = props => (
  <button className={classes.hamburger} onClick={props.click}>
    <div />
    <div />
    <div />
  </button>
);