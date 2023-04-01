import { useState } from "react";
import * as listings from '../../listings.json';
import { Listing } from '../Listing/Listing';

export function ListingSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const allListings = listings;

  function clickNext () {
    const isLast = currentIndex === allListings.length - 1;
    const nextIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  }

  function clickPrev () {
    const isFirst = currentIndex === 0;
    const nextIndex = isFirst ? allListings.length - 1 : currentIndex - 1;
    setCurrentIndex(nextIndex);
  }
  return (
    <div>
      <Listing 
        listing={allListings[currentIndex]}
        clickNext={clickNext}
        clickPrev={clickPrev}   
      />
    </div>
  );
}
