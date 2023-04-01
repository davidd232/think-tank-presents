import { useState } from "react";
import * as listings from '../../listings.json';
import { Listing } from '../Listing/Listing';

export function ListingSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const allListings = listings;

  function onClickHandler () {
    console.log('clicked. We remmember')
  }
  return (
    <div>
      <Listing listing={allListings[currentIndex]}/>
    </div>
  );
}
