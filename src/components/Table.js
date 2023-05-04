import React from "react";
import { useState, useEffect } from "react";
import TableList from "./TableList";

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
          {transactions.length > 0 ? (
            transactions.map((transaction) => {
              return (
                <TableList
                  key={transaction.id}
                  date={transaction.date}
                  description={transaction.description}
                  category={transaction.category}
                  amount={transaction.amount}
                />
              );
            })
          ) : (
            <tr>
              <td colSpan="4">No transactions found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
