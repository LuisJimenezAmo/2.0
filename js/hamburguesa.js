(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const boton = document.querySelector('.header2__hamburguesa');
        const movil = document.querySelector('.header2__movil');
        const cerrar = document.querySelector('.header2__movil-cerrar');

        // Cambiar clase a activo y bloquear scroll de página una vez aparezca el menú
        boton.addEventListener('click', () => {
            movil.classList.toggle('activo');
            document.body.style.overflow = 'hidden';
        });
        // Añadir clase cerrando y reestablecer scroll de página una vez se cierra el menú
        cerrar.addEventListener('click', () => {
            movil.classList.add('cerrando');
            document.body.style.overflow = '';ç
        // Esperar medio segundo antes de cerrar para ver animación
            setTimeout(() => {
                movil.classList.remove('activo', 'cerrando');
            }, 500);
        });
    });
})();