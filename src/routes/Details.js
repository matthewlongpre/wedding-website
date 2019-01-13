import React from "react";
import Timeline from "./../components/Timeline";
import Notes from "./../components/Notes";

const Details = props => {
  return (
    <div className="page-content pt-100 position-relative">
      <Notes />
      <Timeline />
    </div>
  );
};

export default Details;
