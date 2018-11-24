import React from 'react';
import { Link } from "react-router-dom";

import { AppContextConsumer } from '../components/AppContext';
import MALogo from '../assets/m+a.svg';


const Home = (props) => {
  return (
      <AppContextConsumer>
          {context =>
              <div className={`page-background w-100 h-100 flex flex-direction-column justify-content-center align-items-center bg-${context.background}`}>
                  <div className="page-content p-20 position-relative flex flex-direction-column justify-content-center align-items-center">
                      <img alt="Matt + Amee" src={ MALogo } className="pt-3" />
                      <h2 className="text-uppercase text-italic">September 7, 2019</h2>
                      <h3 className="font-actual m-0 f-2">The Fort Common</h3>
                      <h4 className="text-italic">1017 Blanshard St, Victoria, BC</h4>
                      <button className="button rsvp">
                        <Link to="/rsvp/">RSVP</Link>
                      </button>
                  </div>
              </div>}
      </AppContextConsumer>
  );
}
export default Home;
    