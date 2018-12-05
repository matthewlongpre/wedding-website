import React from 'react';
const LoadSuccess = (props) => {
  return (
    <div className={`circle-loader ${props.loadComplete && "load-complete"}`}>
      <div className="checkmark draw" style={props.loadComplete ? { display: 'block' } : { display: 'none' }}></div>
    </div>
  );
}

export default LoadSuccess;