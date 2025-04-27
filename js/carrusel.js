(() => {
    document.addEventListener('DOMContentLoaded', function() {
        const botones = document.querySelectorAll('.main__exposiciones-esfera');
        const contenedorRecorrer = document.querySelector('.main__exposiciones-recorrer');
        const imagenes = document.querySelectorAll('.main__exposiciones-item');
        let indiceActual = 0;

        // Función para desplazar el contenedor
        function desplazarContenedor(indice) {
            const anchoItem = imagenes[0].offsetWidth;
            const espacioEntreItems = 0.5;
            const desplazamiento = indice * (anchoItem + espacioEntreItems);
            
            contenedorRecorrer.scrollTo({
                left: desplazamiento,
                behavior: 'smooth'
            });
        }

        // Inicializar mostrando las primeras dos imágenes
        desplazarContenedor(0);

        // Agregar eventos a los botones
        botones.forEach((boton, indice) => {
            boton.addEventListener('click', () => {
                if (indice === 0) {
                    // Primer botón: retrocede
                    indiceActual = Math.max(0, indiceActual - 1);
                } else {
                    // Segundo botón: avanza
                    indiceActual = Math.min(imagenes.length - 1, indiceActual + 1);
                }
                desplazarContenedor(indiceActual);
            });
        });
    }); 
})();