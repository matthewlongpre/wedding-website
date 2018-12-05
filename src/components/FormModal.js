import React from 'react';
import '../styles/form-modal.css';
import LoadSuccess from './Loader';

export const FormModal = (props) => {
  const { isAttending, formSubmitting, formSubmitSuccessful, firstName } = props;
  if (formSubmitting || formSubmitSuccessful) {
    return (
      <div className="form-modal flex flex-direction-column justify-content-center align-items-center">
        <LoadSuccess loadComplete={formSubmitSuccessful} />
        {formSubmitSuccessful && 
        <div>
          <h2 className="text-italic">{isAttending ? `Thanks ${firstName}, see you there!` : `Sorry you can't make it ${firstName}.`}</h2>
          <h4 className="text-italic">Do you have another guest to RSVP for?</h4>
          <button className="button mb-20 w-100 font-raleway text-uppercase" type="button" onClick={() => props._handleSubmitAnotherClick()}>Yes!</button>
          <button className="button mb-20 w-100 font-raleway text-uppercase"type="button" onClick={() => props._handleFinishedClick()}>No!</button>
        </div>
        }
      </div>
    );
  }
  return (
    <div></div>
  );
}
