import '../styles/App.css';
import React, { useState } from 'react';
// eslint-disable-next-line
import {HomePage} from './HomePage';
// eslint-disable-next-line
import { Dashboard } from '../components/Dashboardbutton';
import { Footer } from '../components/Footer';

function App() {
  // eslint-disable-next-line
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <HomePage isLoggedIn={isLoggedIn} />
      {/* <Dashboard isLoggedIn={isLoggedIn}/> */}
      <Footer />
    </div>

  );
}
// Test 2
export default App;