import React, { useState } from "react";

function Search() {

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
