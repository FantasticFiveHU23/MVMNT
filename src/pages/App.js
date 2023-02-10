import '../styles/App.css';
import React, { useState } from 'react';
import HomePage from './HomePage';

function App() {
  // eslint-disable-next-line
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <HomePage isLoggedIn={isLoggedIn} />
    </div>
  );
}
// Test 2
export default App;