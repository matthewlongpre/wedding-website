import { SpotifyAuthService } from './spotify.auth.service';

export class SpotifyService {
  constructor() {
    this.authService = new SpotifyAuthService();
    this.authToken = this.authService.access_token;
    this.baseUrl = 'https://api.spotify.com/v1/';
  }

  search = (q, type) => {
    if (!q) {
      q = " ";
    }
    const headers = new Headers();
    headers.append('authorization', 'Bearer ' + this.authToken);
    const url = `${this.baseUrl}search?q=${q}&type=${type}`;
    return fetch(url, { headers })
      .then(this.handleErrors)
      .then(res => res.json())
      .then(res => res)
      .catch(e => {
        console.log(e)
      });
  }

  handleErrors = (response) => {
    if (response.status === 401) {
      this.authService._login();
    }
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  getTrack = (trackID) => {
    const headers = new Headers();
    headers.append('authorization', 'Bearer ' + this.authToken);
    const url = `${this.baseUrl}tracks/${trackID}`;
    return this.http
      .get(url, { headers })
      .map(res => {
        return res.json();
      })
      .catch(e => {
        if (e.status === 401) {
          console.error(e);
          this.authService._login();
        }
      });
  }
}

export default SpotifyService;
