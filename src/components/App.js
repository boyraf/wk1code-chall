import React from 'react';
import TransactionList from './TableList';
import TransactionTable from './Table';
import Addform from './Form';
import '../App.css';

function App() {
  return (
    <div>
      <h1 id="vin">MTransactions!!</h1>
      <Addform />
      <TransactionList />
      <TransactionTable/>
    </div>
  );
}

export default App;