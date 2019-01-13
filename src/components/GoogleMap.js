import React from 'react';

const GoogleMap = (props) => <iframe title="Map" src={props.map} className="google-map" frameBorder="0" style={ {border: 0 } } allowFullScreen></iframe>

export default GoogleMap;