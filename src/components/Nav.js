import React from 'react';
import { NavLink } from "react-router-dom";

const Nav = (props) => (
  <ul className={`list-style-none flex m-0 p-0 text-uppercase ${props.isDesktop ? "top-nav justify-content-center w-100 position-fixed z-index-1" : "side-nav flex-direction-column text-inverse"}`}>
    <li>
      <NavLink exact={true} activeClassName='is-active' to="/">Wedding</NavLink>
    </li>
    <li>
      <NavLink exact={true} activeClassName='is-active' to="/details/">Details</NavLink>
    </li>
    <li>
      <NavLink exact={true} activeClassName='is-active' to="/location/">Location</NavLink>
    </li>
    <li>
      <NavLink exact={true} activeClassName='is-active' to="/gifts/">Gifts</NavLink>
    </li>
    <li>
      <NavLink exact={true} activeClassName='is-active' to="/rsvp/">RSVP</NavLink>
    </li>
  </ul>
);

export default Nav;
