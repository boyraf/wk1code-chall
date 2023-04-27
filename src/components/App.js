import React, { useEffect, useState } from "react";
import Table from "./Table";
import Form from "./Form";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((r) => r.json())
      .then((data) => setTransactions(data));
  }, []);

  return (
    <div>
      <Table transactions={transactions} />
      <Form />
    </div>
  );
}

export default App;
