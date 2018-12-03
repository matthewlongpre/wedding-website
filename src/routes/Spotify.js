import React from 'react';
import SpotifySearch from '../components/spotify/SpotifySearch';

class Spotify extends React.Component {
  render() {
    return (
      <div className="flex w-100 h-100 table-wrap flex-direction-column justify-content-center align-items-center">
        <SpotifySearch />
      </div>
    );
  }
}

export default Spotify;
