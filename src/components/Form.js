import React from "react";
import Category from "./Category";

function Form() {
  function handleAdd(event) {
    event.preventDefault();
    // Handle form submission here
  }

  return (
    <form onSubmit={handleAdd}>
      <label>Date</label>
      <input type="date" />
      <br />
      <label>Description</label>
      <input type="text" />
      <br />
      <label>Category</label>
      <Category />
      <br />
      <label>Amount</label>
      <input type="number" />
      <br />
      <input type="submit" />
    </form>
  );
}

export default Form;
