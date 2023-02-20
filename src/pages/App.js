import "../styles/App.css";
import React, { useState } from "react";
import { HomePage } from "./HomePage";
import Businesspage from "./Businesspage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { FindBusinesses } from "./FindBusinesses";
import { TopSellers } from "./TopSellers";
import { Categories } from "./Categories";
import { Footer } from "../components/Footer";
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
          <Route path="/Businesspage" element={<Businesspage />} />
          <Route path="/search" element={<FindBusinesses />} />
          <Route path="/top-sellers" element={<TopSellers />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
  
}
// Test 2
export default App;
