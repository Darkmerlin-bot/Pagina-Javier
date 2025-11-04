const botonMostrar = document.getElementById('mostrar-tarjeta');
const botonCerrar = document.getElementById('cerrar-tarjeta');
const miTarjeta = document.getElementById('mi-tarjeta');

// Mostrar tarjeta
botonMostrar.addEventListener('click', () => {
    miTarjeta.classList.add('visible');
});

// Cerrar tarjeta
botonCerrar.addEventListener('click', () => {
    miTarjeta.classList.remove('visible');
});