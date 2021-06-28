import React from 'react'
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
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/tab1">Tab1</a>
        </li>
        <li>
          <a href="/tab2">Tab2</a>
        </li>
        <li>
          <a href="/tab3">Tab3</a>
        </li>
      </ul>
    </nav>
  );
}

export default DropDownMenu;
