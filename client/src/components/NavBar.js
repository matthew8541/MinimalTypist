import { NavLink } from 'react-router-dom';
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
              Tab1
            </NavLink>
          </li>
          <li>
            <NavLink to='/tab2' activeClassName={classes.active}>
              Tab2
            </NavLink>
          </li>
          <li>
            <NavLink to='/tab3' activeClassName={classes.active}>
              Tab3
            </NavLink>
          </li>
        </ul>
      </nav>
      <Hamburger click={props.clickDropDown} />
    </header>
  );
}

export default NavBar;