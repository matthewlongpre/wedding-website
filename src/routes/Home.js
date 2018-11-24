import React from 'react';
import { Link } from "react-router-dom";

import { AppContextConsumer } from '../components/AppContext';
import MALogo from '../assets/new.svg';
import SVG from 'react-inlinesvg';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.bgElement = null;
  }
  render() {
    return (
      <AppContextConsumer>
        {context =>
          <div ref={bgElement => this.bgElement = bgElement} className={`bg-1 page-background w-100 h-100 flex flex-direction-column justify-content-center align-items-center`}>
            <div className="page-content p-40 position-relative flex flex-direction-column justify-content-center align-items-center">

              <SVG
                className="ma-logo"
                src={MALogo}
                onLoad={(src) => {
                  this.props.svgLoaded(src);
                }}
              >
                <img src={MALogo} />
              </SVG>

              {/* <img alt="Matt + Amee" src={ MALogo } className="pt-3 pb-2" /> */}
              <h1 className="text-uppercase text-italic letter-spacing-2 f-1 m-0 pv-2">September 7, 2019</h1>
              <button className="button rsvp font-raleway">
                <Link to="/rsvp/">RSVP</Link>
              </button>
            </div>
          </div>}
      </AppContextConsumer>
    );
  }
}
export default Home;
