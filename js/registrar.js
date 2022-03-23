//**Inicialización de Local Storage */
let newUsuario = [{
    "_id": 0,
    "nombre": "Emmanuel",
    "apellido": "García",
    "telefono": "5519845653",
    "estado": "CDMX",
    "correo": "emma@gmail.com",
    "contraseña": "emmaylalo_<3",
}];

let recoverDatar = localStorage.getItem("usuarios")
if (recoverDatar == null) {
    let jsonUsuarios = JSON.stringify(newUsuario);
    localStorage.setItem("usuarios", jsonUsuarios);
} else {

}

//**valida cada uno de los campos del form */
function usuariosAdd(nombre, apellido, telefono, estado, correo, contraseña, confirmacion) {
    let nombreValor = nombre.value;
    let apellidoValor = apellido.value;
    let telefonoValor = telefono.value;
    let estadoValor = estado.value;
    let correoValor = correo.value;
    let pass1Valor = contraseña.value;
    let pass2Valor = confirmacion.value;

    // valida nombre

    let text = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    let textName;
    let condicion = true;
    if (nombreValor === "" || !text.test(nombreValor)) {
        textName = `<div class="alert alert-danger" role="alert">¡Nombre inválido!</div>`;
        condicion = false;
    } else if (nombreValor.length <= 3) {
        textName = `<div class="alert alert-danger" role="alert">¡Nombre menor a 4 caracteres!</div>`;
        condicion = false;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Nombre válido!</div>`;
    }
    document.getElementById("nombreDemo").innerHTML = textName;

    // valida apellido

    if (apellidoValor === "" || !text.test(apellidoValor)) {
        textName = `<div class="alert alert-danger" role="alert">¡Apellido inválido!</div>`;
        condicion = false;
    }else if (nombreValor.length <= 3) {
        textName = `<div class="alert alert-danger" role="alert">¡Apellido menor a 4 caracteres!</div>`;
        condicion = false;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Apellido inválido!</div>`;
    }
    document.getElementById("apellidoDemo").innerHTML = textName;

    // Validar Telefono
    let num = /[^+\d]/g;
    if (telefonoValor === "" || num.test(telefonoValor)) {
        textName = `<div class="alert alert-danger" role="alert">¡Telefóno inválido!</div>`;
        condicion = false;
    } else if (telefonoValor.length <= 9) {
        textName = `<div class="alert alert-danger" role="alert">¡Telefóno menor a 10 dígitos!</div>`;
        condicion = false;
    } else if (telefonoValor.length >= 11) {
        textName = `<div class="alert alert-danger" role="alert">¡Telefóno mayor a 10 dígitos!</div>`;
        condicion = false;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Teléfono válido!</div>`;
    }
    document.getElementById("telefonoDemo").innerHTML = textName;

    // Validar Estado
    if (estadoValor === null || estadoValor == 0) {
        textName = `<div class="alert alert-danger" role="alert">¡Estado no seleccionado!</div>`;
        condicion = false;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Estado válido!</div>`;
    }
    document.getElementById("estadoDemo").innerHTML = textName;

    // Validar Correo
    let email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (correoValor === "" || !email.test(correoValor)) {
        textName = `<div class="alert alert-danger" role="alert">¡Correo inválido!</div>`;
        condicion = false;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Correo válido!</div>`;
    }
    document.getElementById("correoDemo").innerHTML = textName;

    // Validar Contraseña

    //No haya espacios en blanco
    let espacios = false;
    let cont = 0;
    while (!espacios && (cont < pass1Valor.length)) {
        if (pass1Valor.charAt(cont) == " ")
            espacios = true;
        cont++;
        textName = `<div class="alert alert-success" role="alert">¡Contraseña válida!</div>`;
    }
    document.getElementById("contraseñaDemo").innerHTML = textName;

    if (espacios) {
        textName = `<div class="alert alert-danger" role="alert">¡No pueden existir campos vacíos!</div>`;
        condicion = false;
    }

    //Que no haya dejado campos vacios
    if (pass1Valor.length == 0 || pass2Valor.length == 0) {
        textName = `<div class="alert alert-danger" role="alert">¡No pueden existir campos vacíos!</div>`;
        condicion = false;
    }
    document.getElementById("contraseñaDemo").innerHTML = textName;
    document.getElementById("confirmacionDemo").innerHTML = textName;


    //Que ambas contraseñas coincidan
    if (pass1Valor != pass2Valor) {
        textName = `<div class="alert alert-danger" role="alert">¡Las contraseñas no coinciden!</div>`;
        condicion = false;
    } else if (pass1Valor === pass2Valor && pass2Valor.length != 0 && pass2Valor.charAt(cont) == " ") {
        textName = `<div class="alert alert-success" role="alert">¡Todo correcto!</div>`;
    }
    document.getElementById("confirmacionDemo").innerHTML = textName;

    //Validar longitud de contraseña
    if (pass1Valor.length <= 8) {
        textName = `<div class="alert alert-danger" role="alert">¡La contraseña debe ser mayor de 8 carácteres!</div>`;
        condicion = false;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Todo correcto!</div>`;
    }
    document.getElementById("contraseñaDemo").innerHTML = textName;
    document.getElementById("confirmacionDemo").innerHTML = textName;



    /* Agregar a Local Storage */
    if (condicion === true) {
        let nuevoUsuario = {
            "_id": arrayUsuarios.length,
            "nombre": nombre.value,
            "apellido": apellido.value,
            "telefono": telefono.value,
            "estado": estado.value,
            "correo": correo.value,
            "contraseña": contraseña.value,
        };
        arrayUsuarios.push(nuevoUsuario);
        let jsonUsuarios = JSON.stringify(arrayUsuarios);
        localStorage.setItem("usuarios", jsonUsuarios);
        nombre.value = "";
        apellido.value = "";
        telefono.value = "";
        estado.value = "";
        correo.value = "";
        contraseña.value = "";
        Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: '¡Usuario registrado!',
            footer: '<a href="../index.html">Volver al inicio</a>'
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: '¡Falló!',
            text: '¡Reintenta de nuevo!',
        })
    }
}

let usuariosStorage = localStorage.getItem("usuarios");
let arrayUsuarios = JSON.parse(usuariosStorage);
console.log(arrayUsuarios);

let formAddUsuario = document.getElementById("form-registro");

formAddUsuario.addEventListener("submit", function (evento) {
    let nombre = document.getElementById("nombreR");
    let apellido = document.getElementById("apellidoR");
    let telefono = document.getElementById("telefonoR");
    let estado = document.getElementById("estadoR");
    let correo = document.getElementById("emailR");
    let contraseña = document.getElementById("passR");
    let confirmacion = document.getElementById("passR2")
    evento.preventDefault();
    usuariosAdd(nombre, apellido, telefono, estado, correo, contraseña, confirmacion);
});