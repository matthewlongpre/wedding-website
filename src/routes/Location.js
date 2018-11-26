import React from 'react';

const Location = (props) => {
  return (
    <div className={`${(props.bgClass)} page-background w-100 h-100 flex flex-direction-column justify-content-center align-items-center background-cover`}>
      <div className="page-content p-40 position-relative flex flex-direction-column justify-content-center align-items-center">
        <h2 className="font-blithe m-0 f-3">The Fort Common</h2>
        <h3 className="text-italic">1017 Blanshard St, Victoria, BC</h3>
      </div>
    </div>
  );
}
export default Location;
