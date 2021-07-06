import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import classes from "./NavBar.module.css";


const Hamburger = props => (
  <button className={classes.hamburger} onClick={props.click}>
    <div />
    <div />
    <div />
  </button>
);

const NavBar = (props) => {
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
          <li>
            <NavLink to='/tab1' activeClassName={classes.active}>
              Rank
            </NavLink>
          </li>
          <li>
            <NavLink to='/tab2' activeClassName={classes.active}>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to='/tab3' activeClassName={classes.active}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
      <Hamburger click={props.clickDropDown} />
    </header>
  );
}

export default NavBar;