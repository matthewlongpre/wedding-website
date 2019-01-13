import React from 'react';

const MainWrapper = (props) => {
  const { location: { pathname } } = props;

  let shouldScroll = false;
  if (pathname === "/details/" || pathname === "/rsvp/" || pathname === "/location/") {
    shouldScroll = true;
  }

  return (
    <main id="page-wrap" className={`w-100 h-100 ${shouldScroll && "should-scroll"}`}>
      {props.children}
    </main>
  );
}

export default MainWrapper;
