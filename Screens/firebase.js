// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGryGxGfZBeuX1N-Xux4rSi8kpM1rN_3A",
  authDomain: "giftify-fbbc6.firebaseapp.com",
  projectId: "giftify-fbbc6",
  storageBucket: "giftify-fbbc6.appspot.com",
  messagingSenderId: "796916225879",
  appId: "1:796916225879:web:d4ab6de48b6a3eb8a91012"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



//done by me
const auth = getAuth(app);

export { app , auth };