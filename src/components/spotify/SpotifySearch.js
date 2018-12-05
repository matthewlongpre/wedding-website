import React from 'react';
import { SpotifyAuthService } from '../../services/spotify.auth.service.js';
import { SpotifyService } from '../../services/spotify.service';

import SpotifyResults from './SpotifyResults';

class SpotifySearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: []
    }
    this.spotifyAuthService = new SpotifyAuthService();
    this.spotifyService = new SpotifyService();
    this.authenticated = this.spotifyAuthService.access_token;
    this._handleInputChange = this._handleInputChange.bind(this);
  }

  componentDidMount() {
    if (this.authenticated === null) {
      this.spotifyAuthService._login();
    }
  }

  _handleInputChange() {
    this.setState({
      query: this.search.value
    });
    this.spotifyService.search(this.search.value, 'track')
      .then((results) =>
        this.setState({
          results: results
        }));
  }

  _handleTrackClick(track) {
    this.spotifyService.addToPlaylist(track)
      .then(response => console.log(response));
  }

  render() {
    const { results } = this.state;
    { results.tracks && console.log(results.tracks.items); }

    return (
      <div className="flex w-100 h-100 table-wrap flex-direction-column justify-content-center align-items-center">
        Spotify stuff
        <form>
          <input
            placeholder="Search for..."
            ref={input => this.search = input}
            type="text"
            onChange={this._handleInputChange}>
          </input>
        </form>
        {results.tracks && <SpotifyResults handleTrackClick={(track) => this._handleTrackClick(track)} tracks={results.tracks} />}
      </div>
    );
  }
}

export default SpotifySearch;
