import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import './styles/App.css';
import { Footer } from "./components/Footer";
import { HomePage }from "./pages/HomePage";
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import {Header} from "./components/Header";
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import BusinessPage from "./pages/BusinessPage";
import { FindBusinesses } from "./pages/FindBusinesses";
import {LocalFinds} from "./pages/LocalFinds";
import {TopSellers} from "./pages/TopSellers";
import {CustomerProfile} from "./pages/CustomerProfile";
import {Categories} from "./pages/Categories";

Amplify.configure(awsExports);
const root = ReactDOM.createRoot(document.getElementById("root"));

const Main = () => {
    // eslint-disable-next-line
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="App">
            <Header isLoggedIn={isLoggedIn}/>
           
            <Router>
                 
                <Routes>
                    <Route path="/" element={
                        <HomePage
                            isLoggedIn={isLoggedIn}
                        />}
                    />
                    <Route path = "/BusinessPage" element={<BusinessPage/>}/>
                    <Route path="/search" element={<FindBusinesses />} />
                    <Route path="/local-finds" element={<LocalFinds location="Washington D.C" />} />
                    <Route path="/top-sellers" element={<TopSellers />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/profile-page" element={<CustomerProfile />} />
                </Routes>
            </Router>
            <Footer/>
        </div>
    )
}

root.render(
    <Main/>
);