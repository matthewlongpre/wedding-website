import React from 'react';
import { withRouter } from 'react-router-dom'
import firebase from '../firebase';

import MALogo from '../assets/m+a-2.svg';
import SVG from 'react-inlinesvg';

const Button = withRouter(({ history }) => (
  <button
    type='button'
    onClick={() => { history.push('/') }}
  >
    I'm good
  </button>
))

class RSVP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      rsvp: ''
    }

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this.databaseRef = firebase.database().ref('rsvps');

  }

  _handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  _handleSubmit(event) {
    event.preventDefault();
    this._submitRSVP(this.state);
  }

  _submitRSVP(rsvp) {
    const newRSVPRef = this.databaseRef.push();
    newRSVPRef.set(rsvp, (error) => {
      if (error) {
        console.log('failed', error);
      } else {
        console.log('data saved!');
        this._handleFormComplete();
      }
    });
  }

  _handleFormComplete() {
    console.log('rsvp form complete');
    this.props._handleFormComplete();
  }

  _handleSubmitAnotherClick() {
    this.props._resetForm();
  }

  _handleFinishedClick() {
    alert('k!');
  }

  render() {
    if (this.props.formComplete) {
      return <div style={{marginTop: '200px'}}>
        Submit another?
        <button onClick={() => this._handleSubmitAnotherClick()}>Yes!</button>
        <Button />
        {/* <button onClick={() => this._handleFinishedClick()}>I'm good</button> */}
      </div>
    }
    return (
      <div className={`${this.props.bgClass} page-background w-100 h-100 flex flex-direction-column justify-content-center align-items-center`}>

        <div className="page-content p-40 position-relative flex flex-direction-column justify-content-center align-items-center">
          <SVG
            className="ma-logo rsvp"
            src={MALogo}
            cacheGetRequests
          >
          </SVG>

          <h4 className="text-italic">
            Please fill out this form per individual guest.
          </h4>

          <form className="form float-label" id="intro-form" onSubmit={this._handleSubmit}>

            <div className="control">
              <input className="font-raleway text-uppercase text-italic letter-spacing-1 f-1" type="text" name="firstName" placeholder="First name" required id="firstName" onChange={this._handleChange} />
              <label htmlFor="firstName">First name:</label>
            </div>

            <div className="control">
              <input className="font-raleway text-uppercase text-italic letter-spacing-1 f-1" type="text" name="lastName" placeholder="Last name" id="lastName" required onChange={this._handleChange} />
              <label htmlFor="lastName">Last name:</label>
            </div>

            <div className="control">
              <input className="font-raleway text-uppercase text-italic letter-spacing-1 f-1" type="text" name="email" placeholder="Email" id="email" required onChange={this._handleChange} />
              <label htmlFor="email">Email:</label>
            </div>

            <h4 className="text-italic mb-0">Will you be attending?</h4>

            <div className="input-group radio">
              <input id="radio1" name="rsvp" type="radio" onChange={this._handleChange} value="accepted" />
              <label htmlFor="radio1">Yes, with pleasure!</label>
            </div>

            <div className="input-group radio">
              <input id="radio2" name="rsvp" type="radio" onChange={this._handleChange} value="declined" />
              <label htmlFor="radio2">No, I'll celebrate from afar.</label>
            </div>

            <button className="button mb-20" type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
export default RSVP;
