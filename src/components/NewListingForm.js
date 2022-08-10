import React, { useState } from "react"
function NewListingForm(){
   
    return <form >
        <label htmlFor="description">Description:</label>
        <input type="text" id="description"  />
        <label htmlFor="image">image:</label>
        <input type="text" id="image" />
        <label htmlFor="local">location:</label>
        <input type="text" id="location" />
        <button type="submit">Add Listing</button>
    </form>
}
export default NewListingForm;