  const lightbox = document.getElementById('lightbox');
  const imagenAmpliada = lightbox.querySelector('.imagen-ampliada');
  const cerrar = lightbox.querySelector('.cerrar');

  let nombre = prompt("Cuál es tu edad?");

  alert("Hola " + (parseInt(nombre) + 2))

  document.querySelectorAll('.galeria .imagen img').forEach(imagen => {
    imagen.addEventListener('click', () => {
      imagenAmpliada.src = imagen.src;
      lightbox.style.display = 'flex';
    });
  });

  cerrar.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
