import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';

import classes from "./NavBar.module.css";

const Hamburger = props => (
  <button className={classes.hamburger} onClick={props.click}>
    <div />
    <div />
    <div />
  </button>
);

const NavBar = (props) => {
  const isLogin = useSelector(state => state.auth.isLogin)

  return (
    <header className={classes.header}>

      <div >
        <NavLink to='/' className={classes.logo}>MinimalTypist</NavLink>
        {/* <a className={classes.logo} href={process.env.PUBLIC_URL}>Minimal Typing</a> */}
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
              <NavLink to='/rank' activeClassName={classes.active}>
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
      {
        isLogin &&
        <Button
          variant="contained"
          color="primary"
          onClick={() => { }}
        >
          Logout
        </Button>
      }
      <Hamburger click={props.clickDropDown} />
    </header>
  );
}

export default NavBar;