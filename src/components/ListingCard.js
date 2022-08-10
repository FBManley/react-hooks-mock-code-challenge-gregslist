import React, { useState } from "react";

function ListingCard() {
 
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img  />
      </div>
      <div className="details">
        {isFavorited ? (
          <button 
        
          className="emoji-button favorite active">★</button>
        ) : (
          <button 
          
          className="emoji-button favorite">☆</button>
        )}
        <strong></strong>
        <span> </span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
