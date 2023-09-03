import { initializeApp } from "firebase/app";
import {getAuth }from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD9XBalf4AyuHErFUdUqHkYDqjS3yBGGT0",
  authDomain: "multimart-a9e60.firebaseapp.com",
  projectId: "multimart-a9e60",
  storageBucket: "multimart-a9e60.appspot.com",
  messagingSenderId: "326745628004",
  appId: "1:326745628004:web:5bd51495bf4d8879ca2e71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;