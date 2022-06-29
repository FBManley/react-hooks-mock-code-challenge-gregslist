import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard"


function ListingsContainer() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((r) => r.json())
    .then(listings => setListings(listings))
  }, [])
  console.log(listings)
  const listingsCards = listings.map(listingObj => {
    return <ListingCard key={listingObj.id} listing={listingObj}/>
  })
  return (
    <main>
      <ul className="cards">{listingsCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
