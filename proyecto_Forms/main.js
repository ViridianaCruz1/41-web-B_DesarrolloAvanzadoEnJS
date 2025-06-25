document.getElementById('registroEvento').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío automático del formulario

    // Variables
    // const nombre = document.getElementById('nombre').value;
    // const correo = document.getElementById('correo').value;
    // const telefono = document.getElementById('telefono').value;
    // const intereses = document.querySelectorAll('input[name="intereses"]:checked');
    // const horario = document.querySelector('input[name="horario"]:checked');
    // const fecha = document.getElementById('fecha').value;
    // const hora = document.getElementById('hora').value;
    // const archivo = document.getElementById('archivo').value;


    // Inputs del DOM (NO valores .value)
    const inputNombre = document.getElementById('nombre');
    const inputCorreo = document.getElementById('correo');
    const inputTelefono = document.getElementById('telefono');
    const inputArchivo = document.getElementById('archivo');

    // Validar usando nodos input
    const esNombreValido = validarCampo(inputNombre, validarNombre);
    const esCorreoValido = validarCampo(inputCorreo, validarEmail);
    const esTelefonoValido = validarCampo(inputTelefono, validarNumero);
    const esArchivoValido = inputArchivo.files.length === 0 || validarCampo(inputArchivo, validarDocumento);

    // Validar intereses y horario
    const intereses = document.querySelectorAll('input[name="intereses"]:checked');
    const horario = document.querySelector('input[name="horario"]:checked');


    // Validaciones básicas
    if (!nombre || !correo || !telefono || intereses.length === 0 || !horario) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }

    if (esNombreValido && esCorreoValido && esTelefonoValido && esArchivoValido) {
        alert('Registro exitoso. ¡Gracias por registrarte!');
    }
})


function validarCampo(input, funcionValidacion) {
    const errorSpan = input.nextElementSibling; //retorna el siguiente elemento hermano del input, que es el span de error
    const { valido, mensaje } = funcionValidacion(input.value)
    if (valido) {
        input.classList.remove('error');
        input.classList.add('success');
        errorSpan.textContent = ''; // Limpia el mensaje de error
    } else {
        input.classList.remove('success');
        input.classList.add('error');
        errorSpan.textContent = mensaje; // Muestra el mensaje de error
    }
    return valido; // Retorna true si el campo es válido, false si no lo es
}

function validarNombre (nombre) {
    return nombre.length === 0
        ? { valido: false, mensaje: 'El nombre es obligatorio' }
        : nombre.length < 3
            ? { valido: false, mensaje: 'El nombre debe tener al menos 3 caracteres' }
            : { valido: true };
} 

function validarEmail(email) {
  // Expresión regular para validar un correo básico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email)
        ? { valido: true, mensaje: "Correo electrónico válido" }
        : { valido: false, mensaje: "Formato de correo inválido" };
}

function validarNumero(numero){
    return !isNaN(numero) && numero.length === 10
        ? { valido: true, mensaje: "Número de teléfono válido" }
        : { valido: false, mensaje: "Número de teléfono inválido" }
}

    function validarDocumento(){
        return input.files.length > 0
        ? { valido: true, mensaje: "Archivo seleccionado" }
        : { valido: false, mensaje: "No se ha seleccionado ningún archivo"}
}
