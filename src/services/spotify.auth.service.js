import { SPOTIFY_CONFIG } from './spotify.config';

export class SpotifyAuthService {
  stateKey = 'spotify_auth_state';
  params = this._getHashParams();
  access_token = this._checkAccessToken();
  state = this.params.state;
  storedState = localStorage.getItem(this.stateKey);
  storedRoute = localStorage.getItem('route');

  _getHashParams() {
    const hashParams = {};
    let e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while (e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  _generateRandomString(length) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  _checkAccessToken() {
    if (this.params.access_token) {
      localStorage.setItem('access_token', this.params.access_token);
      return this.params.access_token;
    } else {
      if (localStorage.getItem('access_token')) {
        return localStorage.getItem('access_token');
      } else {
        return null;
      }
    }
  }

  _login() {
    const state = this._generateRandomString(16);

    localStorage.setItem(this.stateKey, state);
    localStorage.setItem('route', '/spotify');
    const scope = SPOTIFY_CONFIG.scope;

    let url = SPOTIFY_CONFIG.authURL;
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(SPOTIFY_CONFIG.clientID);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(SPOTIFY_CONFIG.redirect);
    url += '&state=' + encodeURIComponent(state);

    window.location.href = url;
  }

}
