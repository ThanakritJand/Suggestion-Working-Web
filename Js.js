var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW7mwVOWWapvJsA6R0UYYZEIX8z2b0Y2k",
  authDomain: "suggest-work-types.firebaseapp.com",
  databaseURL: "https://suggest-work-types-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "suggest-work-types",
  storageBucket: "suggest-work-types.appspot.com",
  messagingSenderId: "835470349937",
  appId: "1:835470349937:web:b8085516602ab9c54cadd0",
  measurementId: "G-1T3LRXVELR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);