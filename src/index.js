import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./pages/App";
import {Amplify, Auth} from 'aws-amplify';
import awsconfig from './aws-exports';
import { attached } from "@aws-amplify/datastore/lib-esm/datastore/datastore";

const root = ReactDOM.createRoot(document.getElementById("root"));
Amplify.configure(awsconfig);
Auth.configure(awsconfig);
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);