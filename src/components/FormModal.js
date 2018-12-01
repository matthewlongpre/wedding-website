import React from 'react';
import { withRouter } from 'react-router-dom'

const Button = withRouter(({ history }) => (
  <button
    type='button'
    onClick={() => { history.push('/') }}
  >
    I'm good
  </button>
))

const FormSuccess = (props) => {
  return (
    <div className={`circle-loader ${props.loadComplete && "load-complete"}`}>
      <div className="checkmark draw" style={props.loadComplete ? { display: 'block' } : { display: 'none' }}></div>
    </div>
  );
}

export const FormModal = (props) => {
  if (props.formSubmitting || props.formSubmitSuccessful) {
    return (
      <div className="form-modal flex flex-direction-column justify-content-center align-items-center">
        <FormSuccess loadComplete={props.formSubmitSuccessful} />
        <div>
          Submit another?
          <button type="button" onClick={() => props._handleSubmitAnotherClick()}>Yes!</button>
          <Button />
        </div>
      </div>
    );
  }
  return (
    <div></div>
  );
}

