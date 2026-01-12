import React, { useState } from 'react';
import AppRouter from './Router/router.jsx';
import Transactions from './Transactions/transactions';

function App() {
  const [transactions, setTransactions] = useState([]);
  return <AppRouter />;
}

export default App;
