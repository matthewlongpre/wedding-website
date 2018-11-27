import React from 'react';
import { Link } from "react-router-dom";

import MALogo from '../assets/m+a-2.svg';
import SVG from 'react-inlinesvg';

const Home = (props) => {
  return (
    <div className={`${props.bgClass} page-home page-background w-100 h-100 flex flex-direction-column justify-content-center align-items-center`}>
      <div className="page-content p-40 position-relative flex flex-direction-column justify-content-center align-items-center">

        <SVG
          className="ma-logo"
          src={MALogo}
          onLoad={(src) => {
            props.svgLoaded(src);
          }}
          cacheGetRequests
        >
          <img src={MALogo} alt="Matt and Amee" />
        </SVG>

        <h1 className="text-uppercase text-italic letter-spacing-2 f-1 m-0 pv-2">September 7, 2019</h1>
        <button className="button rsvp font-raleway">
          <Link to="/rsvp/">RSVP</Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
