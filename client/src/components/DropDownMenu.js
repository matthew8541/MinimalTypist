import React from 'react'
import { NavLink } from 'react-router-dom';
import "./DropDownMenu.css"

const DropDownMenu = (props) => {

  let dropdownClasses = ["dropdown"]

  if (props.show) {
    dropdownClasses = ["dropdown", "open"]
  }

  return (
    <nav className={dropdownClasses.join(" ")}>
      <ul>
        <li>
          <NavLink to='/home' className="link"> Home </NavLink>
        </li>
        <li>
          <NavLink to='/tab1' className="link"> tab1 </NavLink>
        </li>
        <li>
          <NavLink to='/tab2' className="link"> tab2 </NavLink>
        </li>
        <li>
          <NavLink to='/tab3' className="link"> tab3 </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default DropDownMenu;
