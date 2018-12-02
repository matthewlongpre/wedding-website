import React from 'react';
import GoogleLogin from 'react-google-login';

import config from '../config';

const responseGoogle = (response) => {
  console.log(response);
}

// Matt
// profileObj.googleId = 117175199674317177412
// amee
// 115589464811158666773

// [115589464811158666773, 117175199674317177412]

class Login extends React.Component {
  onSuccess() {
    console.log('onsuccess in login');
    this.props.onSuccess();
  }
  render() {
    return (<div className="flex w-100 h-100 justify-content-center align-items-center">
      <GoogleLogin
        clientId={config.GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={() => this.onSuccess()}
        onFailure={responseGoogle}
      />
    </div>);
  }
}

export default Login;