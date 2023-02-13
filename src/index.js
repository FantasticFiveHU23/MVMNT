import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import './styles/App.css';

import HomePage from "./pages/HomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Main = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="App">
            <HomePage isLoggedIn={isLoggedIn} />
        </div>
    )
}

root.render(
  <React.StrictMode>
      <Main/>
  </React.StrictMode>
);