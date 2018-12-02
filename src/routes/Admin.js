import React from 'react';
import firebase from '../firebase';

import Login from './Login';
import ReactTable from 'react-table';
import "react-table/react-table.css";

import '../styles/admin.css';

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