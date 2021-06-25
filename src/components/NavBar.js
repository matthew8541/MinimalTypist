import { NavLink } from 'react-router-dom';
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Project Title</div>
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
    </header>
  );
}

export default NavBar;