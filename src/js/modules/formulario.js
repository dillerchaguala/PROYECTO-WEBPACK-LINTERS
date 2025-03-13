export default function formulario() {
  const form = document.getElementById('contactForm');
  const mensajeResultado = document.getElementById('mensajeResultado');

  if (!form) return; // Evita errores si el formulario no está en la página

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre && email && mensaje) {
      mensajeResultado.textContent = '¡Formulario enviado con éxito!';
      mensajeResultado.style.color = 'green';
      form.reset();
    } else {
      mensajeResultado.textContent = 'Por favor, complete todos los campos.';
      mensajeResultado.style.color = 'red';
    }
  });
}
