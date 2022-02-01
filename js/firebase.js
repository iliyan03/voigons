// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqFSVKAcnreBvxgXxqIQA6hDWAmP5cYJY",
  authDomain: "voigon.firebaseapp.com",
  databaseURL: "https://voigon.firebaseio.com",
  projectId: "voigon",
  storageBucket: "voigon.appspot.com",
  messagingSenderId: "1050910999548",
  appId: "1:1050910999548:web:f8780cc43748e81952e879",
  measurementId: "G-8724GMTP9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
