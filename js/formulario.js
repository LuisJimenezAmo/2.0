(() => {
    document.getElementById('formulario').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener los valores del formulario
        const nombre = document.getElementById('name').value;
        const apellidos = document.getElementById('surname').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const fecha = document.getElementById('fecha').value;

        // Validar que todos los campos estén completos
        if (nombre && apellidos && email && telefono && fecha) {
            // Mostrar la tarjeta de confirmación
            const confirmacion = document.getElementById('confirmacionTarjeta');
            confirmacion.classList.add('visible');
            
            // Limpiar el formulario
            this.reset();
        } else {
            alert('Por favor, complete todos los campos del formulario');
        }
    }); 
})();