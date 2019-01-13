import React from "react";
import Timeline from "./../components/Timeline";
import Notes from "./../components/Notes";
import PageBackground from './../components/styled-components/PageBackground';

const Details = props => {
  return (
    <>
    <PageBackground />
    <div className="page-content pt-100 position-relative">
      <Notes />
      <Timeline />
    </div>
    </>
  );
};

export default Details;
