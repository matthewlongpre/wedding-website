import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SlideMenu from './components/SlideMenu.js';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from './routes/Home';
import Location from './routes/Location';
import Gifts from './routes/Gifts';
import RSVP from './routes/RSVP';
import './styles/main.css';

import { AppContextProvider } from './components/AppContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      background: 1
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
      <div className="App w-100 h-100" id="outer-container">
        <Router>
          <div className="w-100 h-100">
            <SlideMenu menuOpen={this.state.menuOpen} _closeMenu={() => this._closeMenu()} />
            <main id="page-wrap" className="w-100 h-100">
              <AppContextProvider value={this.state}>
                <Route
                  render={({ location }) => (
                    <div>
                      <TransitionGroup component={null}>
                        <CSSTransition
                          key={location.key}
                          classNames="fade"
                          timeout={500}
                        >
                          <Switch location={location} key="switch">
                            <Route exact path="/" component={Home} key="home"/>
                            <Route exact path="/location" component={Location} key="location" />
                            <Route exact path="/gifts" component={Gifts} key="gifts" />
                            <Route exact path="/rsvp" component={RSVP} key="rsvp" />
                            <Route key="not-found" render={() => <div>Not Found</div>} />
                          </Switch>
                        </CSSTransition>
                      </TransitionGroup>
                    </div>
                  )}
                  />
              </AppContextProvider>
            </main>
          </div>
        </Router>
      </div>
    );
  }
};

export default App;