import React from "react";
import firebase from "../firebase";
import { FormModal } from "../components/FormModal";
import "../styles/form.css";
import MALogo from "../assets/m+a-2.svg";
import SVG from "react-inlinesvg";

class RSVP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      rsvp: "",
      dietaryRestrictions: "",
      message: ""
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this.databaseRef = firebase.database().ref("rsvps");
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
    newRSVPRef.set(rsvp, error => {
      if (error) {
        alert(error);
        console.error("Failed", error);
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
    this.props.history.push("/");
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
      <div className="page-home page-background w-100 h-100 flex justify-content-center">
        <div className="page-content w-100 pt-100 position-relative text-center">
          <SVG className="ma-logo rsvp" src={MALogo} cacheGetRequests />

          <form
            className="form float-label text-left"
            id="intro-form"
            onSubmit={this._handleSubmit}
          >
            <h4 className="text-italic text-center">
              Please fill out this form per individual guest.
            </h4>

            <div className="control">
              <input
                className="font-raleway text-uppercase text-italic letter-spacing-1 f-1"
                type="text"
                name="firstName"
                placeholder="First name"
                required
                id="firstName"
                onChange={this._handleChange}
              />
              <label htmlFor="firstName">First name:</label>
            </div>

            <div className="control">
              <input
                className="font-raleway text-uppercase text-italic letter-spacing-1 f-1"
                type="text"
                name="lastName"
                placeholder="Last name"
                id="lastName"
                required
                onChange={this._handleChange}
              />
              <label htmlFor="lastName">Last name:</label>
            </div>

            <div className="control">
              <input
                className="font-raleway text-uppercase text-italic letter-spacing-1 f-1"
                type="text"
                name="email"
                placeholder="Email"
                id="email"
                required
                onChange={this._handleChange}
              />
              <label htmlFor="email">Email:</label>
            </div>

            <h4 className="text-italic mb-0">Will you be attending?</h4>

            <div className="input-group radio">
              <input
                id="radio1"
                name="rsvp"
                type="radio"
                required
                onChange={this._handleChange}
                value="accepted"
              />
              <label htmlFor="radio1">Yes, with pleasure!</label>
            </div>

            <div className="input-group radio">
              <input
                id="radio2"
                name="rsvp"
                type="radio"
                className="radio-decline"
                required
                onChange={this._handleChange}
                value="declined"
              />
              <label htmlFor="radio2" className="label-decline">
                No, I'll celebrate from afar.
              </label>
            </div>

            {this.state.rsvp === "accepted" && <div className="control">
              <textarea
                className="font-raleway letter-spacing-1 f-1 message dietary-restrictions"
                type="text"
                name="dietaryRestrictions"
                placeholder="Any dietary restrictions?"
                id="dietaryRestrictions"
                onChange={this._handleChange}
              />
              <label htmlFor="message">Any dietary restrictions?</label>
            </div>}

            <div className="control">
              <textarea
                className="font-raleway letter-spacing-1 f-1 message"
                type="text"
                name="message"
                placeholder="Leave us a message"
                id="message"
                onChange={this._handleChange}
              />
              <label htmlFor="message">Message:</label>
            </div>


            <button
              className="button mb-40 font-raleway text-uppercase"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default RSVP;
