import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import './styles/App.css';

import { HomePage }from "./pages/HomePage";
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import {Header} from "./components/Header";
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import {BusinessPage} from "./pages/BusinessPage";

Amplify.configure(awsExports);
const root = ReactDOM.createRoot(document.getElementById("root"));

const Main = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={
                        <HomePage
                            isLoggedIn={isLoggedIn}
                        />}
                    />
                    <Route path = "/Businesspage" element={<BusinessPage/>}/>
                </Routes>
            </Router>
        </div>
    )
}

root.render(
    <Main/>
);