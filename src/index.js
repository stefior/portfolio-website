"use strict";

import "./styles.css";
import "./main.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUnxYLDhufR6Ie_KUvb-1gs3yUYUIEEoA",
  authDomain: "my-portfolio-website-e6ccc.firebaseapp.com",
  projectId: "my-portfolio-website-e6ccc",
  storageBucket: "my-portfolio-website-e6ccc.appspot.com",
  messagingSenderId: "1092845987262",
  appId: "1:1092845987262:web:7f24e1a497fb976a9b05ef",
  measurementId: "G-KCGC83R4R0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
