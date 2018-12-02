import React from 'react';
import firebase from '../firebase';

import ReactTable from 'react-table';
import "react-table/react-table.css";

import '../styles/admin.css';

const provider = new firebase.auth.GoogleAuthProvider();


class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
      data: []
    }

    this.databaseRef = firebase.database().ref('rsvps');

  }

  componentDidMount() {
    this.databaseRef.on('value', (item) => {
      const data = Object.values(item.val());
      this.setState({
        data: data
      })
    });
  }

  handleLoginClick() {
    firebase.auth().signInWithPopup(provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;


      const credential = firebase.auth.GoogleAuthProvider.credential(null, token);
      firebase.auth().signInAndRetrieveDataWithCredential(credential).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });

      this.authSuccess(token, user);

    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;

      console.error(errorCode)
      console.error(errorMessage)
      console.error(email)
      console.error(credential)

    });
  }

  authSuccess(token, user) {
    this.setState({
      authenticated: true,
      token: token,
      user: user
    });
  }

  render() {
    const { authenticated, data } = this.state;

    if (!authenticated) {
      return (
        <div className="flex w-100 h-100 table-wrap flex-direction-column justify-content-center align-items-center" >
          <button onClick={() => this.handleLoginClick()} type="button">Login</button>
        </div>
      );
    }

    return (
      <div className="flex w-100 h-100 table-wrap flex-direction-column justify-content-center align-items-center" >
        <ReactTable className="table" data={data}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  accessor: "firstName"
                },
                {
                  Header: "Last Name",
                  accessor: "lastName"
                },
                {
                  Header: "Email",
                  accessor: "email"
                },
                {
                  Header: "Message",
                  accessor: "message"
                }
              ]
            }
          ]}
        />
      </div>
    );
  }
}

export default Admin;
