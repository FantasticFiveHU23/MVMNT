import '../styles/App.css';
import React, { useState } from 'react';
import {HomePage} from './HomePage';
import Businesspage from './Businesspage';
import Businessprofile from './Business-profile';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import {Header} from "../components/Header";
import { Link } from 'react-router-dom';
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
      <Route path ="/Businessprofile" element={<Businessprofile/>} />
      </Routes>
      </Router>
    </div>
  );
}
// Test 2
export default App;