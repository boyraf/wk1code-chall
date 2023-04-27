import React, { useEffect } from "react";
import Table from "./Table";
import Form from "./Form";

function App({  }) {
  //const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((r) => r.json())
      .then((transactions) => data(transactions));
  }, []);

  return (
    <div>
      <Table />
      <Form />
    </div>
  );
}

export default App;
