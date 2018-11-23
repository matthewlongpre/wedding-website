import React from 'react';
import { Link } from "react-router-dom";

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this._closeMenu = this._closeMenu.bind(this);
    }
    _closeMenu(e) {
        this.props._closeMenu()
    }
    render() {
        return (
            <ul className={`list-style-none flex m-0 p-0`}>
                <li>
                    <Link onClick={(e) => this._closeMenu(e)} to="/">Wedding</Link>
                </li>
                <li>
                    <Link onClick={(e) => this._closeMenu(e)} to="/location/">Location</Link>
                </li>
                <li>
                    <Link to="/gifts/">Gifts</Link>
                </li>
            </ul>
        );
    }
}

export default Nav;
