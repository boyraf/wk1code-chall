import React, { useState, useEffect } from "react";
import Table from "./Table";
import Form from "./Form";

function App({ onAddTransaction }) {
  //const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((r) => r.json())
      .then((transactions) => onAddTransaction(transactions));
  }, []);

  return (
    <div>
      <Table />
      <Form />
    </div>
  );
}

export default App;
