import React, { useState, useEffect } from "react";
import Table from "./Table";
import Form from "./Form";

function App({ onAddTransaction }) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transactionData),
    })
      .then((r) => r.json())
      .then((newTransaction) => onAddTransaction(newTransaction));
  }, []);

  return (
    <div>
      <Table />
      <Form />
    </div>
  );
}

export default App;
