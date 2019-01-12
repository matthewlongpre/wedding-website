import React from 'react';

const Gifts = (props) => {

  const bg = { backgroundImage: props.backgroundImage };

  return (
    <div style={bg} className={`page-background w-100 h-100 flex flex-direction-column justify-content-center align-items-center background-cover`}>
      <div className="page-content p-40 position-relative flex flex-direction-column justify-content-center align-items-center">
        <h1 className="font-blithe m-0 f-3">No presents, please. Just your presence.</h1>
      </div>
    </div>
  );
}
export default Gifts;
