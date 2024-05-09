// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASDEUa6pJMfb6HaFAwZ-ry-Dmzf0qLjQo",
  authDomain: "treasurecart-7541f.firebaseapp.com",
  projectId: "treasurecart-7541f",
  storageBucket: "treasurecart-7541f.appspot.com",
  messagingSenderId: "808172942640",
  appId: "1:808172942640:web:29b541f04e02a2b11604f5",
  measurementId: "G-3GJJLTZYKP"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;