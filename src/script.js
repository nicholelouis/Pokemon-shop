// src/script.js
import { AuthController } from './controllers/AuthController.js';

document.addEventListener('DOMContentLoaded', () => {
  const authController = new AuthController();

  // Login Form
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('loginUsername').value;
      const password = document.getElementById('loginPassword').value;
      await authController.login(email, password);
    });
  }

  // Register Form
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('registerPassword').value;
      const userData = {
        username: document.getElementById('registerUsername').value,
        name: document.getElementById('name').value,
        fullName: document.getElementById('fullName').value,
        age: document.getElementById('age').value,
        city: document.getElementById('city').value
      };
      await authController.register(email, password, userData);
    });
  }
});