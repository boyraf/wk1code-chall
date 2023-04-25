/*import React from "react";


function TableList(date, description, category, amount){
    return(
        <li>
            <h3>{date}</h3>
            <h3>{description}</h3>
            <h3>{category}</h3>
            <h3>{amount}</h3>
        </li>
    )
}

export default TableList;*/


import React from "react";

function TableList(props) {
  return (
    <tr>
      <td>{props.date}</td>
      <td>{props.description}</td>
      <td>{props.category}</td>
      <td>{props.amount}</td>
    </tr>
  );
}

export default TableList;
