import React from 'react';
import TransactionList from './components/TransactionList';
import TransactionTable from './components/TransactionTable';

import './App.css';
import Addform from './components/AddForm';

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