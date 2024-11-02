// src/controllers/AuthController.js
import { auth } from '../firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

export class AuthController {
  async login(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Login exitoso:", userCredential.user);
      window.location.href = 'pokedex.html';
    } catch (error) {
      console.error("Error en login:", error);
      alert(error.message);
    }
  }

  async register(email, password, userData) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Registro exitoso:", userCredential.user);
      // Aquí puedes agregar la lógica para guardar datos adicionales en Firestore
      return userCredential.user;
    } catch (error) {
      console.error("Error en registro:", error);
      alert(error.message);
    }
  }
}