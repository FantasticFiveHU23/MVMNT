import '../styles/App.css';
import React, { useState } from 'react';
// eslint-disable-next-line
import {HomePage} from './HomePage';
import { Dashboard } from '../components/Dashboardbutton';
import { Footer } from '../components/Footer';
import Businesspage from './Businesspage';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import {Header} from "../components/Header";
// import { Link } from 'react-router-dom';

function App() {
  // eslint-disable-next-line
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Header />
      
      <Router>
      <Routes>
      <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />
      <Route path = "/Businesspage" element={<Businesspage/>}/>
      </Routes>
      </Router>
    </div>

  );
}
// Test 2
export default App;