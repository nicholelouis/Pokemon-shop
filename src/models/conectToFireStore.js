import { auth } from './firebase-config.js'; // Asegúrate de que la ruta sea correcta
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

// Función para registrar un nuevo usuario
async function registerUser (email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("Usuario registrado:", user);
    // Aquí puedes agregar lógica para guardar el usuario en Firestore
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    alert(error.message);
  }
}

async function loginUser (email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("Usuario logueado:", user);
    
    // Redirigir al usuario a la página principal
    window.location.href = 'pokedex.html'; // Cambia esto a la ruta de tu página principal
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    alert(error.message);
  }
}

// Validar el formulario de registro
function validateRegister() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("registerPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Validaciones básicas
  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden.");
    return false;
  }

  // Si las validaciones son correctas, registrar al usuario
  registerUser (email, password);
  return false; // Evitar el envío del formulario
}

// Validar el formulario de login
function validateLogin() {
  const email = document.getElementById("loginUsername").value; // Cambia esto si es necesario
  const password = document.getElementById("loginPassword").value;

  // Validaciones básicas
  if (!email || !password) {
    alert("Por favor, completa todos los campos.");
    return false;
  }

  // Si las validaciones son correctas, iniciar sesión
  loginUser (email, password);
  return false; // Evitar el envío del formulario
}

// Asignar las funciones de validación a los formularios
document.getElementById("registerForm").onsubmit = validateRegister;
document.getElementById("loginForm").onsubmit = validateLogin;