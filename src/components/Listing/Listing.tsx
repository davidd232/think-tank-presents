type listing = {
  name: string,
  location: string,
  url: string
}


export function Listing({ listing }: {listing: listing}) {

  return (
    <div>
      <h1>David</h1>
      <div>{listing.name}</div>
      <div>{listing.location}</div>
      <img src={listing.url}></img>
      <div>{'<'}</div>
      <div>{'>'}</div>
    </div>
  );
}