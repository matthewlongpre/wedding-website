import React from 'react';
import firebase from '../firebase';

import Login from './Login';

import '../styles/admin.css';

const RSVP = (props) => {
  const { firstName, lastName, email, timeStamp, message, index } = props.data;
  return <tr key={index}><td>{firstName}</td> <td>{lastName}</td> <td>{message}</td></tr>
}

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

  onSuccess() {
    console.log('admin: onsuccess')
    this.setState({
      authenticated: true
    });
  }

  render() {
    const { authenticated, data } = this.state;

    if (!authenticated) {
      return <Login onSuccess={() => this.onSuccess()} />
    }

    return (
      <div className="flex w-100 h-100 flex-direction-column justify-content-center align-items-center" >
        <table>
          <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Message</th>
          </tr>
          </thead>
          {data.map((item) => <RSVP key={item.timeStamp} data={item} />)}
        </table>
      </div>
    );
  }
}

export default Admin;