import React from 'react';
import Timeline from './../components/Timeline';
import Notes from './../components/Notes';

const Details = (props) => {
  return (
    <div className="page-home page-background w-100 h-100 flex justify-content-center">
      <div className="page-content pt-100 position-relative">
        <Notes />
        <Timeline />
      </div>
    </div>
  );
}

export default Details;