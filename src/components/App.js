import React from 'react';
import TableList from './TableList';
import Table from './Table';
import Form from './Form';
import '../App.css';

function App() {
  return (
    <div>
      <h1 id="vin">MTransactions!!</h1>
      <Form />
      <TableList />
      <Table/>
    </div>
  );
}

export default App;