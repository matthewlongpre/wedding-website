import React from 'react';
import { Link } from 'react-router-dom';

const Notes = () => {
  return (
    <div className="notes">

      <h2 className="font-blithe m-0 f-3 text-center">The Deets</h2>

      <h4 className="text-italic">The ceremony will begin at 4:00pm sharp</h4>
      <p>Please arrive with enough time to find parking and be seated by 3:45pm. There are several parkades and street parking nearby (which is free after 6pm). <br /><Link to="/location">See parking information here</Link></p>

      <h4 className="text-italic">Outdoor ceremony/reception</h4>
      <p>The venue is an outdoor space, so you might want to bring a jacket or sweater for when it cools off in the evening (although we are certain the dancing will keep us nice and toasty all night long).</p>

      <h4 className="text-italic">A buffet dinner will be served</h4>
      <p>Please let us know if you have any dietary restrictions on the RSVP form and we will try our best to accommodate.</p>

      <h4 className="text-italic">Bevvies and Cocktails</h4>
      <p>Everyone will get a delicious cocktail to kick off cocktail hour - after that there will be table wine with dinner, and drinks at the bar will be by donation. Have fun and drink responsibly!</p>

    </div>
  );
}

export default Notes;