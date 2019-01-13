import React from 'react';

const GoogleMap = (props) => <iframe onLoad={props.handleMapLoad} title="Map" src={props.map} className="google-map" frameBorder="0" style={ {border: 0 } } allowFullScreen></iframe>

export default GoogleMap;