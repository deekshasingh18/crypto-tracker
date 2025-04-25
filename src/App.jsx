// src/App.jsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MockWebSocket from './utils/MockWebSocket';
import { simulateUpdates } from './slices/cryptoSlice';
import CryptoTable from './components/CryptoTable';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const ws = new MockWebSocket('mock://crypto');
    ws.onmessage = () => dispatch(simulateUpdates());
    return () => ws.close();
  }, [dispatch]);

  return (
    <div className="table-wrapper">
      <h1>Real-Time Crypto Price Tracker</h1>
      <CryptoTable />
    </div>
  );
}

export default App;
