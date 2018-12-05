let redirectUri;
if (window.location.host === 'mattamee.com') {
  redirectUri = 'https://mattamee.com/spotify';
} else {
  redirectUri = 'http://localhost:3000/spotify';
}

export const SPOTIFY_CONFIG = {
  clientID: '39431103653645f6912b356c493e1fdd',
  clientSecret: '47edeba779434b878296e9015b43dc4d',
  redirect: redirectUri,
  authURL: 'https://accounts.spotify.com/authorize',
  scope: 'user-read-private user-read-email playlist-modify-public playlist-modify-private'
};
