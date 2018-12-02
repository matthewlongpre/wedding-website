import React from 'react';
import GoogleLogin from 'react-google-login';



const responseGoogle = (response) => {
  console.log(response);
}

// secret: qHzJ50ypHtB_XRrhLZQOv0xw

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
        clientId="954385183007-hm18rg2fbui9l0veuitp8aftb5r6nijm.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={() => this.onSuccess()}
        onFailure={responseGoogle}
      />
    </div>);
  }
}

export default Login;