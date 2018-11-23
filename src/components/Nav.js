import React from 'react';
import { Link } from "react-router-dom";

const Nav = (props) => (
    <ul className={`list-style-none flex m-0 p-0 text-uppercase ${props.isDesktop ? "top-nav justify-content-center w-100 position-fixed z-index-1" : "side-nav flex-direction-column text-inverse"}`}>
        <li>
            <Link to="/">Wedding</Link>
        </li>
        <li>
            <Link to="/location/">Location</Link>
        </li>
        <li>
            <Link to="/gifts/">Gifts</Link>
        </li>
        <li>
            <Link to="/rsvp/">RSVP</Link>
        </li>
    </ul>
);

export default Nav;
