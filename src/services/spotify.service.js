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

  getPlaylist = (id) => {
    const headers = new Headers();
    headers.append('authorization', 'Bearer ' + this.authToken);
    const url = `${this.baseUrl}playlists/${id}`;
    
    return fetch(url, { headers })
      .then(this.handleErrors)
      .then(res => res.json())
      .then(res => res)
      .catch(e => {
        console.log(e)
      });
  }

  addToPlaylist = (track) => {
    const playlistId = `4roL0YnXoN2zdF500IYNnT`;
    const url = `${this.baseUrl}playlists/${playlistId}/tracks?uris=${track}`;
    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.authToken);
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    const options = {
      method: "POST",
      headers: headers
    }
    return fetch(url, options)
      .then(response => response.json());
  }

}

export default SpotifyService;
