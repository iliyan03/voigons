// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfmdBMXdyTxwtXHng4kdRVJNMg9Zs2p38",
    authDomain: "anayltics-test-e6628.firebaseapp.com",
    projectId: "anayltics-test-e6628",
    storageBucket: "anayltics-test-e6628.appspot.com",
    messagingSenderId: "312588800976",
    appId: "1:312588800976:web:901d931bf0aa1284699fd5",
    measurementId: "G-7Q8D2X7WK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);