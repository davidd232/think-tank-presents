import { MouseEventHandler } from "react";

type listing = {
  name: string,
  location: string,
  url: string
}

export function Listing({ 
  listing, 
  clickNext, 
  clickPrev 
}: 
{
  listing: listing, 
  clickNext: MouseEventHandler, 
  clickPrev: MouseEventHandler
}) {

  return (
    <div>
      <h1>David</h1>
      <div>{listing.name}</div>
      <div>{listing.location}</div>
      <img src={listing.url} alt="a house"></img>
      <div onClick={clickPrev}>{'<'}</div>
      <div onClick={clickNext}>{'>'}</div>
    </div>
  );
}