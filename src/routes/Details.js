import React from "react";
import Timeline from "./../components/Timeline";
import Notes from "./../components/Notes";
import PageBackground from "./../components/styled-components/PageBackground";

const Details = () => {
  return (
    <div>
      <PageBackground />
      <div className="page-content pt-100 position-relative pb-80 h-min-content">
        <Notes />
        <Timeline />
      </div>
    </div>
  );
};

export default Details;
