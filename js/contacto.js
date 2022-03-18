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
        textName = `<div class="is-invalid">Nombre Inválido!! 😲</div>`;
    } else {
        textName = `<div class="is-valid">Nombre Válido!! 😎</div>`;

    }
    document.getElementById("nameDemo").innerHTML = textName;
    // Validar Apellido
    if (apellidoValor === "" || apellidoValor.length <= 2 || !text.test(apellidoValor)) {
        textName = `<div class="is-invalid">Apellido Inválido!! 😲</div>`;
    } else {
        textName = `<div class="is-valid">Apellido Válido!! 😎</div>`;
    }
    document.getElementById("lastNameDemo").innerHTML = textName;
    // Validar Estado
    if (estadoValor === "") {
        textName = `<div class="is-invalid">Estado Inválido!! 😲</div>`;
    } else {
        textName = `<div class="is-valid">Estado Válido!! 😎</div>`;
    }
    document.getElementById("stdDemo").innerHTML = textName;
    // Validar Telefono
    let num = /[^+\d]/g;
    if (telefonoValor === "" || num.test(telefonoValor)) {
        textName = `<div class="is-invalid">Teléfono Inválido!! 😲</div>`;
    } else {
        textName = `<div class="is-valid">Teléfono Válido!! 😎</div>`;
    }
    document.getElementById("telephoneDemo").innerHTML = textName;
    // Validar Correo
    let email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (correoValor === "" || !email.test(correoValor)) {
        textName = `<div class="is-invalid">Email Inválido!! 😲</div>`;
    } else {
        textName = `<div class="is-valid">Email Válido!! 😎</div>`;
    }
    document.getElementById("emailDemo").innerHTML = textName;
    // Validar Email
    let msg = /^[a-zA-ZÀ-ÿ\s]{1,1000}$/;
    if (mensajeValor === "" || !msg.test(mensajeValor)) {
        textName = `<div class="is-invalid">InválidoMensaje Inválido!! 😲</div>`;
    } else {
        textName = `<div class="is-valid">Mensaje Válido!! 😎</div>`;
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