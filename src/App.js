import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SlideMenu from './components/SlideMenu.js';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import WebfontLoader from '@dr-kobros/react-webfont-loader';

import Home from './routes/Home';
import Location from './routes/Location';
import Gifts from './routes/Gifts';
import RSVP from './routes/RSVP';
import './styles/main.css';

import homeBGUrl from './assets/santorini-1.jpg';
import locationBGUrl from './assets/santorini-3.jpg';
import giftsBGUrl from './assets/fort-common-3.jpg';


import { AppContextProvider } from './components/AppContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      bgLoaded: false,
      backgroundsLoaded: false,
      menuOpen: false,
      svgLoaded: false
    }

    this.appContainerElement = null;
    this.webFontConfig = {
      custom: {
        families: ['Raleway', 'Blithe']
      },
      timeout: 10000
    };
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

  svgLoaded() {
    this.setState({
      svgLoaded: true
    });
  }

  setLoaded() {
    this.setState({
      loaded: true
    });
  }

  componentDidMount() {
    const homeBG = new Image();
    homeBG.src = homeBGUrl;
    homeBG.onload = () => {
      this.setState({
        bgLoaded: true
      });
      this.appContainerElement.classList.add('initial-load-complete');
      setTimeout(() => {
        this.appContainerElement.classList.remove('initial-load');
        this.appContainerElement.classList.remove('initial-load-complete');
      }, 2000);
    };
  }

  componentDidUpdate() {
    if (this.state.bgLoaded && !this.state.backgroundsLoaded) {
      const bgs = [
        this.loadImage(locationBGUrl),
        this.loadImage(giftsBGUrl)
      ];
      Promise.all(bgs)
        .then(
          this.setState({
            backgroundsLoaded: true
          })
        );
    }
  }

  loadImage = (url) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = url;
      image.onload = () => {
        resolve(image)
      };
    });
  }

  render() {
    const { loaded, backgroundsLoaded } = this.state;
    return (
      <div ref={appRef => this.appContainerElement = appRef} className={`App w-100 h-100 font-raleway initial-load`} id="outer-container">
        <WebfontLoader config={this.webFontConfig} onStatus={this.handleWebFontLoad}>
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
                            timeout={333}
                          >
                            <Switch location={location} key="switch">
                              <Route exact path="/" render={() => <Home bgClass={(backgroundsLoaded ? "bg-1" : "")} svgLoaded={() => this.svgLoaded()} />} key="home" />
                              <Route exact path="/location" render={(props) => <Location bgClass={(backgroundsLoaded ? "bg-4" : "")}/>} key="location" />
                              <Route exact path="/gifts" render={(props) => <Gifts bgClass={(backgroundsLoaded ? "bg-3" : "")}/>} key="gifts" />
                              <Route exact path="/rsvp" component={RSVP} key="rsvp" />
                              <Route key="not-found" render={() => <div>Sorry, the page you're looking for could not be found.</div>} />
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
        </WebfontLoader>
      </div>
    );
  }
};

export default App;