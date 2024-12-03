import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDf09j92TxuZ51VXU_DHZzaveX2wU70W9U",
  authDomain: "comision-65640.firebaseapp.com",
  projectId: "comision-65640",
  storageBucket: "comision-65640.firebasestorage.app",
  messagingSenderId: "484373698881",
  appId: "1:484373698881:web:41f741c331334930df69c0",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
