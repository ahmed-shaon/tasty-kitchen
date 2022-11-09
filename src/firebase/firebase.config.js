// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo83joRHR8Jq6SACnA-ixsO5yyxEpsA88",
  authDomain: "khub-tast.firebaseapp.com",
  projectId: "khub-tast",
  storageBucket: "khub-tast.appspot.com",
  messagingSenderId: "440788321617",
  appId: "1:440788321617:web:5c63ac92712412a50fbf70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;