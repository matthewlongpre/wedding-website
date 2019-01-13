import React from 'react';
import { Link } from 'react-router-dom';

const Notes = () => {
  return (
    <div className="notes">

      <h2 className="font-blithe m-0 f-3 text-center">The Deets</h2>

      <h4 className="text-italic">Ceremony will begin at 4:00pm sharp</h4>
      <p>Please arrive with enough time to find parking and be seated by 3:45pm.<br /> <Link to="/location">See parking information here</Link></p>

      <h4 className="text-italic">Outdoor ceremony/reception</h4>
      <p>Please bring a jacket or sweater for when it cools off in the evening.</p>

      <h4 className="text-italic">A buffet dinner will be served</h4>
      <p>Please let us know if you have any dietary restrictions and we will try our best to accommodate.</p>

      <h4 className="text-italic">Special cocktail</h4>
      <p>Everyone gets a special cocktail served to start off cocktail hour - after that there will be table wine with dinner and a cash bar. Bring some cash for after dinner.</p>

    </div>
  );
}

export default Notes;