import React, { Component } from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="w-100 h-100 flex flex-direction-column justify-content-center align-items-center">
            <h1>Matt &amp; Amee</h1>
            <h2>Sept 7th, 2019</h2>
            <h3>Fort Common &mdash; 1017 Blanshard St, Victoria, BC</h3>
            <button className="button rsvp"><Link to="/rsvp/">RSVP</Link></button>
        </div>
    );
}
export default Home;
