import React from "react";
import { Link } from "react-router-dom";

import MALogo from "../assets/m+a-2.svg";
import SVG from "react-inlinesvg";

import FadeIn from "../components/styled-components/FadeIn";
import PageBackground from "../components/styled-components/PageBackground";

const Home = props => {
  const { backgroundImage, backgroundsLoaded } = props;
  return (
    <div>
      <PageBackground
        backgroundsLoaded={backgroundsLoaded}
        backgroundImage={backgroundImage}
        className={`bg-1 page-background page-home w-100 h-100 flex flex-direction-column justify-content-center align-items-center`}
      />
      <div className="page-content p-40 position-relative flex flex-direction-column justify-content-center align-items-center">
        <SVG
          className="ma-logo"
          src={MALogo}
          onLoad={src => {
            props.svgLoaded(src);
          }}
          cacheGetRequests
        >
          <img src={MALogo} alt="Matt and Amee" />
        </SVG>

        <h1 className="text-uppercase text-italic letter-spacing-2 f-1 m-0 pv-2">
          September 7, 2019
        </h1>

        <Link className="button scale rsvp font-raleway" to="/rsvp/">
          RSVP
        </Link>
      </div>
    </div>
  );
};

export default Home;
