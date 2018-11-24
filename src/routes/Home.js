import React from 'react';
import { Link } from "react-router-dom";

import { AppContextConsumer } from '../components/AppContext';
import MALogo from '../assets/m+a.svg';


const Home = (props) => {
  return (
      <AppContextConsumer>
          {context =>
              <div className={`page-background w-100 h-100 flex flex-direction-column justify-content-center align-items-center bg-${context.background}`}>
                  <div className="page-content p-40 position-relative flex flex-direction-column justify-content-center align-items-center">
                      <img alt="Matt + Amee" src={ MALogo } className="pt-3 pb-2" />
                      <h1 className="text-uppercase text-italic letter-spacing-2 f-1 m-0 pb-2">September 7, 2019</h1>
                      <button className="button rsvp">
                        <Link to="/rsvp/">RSVP</Link>
                      </button>
                  </div>
              </div>}
      </AppContextConsumer>
  );
}
export default Home;
    