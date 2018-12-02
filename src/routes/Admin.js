import React from 'react';
import firebase from '../firebase';

const provider = new firebase.auth.GoogleAuthProvider();

class Admin extends React.Component {

  componentDidMount() {
    firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;

      console.error(errorCode)

      // ...
    });
  }

  render() {
    return <div>Admin</div>
  }
}

export default Admin;