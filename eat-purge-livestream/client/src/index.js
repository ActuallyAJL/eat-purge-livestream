import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { getUserByFirebaseId } from "./modules/userManager";

const getLoggedInUser = () => {
  const firebaseUserId = getUserByFirebaseId(
    firebase.auth().currentUser.uid.toString()
  );
  return firebaseUserId;
};

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
};
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App getLoggedInUser={getLoggedInUser} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
