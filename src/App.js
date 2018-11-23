import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SlideMenu from './SlideMenu.js';
import Home from './Home';
import Location from './Location';
import Gifts from './Gifts';

const Users = () => <h2>Users</h2>;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }

    _handleStateChange(state) {
        this.setState({
            menuOpen: this.state.menuOpen
        });
    }

    _closeMenu() {
        this.setState({
            menuOpen: false
        });
    }

    _toggleMenu() {
        this.setState({
            menuOpen: !this.state.menuOpen
        });
    }
    render() {
        return (
            <div className="App" id="outer-container">
                <Router>
                    <div className="w-100 h-100">
                        <SlideMenu menuOpen={this.state.menuOpen} _closeMenu={() => this._closeMenu()} />
                        <main id="page-wrap">
                            <Route path="/" exact component={Home} />
                            <Route path="/location/" component={Location} />
                            <Route path="/gifts/" component={Gifts} />
                        </main>
                    </div>
                </Router>
            </div >
    );
    }
};

export default App;