import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBs3P6so3FyzvpuSPyC9nXwX2wgBciGijM",
  authDomain: "wedding-website-49e77.firebaseapp.com",
  databaseURL: "https://wedding-website-49e77.firebaseio.com",
  storageBucket: "wedding-website-49e77.appspot.com",
};
firebase.initializeApp(config);

export default firebase;