import React from 'react';

const SpotifyResults = (props) => {
  const items =  props.tracks.items.map(item =>
    <SpotifyTrack
      key={item.id}
      uri={item.uri}
      name={item.name}
      artist={item.artists[0].name}
      handleTrackClick={(track) => props.handleTrackClick(track)}
    />
  );
  return <div className="flex flex-direction-column">{items}</div>
}

const SpotifyTrack = (props) => {
  return <div onClick={() => props.handleTrackClick(props.uri)}>{props.artist} - {props.name}</div>
}

export default SpotifyResults;
