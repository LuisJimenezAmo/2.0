(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const boton = document.querySelector('.header2__hamburguesa');
        const movil = document.querySelector('.header2__movil');
        const cerrar = document.querySelector('.header2__movil-cerrar');

        boton.addEventListener('click', () => {
            movil.classList.toggle('activo');
            document.body.style.overflow = 'hidden';
        });

        cerrar.addEventListener('click', () => {
            movil.classList.add('cerrando');
            document.body.style.overflow = '';

            setTimeout(() => {
                movil.classList.remove('activo', 'cerrando');
            }, 500);
        });
    });
})();