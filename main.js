// Autenticación en la página de configuración
document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'admin' && password === 'password') {
    alert('Autenticación exitosa');
  } else {
    alert('Usuario o contraseña incorrectos');
  }
});
