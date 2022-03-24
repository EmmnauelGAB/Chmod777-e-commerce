//** se valida cada uno de los campos y se anexo expreciones regulares */
function validationForm(name, lastName, state, telephone, email, message) {
    let nameValue = name.value;
    let lastValue = lastName.value;
    let stateValue = state.value;
    let phoneValue = telephone.value;
    let emailValue = email.value;
    let messageValue = message.value;


    // Validar Nombre
    let text = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    let textName;
    if (nameValue === "" || !text.test(nameValue)) {
        textName = `<div class="alert alert-danger" role="alert">¡Nombre inválido! </div>`;
    } else if (nameValue.length <= 3) {
        textName = `<div class="alert alert-danger" role="alert">¡Nombre menor a 4 caracteres!</div>`;
        condition = false;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Nombre válido!</div>`;

    }
    document.getElementById("nameDemo").innerHTML = textName;
    // Validar Apellido
    if (lastValue === "" || !text.test(lastValue)) {
        textName = `<div class="alert alert-danger" role="alert">¡Apellido inválido! </div>`;
    } else if (nameValue.length <= 3) {
        textName = `<div class="alert alert-danger" role="alert">¡Apellido menor a 4 caracteres!</div>`;
        condition = false;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Apellido válido!</div>`;
    }
    document.getElementById("lastNameDemo").innerHTML = textName;
    // Validar Estado
    if (stateValue === "") {
        textName = `<div class="alert alert-danger" role="alert">¡Estado no seleccionado! </div>`;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Estado válido!</div>`;
    }
    document.getElementById("stdDemo").innerHTML = textName;
    // Validar Telefono
    let num = /[^+\d]/g;
    if (phoneValue === "" || num.test(phoneValue)) {
        textName = `<div class="alert alert-danger" role="alert">¡Telefóno inválido!</div>`;
        condition = false;
    } else if (phoneValue.length <= 9) {
        textName = `<div class="alert alert-danger" role="alert">¡Telefóno menor a 10 dígitos!</div>`;
        condition = false;
    } else if (phoneValue.length >= 11) {
        textName = `<div class="alert alert-danger" role="alert">¡Telefóno mayor a 10 dígitos!</div>`;
        condition = false;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Teléfono válido!</div>`;
    }
    document.getElementById("telephoneDemo").innerHTML = textName;
    
    // Validar Correo
    let emailVal = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (emailValue === "" || !emailVal.test(emailValue)) {
        textName = `<div class="alert alert-danger" role="alert">¡Correo inválido! </div>`;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Correo válido!</div>`;
    }
    document.getElementById("emailDemo").innerHTML = textName;

    // Validar Message
    let msg = /^[a-zA-ZÀ-ÿ\s]{1,1000}$/;
    if (messageValue === "" || !msg.test(messageValue)) {
        textName = `<div class="alert alert-danger" role="alert">¡Mensaje inválido! </div>`;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Mensaje válido!</div>`;
    }
    document.getElementById("menssageDemo").innerHTML = textName;
}
//** Se declara la const del form */
const formAddProduct = document.getElementById("sendinfo");
//** Hacemos una funcion que escucha al boton enviar mediante el evente */
formAddProduct.addEventListener("submit", (event) => {
    let lastName = document.getElementById("lastName");
    let name = document.getElementById("name");
    let state = document.getElementById("std");
    let phone = document.getElementById("telephone");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    event.preventDefault();
    validationForm(name, lastName, state, phone, email, message);
})