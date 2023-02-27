import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import './styles/App.css';

import { HomePage }from "./pages/HomePage";
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsExports from './aws-exports';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import { BusinessPage } from "./pages/BusinessPage";
import {listBusinesses} from "./graphql/queries";

Amplify.configure(awsExports);
const root = ReactDOM.createRoot(document.getElementById("root"));

const Main = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [businessCollection, setBusinessCollection] = useState()

    useEffect(() => {
        const fetchBusinessCollection = async()  => {
            const data = await API.graphql(graphqlOperation(listBusinesses))
            if (data) {
                setBusinessCollection(data.data.listBusinesses.items)
            }
        }
        fetchBusinessCollection()
    }, [])

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={
                        <HomePage
                            isLoggedIn={isLoggedIn}
                            businessCollection={businessCollection}
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