import React, { Component } from 'react';
import GoogleMap from './../components/GoogleMap';

const maps = {
  venue: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.3663795022203!2d-123.3650791297067!3d48.42413207360096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f748fe98f8b27%3A0x51a69e3352dc15f4!2sThe+Fort+Common!5e0!3m2!1sen!2sca!4v1547007529621",
  parking: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d10590.760037961738!2d-123.36222500109444!3d48.42409533591184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sparking!5e0!3m2!1sen!2sca!4v1547339628915",
  hotels: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d10590.760037961738!2d-123.36222500109444!3d48.42409533591184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shotels!5e0!3m2!1sen!2sca!4v1547339422657"
}

class Location extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mapSrc: maps.venue,
      mapName: "venue"
    }

    this.bg = { backgroundImage: props.backgroundImage };
  }

  handleMapChange = (map) => {
    this.setState({
      mapSrc: maps[map],
      mapName: map
    });
  }

  render() {

    const { mapSrc, mapName } = this.state;

    return (
      <div style={this.bg} className={`page-background w-100 h-100 flex flex-direction-column justify-content-center align-items-center background-cover`}>
        <div className="page-content page-content-wide w-100 position-relative flex flex-direction-column justify-content-center align-items-center">
          <h2 className="font-blithe m-0 f-3 text-center">The Fort Common</h2>
          <h3 className="text-italic text-center">1017 Blanshard St, Victoria, BC</h3>
          <div className="flex w-100 mt-20 button-tab-container">
            <button onClick={() => this.handleMapChange("venue")} className={`button button-tab font-raleway w-100 font-sm ${mapName === "venue" && "active"}`} type="button">Venue</button>
            <button onClick={() => this.handleMapChange("parking")} className={`button button-tab font-raleway w-100 font-sm ${mapName === "parking" && "active"}`} type="button">Parking</button>
            <button onClick={() => this.handleMapChange("hotels")} className={`button button-tab font-raleway w-100 font-sm ${mapName === "hotels" && "active"} `} type="button">Hotels</button>
          </div>
          <GoogleMap map={mapSrc} />
        </div>
      </div>
    );
  }
}
export default Location;
