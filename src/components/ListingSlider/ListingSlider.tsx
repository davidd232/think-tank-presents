import { useState } from "react";

export function ListingSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function onClickHandler () {
    console.log('clicked. We remmember')
  }
  return (
    <div>
      <h1 onClick={onClickHandler}>David</h1>
    </div>
  );
}
