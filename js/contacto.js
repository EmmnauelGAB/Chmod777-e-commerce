//** se valida cada uno de los campos y se anexo expreciones regulares */
function validacionForm(nombre, apellido, estado, telephone, correo, mensaje) {
    let nombreValor = nombre.value;
    let apellidoValor = apellido.value;
    let estadoValor = estado.value;
    let telefonoValor = telephone.value;
    let correoValor = correo.value;
    let mensajeValor = mensaje.value;



    // Validar Nombre
    let text = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    let textName;
    if (nombreValor === "" || nombreValor.length <= 3 || !text.test(nombreValor)) {
        textName = `<div class="alert alert-danger" role="alert">¡Nombre inválido! </div>`;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Nombre válido!</div>`;

    }
    document.getElementById("nameDemo").innerHTML = textName;
    // Validar Apellido
    if (apellidoValor === "" || apellidoValor.length <= 2 || !text.test(apellidoValor)) {
        textName = `<div class="alert alert-danger" role="alert">¡Apellido inválido! </div>`;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Apellido válido!</div>`;
    }
    document.getElementById("lastNameDemo").innerHTML = textName;
    // Validar Estado
    if (estadoValor === "") {
        textName = `<div class="alert alert-danger" role="alert">¡Estado inválido! </div>`;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Estado válido!</div>`;
    }
    document.getElementById("stdDemo").innerHTML = textName;
    // Validar Telefono
    let num = /[^+\d]/g;
    if (telefonoValor === "" || num.test(telefonoValor)) {
        textName = `<div class="alert alert-danger" role="alert">¡Telefono inválido! </div>`;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Telefono válido!</div>`;
    }
    document.getElementById("telephoneDemo").innerHTML = textName;
    // Validar Correo
    let email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (correoValor === "" || !email.test(correoValor)) {
        textName = `<div class="alert alert-danger" role="alert">¡Correo inválido! </div>`;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Correo válido!</div>`;
    }
    document.getElementById("emailDemo").innerHTML = textName;
    // Validar Email
    let msg = /^[a-zA-ZÀ-ÿ\s]{1,1000}$/;
    if (mensajeValor === "" || !msg.test(mensajeValor)) {
        textName = `<div class="alert alert-danger" role="alert">¡Mensaje inválido! </div>`;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Mensaje válido!</div>`;
    }
    document.getElementById("mensajeDemo").innerHTML = textName;
}
//** Se declara la const del form */
const formAddProduct = document.getElementById("sendinfo");
//** Hacemos una funcion que escucha al boton enviar mediante el evente */
formAddProduct.addEventListener("submit", (evento) => {
    let apellido = document.getElementById("lastName");
    let nombre = document.getElementById("name");
    let estado = document.getElementById("std");
    let telefono = document.getElementById("telephone");
    let correo = document.getElementById("email");
    let mensaje = document.getElementById("mensaje");
    evento.preventDefault();
    validacionForm(nombre, apellido, estado, telefono, correo, mensaje);
})