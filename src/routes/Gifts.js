import React from "react";
import PageBackground from "../components/styled-components/PageBackground";

const Gifts = props => {
  const { backgroundImage, backgroundsLoaded } = props;
  return (
    <div>
      <PageBackground
        backgroundsLoaded={backgroundsLoaded}
        backgroundImage={backgroundImage}
        className={`bg-3 page-background w-100 h-100 flex flex-direction-column justify-content-center align-items-center background-cover`}
      />
      <div className="page-content p-40 position-relative flex flex-direction-column justify-content-center align-items-center">
        <h1 className="font-blithe m-0 f-3 text-center">
          No presents, please.
          <br /> Just your presence.
        </h1>
        <div className="text-left mt-20">
          <p>
            Honestly, your attendance is the perfect gift as far as we're
            concerned.
          </p>
          <p>
            But if you <em>really</em> feel like giving us a gift, we would
            appreciate <strong>a contribution to our honeymoon fund</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Gifts;
