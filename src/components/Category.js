import React from "react";

function Category({ category, setCategory }) {
  return (
    <select
      name="category"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value={"Food"}>Food</option>
      <option value={"Fashion"}>Fashion</option>
      <option value={"Income"}>Income</option>
      <option value={"Housing"}>Housing</option>
      <option value={"Transportation"}>Transportation</option>
      <option value={"Gift"}>Gift</option>
      <option value={"Entertainment"}>Entertainment</option>
    </select>
  );
}

export default Category;
