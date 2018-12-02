import React from 'react';
import { Redirect } from 'react-router-dom';
import fakeAuth from '../auth/auth';

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }));
    });
  }

  render() {
    const { redirectToReferrer } = this.state;
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    if (redirectToReferrer === true) {
      return (
        <Redirect to="/admin" />
      );
    }
    return (
      <div style={{marginTop: '500px'}} onClick={this.login}>Login</div>
    );
  }
}
export default Login;