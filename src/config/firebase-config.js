import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA_cHOAXPKqudRMfwFBLx_gjZ5rVpVvVQA",
  authDomain: "compra-pokemon-f1b5c.firebaseapp.com",
  projectId: "compra-pokemon-f1b5c",
  storageBucket: "compra-pokemon-f1b5c.firebasestorage.app",
  messagingSenderId: "733220528382",
  appId: "1:733220528382:web:60dce67684d84dd49e45af"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);