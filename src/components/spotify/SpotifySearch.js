import React from 'react';
import { SpotifyAuthService } from '../../services/spotify.auth.service.js';
import { SpotifyService } from '../../services/spotify.service';

import SpotifyResults from './SpotifyResults';
import LoadSuccess from '../Loader';

class SpotifySearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: [],
      track: null,
      trackAdded: false
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
    this.setState({
      trackChosen: true,
      track: track
    });
  }

  _handleTrackDenyClick() {
    this.setState({
      track: null
    });
  }

  _handleTrackConfirmClick() {
    this._addToPlaylist(this.state.track.uri);
  }

  _addToPlaylist(track) {
    this.spotifyService.addToPlaylist(track)
      .then(response => this._handleTrackAddSuccess(response));
  }

  _handleTrackAddSuccess(track) {
    this.setState({
      trackAdded: true
    });
  }

  render() {
    const { results, trackAdded, trackChosen, track } = this.state;

    if (trackAdded) {
      return (
        <div>
          <LoadSuccess loadComplete={trackAdded} />
          <h2 className="text-italic">Got it, thanks!</h2>
        </div>
      );
    }

    if (track) {
      return (
        <div>
          <h2>Are you sure you want to choose {track.name} by {track.artist}?</h2>
          <button onClick={() => this._handleTrackConfirmClick()} type="button">Yes!</button>
          <button onClick={() => this._handleTrackDenyClick()} type="button">No!</button>
        </div>
      );
    }

    return (
      <div className="flex w-100 h-100 mt-40 page-content flex-direction-column justify-content-center align-items-center">
        <form className="w-100 form float-label">
          <div className="control">
            <input
              className="w-100 font-raleway text-uppercase text-italic letter-spacing-1 f-1"
              placeholder="Search for a song or artist"
              ref={input => this.search = input}
              type="text"
              id="trackSearch"
              required
              onChange={this._handleInputChange}>
            </input>
            <label htmlFor="trackSearch">Search for a song or artist:</label>
          </div>
        </form>
        {results.tracks && <SpotifyResults handleTrackClick={(track) => this._handleTrackClick(track)} tracks={results.tracks} />}
      </div>
    );
  }
}

export default SpotifySearch;
