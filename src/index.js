import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/App.css";
import {Amplify, Auth} from 'aws-amplify';
import awsconfig from './aws-exports';
import { attached } from "@aws-amplify/datastore/lib-esm/datastore/datastore";
import './styles/App.css';
import { HomePage }from "./pages/HomePage";
import awsExports from './aws-exports';
import {Header} from "./components/Header";
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import BusinessPage from "./pages/BusinessPage";
import { FindBusinesses } from "./pages/FindBusinesses";
import {LocalFinds} from "./pages/LocalFinds";
import {TopSellers} from "./pages/TopSellers";

Amplify.configure(awsExports);
const root = ReactDOM.createRoot(document.getElementById("root"));
Amplify.configure(awsconfig);
Auth.configure(awsconfig);

const Main = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="App">
            <Header isLoggedIn ={isLoggedIn} />
           
            <Router>
                 
                <Routes>
                    <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />
                    <Route path = "/BusinessPage" element={<BusinessPage/>}/>
                    <Route path="/search" element={<FindBusinesses />} />
                    <Route path="/local-finds" element={<LocalFinds location="Washington D.C" />} />
                    <Route path="/top-sellers" element={<TopSellers />} />
                </Routes>
            </Router>
        </div>
    )
}

root.render(
    <Main/>
);