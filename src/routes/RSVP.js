import React from 'react';
import firebase from '../firebase';

import { FormModal } from '../components/FormModal';

import MALogo from '../assets/m+a-2.svg';
import SVG from 'react-inlinesvg';

class RSVP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      rsvp: '',
      timeStamp: ''
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
    this._openFormModal();
    this._submitRSVP(this.state);
  }

  _openFormModal() {
    this.props._handleFormSubmit();
  }

  _submitRSVP(rsvp) {
    const submission = rsvp;
    submission.timeStamp = Date.now();
    const newRSVPRef = this.databaseRef.push();
    newRSVPRef.set(rsvp, (error) => {
      if (error) {
        console.error('Failed', error);
      } else {
        this._handleFormSubmitSuccessful();
      }
    });
  }

  _handleFormSubmitSuccessful() {
    this.props._handleFormSubmitSuccessful();
  }

  _handleSubmitAnotherClick() {
    this.props._resetForm();
  }

  _handleFinishedClick() {
    this.props.history.push('/');
    this.props._formFinished(); 
  }

  render() {
    if (this.props.formSubmitting || this.props.formSubmitSuccessful) {
      return (
        <FormModal 
          isAttending={this.state.rsvp === "accepted"}
          firstName={this.state.firstName}
          formSubmitting={this.props.formSubmitting}
          formSubmitSuccessful={this.props.formSubmitSuccessful}
          _handleSubmitAnotherClick={() => this._handleSubmitAnotherClick()}
          _handleFinishedClick={() => this._handleFinishedClick()}
        />
      );
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
              <input id="radio1" name="rsvp" type="radio" required onChange={this._handleChange} value="accepted" />
              <label htmlFor="radio1">Yes, with pleasure!</label>
            </div>

            <div className="input-group radio">
              <input id="radio2" name="rsvp" type="radio" className="radio-decline" required onChange={this._handleChange} value="declined" />
              <label htmlFor="radio2" className="label-decline">No, I'll celebrate from afar.</label>
            </div>

            <div className="control">
              <textarea className="font-raleway letter-spacing-1 f-1 message" type="text" name="message" placeholder="Leave us a message" id="message" onChange={this._handleChange} />
              <label htmlFor="message">Message:</label>
            </div>

            <button className="button mb-20 font-raleway text-uppercase" type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
export default RSVP;
