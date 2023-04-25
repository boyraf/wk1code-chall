import React from "react";
import { useState, useEffect } from "react";
import TableList from "./TableList";
import Form from "./Form";

function Table() {
  const [transactions, setNew] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/transactions";
    fetch(url)
      .then((res) => res.json())
      .then((transactions) => setNew(transactions));
  }, []);

  return (
    <div>
      <Form />
      <br />
      <br />
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
          {transactions.map((transaction) => {
            return (
              <TableList
                key={transaction.id}
                date={transaction.date}
                description={transaction.description}
                category={transaction.category}
                amount={transaction.amount}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
