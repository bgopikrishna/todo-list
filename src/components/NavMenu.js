import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

function NavMenu() {
  return (
    <Menu className="nav-menu" fluid size="mini" widths={2}>
      <Menu.Item>
        <NavLink to="/">Today</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/">Tommorow</NavLink>
      </Menu.Item>
    </Menu>
  );
}

export default NavMenu;
