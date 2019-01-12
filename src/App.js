import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SlideMenu from './components/SlideMenu.js';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import WebfontLoader from '@dr-kobros/react-webfont-loader';

import MainWrapper from './components/MainWrapper';

import Home from './routes/Home';
import Details from './routes/Details';
import Location from './routes/Location';
import Gifts from './routes/Gifts';
import RSVP from './routes/RSVP';
import Admin from './routes/Admin';
import './styles/main.css';

import homeBGUrl from './assets/santorini-1.01.jpg';
import giftsBGUrl from './assets/santorini-3.0.1.jpg';
import locationBGUrl from './assets/fort-common-3.jpg';
import rsvpBGUrl from './assets/ferris-wheel.jpg';


import { AppContextProvider } from './components/AppContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      bgLoaded: false,
      backgroundsLoaded: false,
      menuOpen: false,
      svgLoaded: false,
      formComplete: false,
      formSubmitting: false,
      formSubmitSuccessful: false
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
        this.loadImage(giftsBGUrl),
        this.loadImage(rsvpBGUrl)
      ];
      Promise.all(bgs)
        .then(
          this.setState({
            backgroundsLoaded: true
          })
        );
    }
  }

  _handleFormSubmit() {
    this.setState({
      formSubmitting: true
    });
  }

  _handleFormSubmitSuccessful() {
    this.setState({
      formSubmitting: false,
      formSubmitSuccessful: true
    });
  }

  _resetForm() {
    this.setState({
      formSubmitSuccessful: false,
      formComplete: false
    });
  }

  _formFinished() {
    this._resetForm();
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
    const { backgroundsLoaded } = this.state;

    console.log(window.location.pathname);

    return (
      <div ref={appRef => this.appContainerElement = appRef} className={`App w-100 h-100 font-raleway bg-fade overflow-x-hidden`} id="outer-container">
        <WebfontLoader config={this.webFontConfig} onStatus={this.handleWebFontLoad}>
          <Router>
            <div className="w-100 h-100">
              <SlideMenu menuOpen={this.state.menuOpen} _closeMenu={() => this._closeMenu()} />
              <AppContextProvider value={this.state}>
                <Route
                  render={({ location }) => (
                    <MainWrapper location={location}>

                      <div>
                        <TransitionGroup component={null}>
                          <CSSTransition
                            key={location.key}
                            classNames="fade"
                            timeout={333}
                          >
                            <Switch location={location} key="switch">
                              <Route exact path="/" render={() => <Home backgroundImage={(backgroundsLoaded ? `url('${homeBGUrl}')` : undefined)} svgLoaded={() => this.svgLoaded()} />} key="home" />
                              <Route exact path="/details" render={(props) => <Details {...props} />} />
                              <Route exact path="/location" render={(props) => <Location backgroundImage={(backgroundsLoaded ? `url('${locationBGUrl}')` : undefined)} />} key="location" />
                              <Route exact path="/gifts" render={(props) => <Gifts backgroundImage={(backgroundsLoaded ? `url('${giftsBGUrl}')` : undefined)} />} key="gifts" />
                              <Route exact path="/rsvp" render={(props) =>
                                <RSVP
                                  history={props.history}
                                  formComplete={this.state.formComplete}
                                  formSubmitting={this.state.formSubmitting}
                                  formSubmitSuccessful={this.state.formSubmitSuccessful}
                                  _handleFormSubmit={() => this._handleFormSubmit()}
                                  _resetForm={() => this._resetForm()}
                                  _handleFormSubmitSuccessful={() => this._handleFormSubmitSuccessful()} bgClass={(backgroundsLoaded ? "" : "")}
                                  _formFinished={() => this._formFinished()}
                                />}
                                key="rsvp"
                              />
                              <Route exact path="/admin" component={Admin} />
                              <Route key="not-found" render={() => <div>Sorry, the page you're looking for could not be found.</div>} />
                            </Switch>
                          </CSSTransition>
                        </TransitionGroup>
                      </div>
                    </MainWrapper>
                  )}
                />
              </AppContextProvider>
            </div>
          </Router>
        </WebfontLoader>
      </div>
    );
  }
};

export default App;