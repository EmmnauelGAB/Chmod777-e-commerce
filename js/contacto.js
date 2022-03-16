//** se valida cada uno de los campos y se anexo expreciones regulares */
function validacionForm(nombre, apellido, estado, telephone, correo, mensaje) {
    let nombreValor = nombre.value;
    let apellidoValor = apellido.value;
    let estadoValor = estado.value;
    let telefonoValor = telephone.value;
    let correoValor = correo.value;
    let mensajeValor = mensaje.value;


  
    // Validar Nombre
    var text = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    if (nombreValor === "" || nombreValor.length <= 3 || !text.test(nombreValor)) {
        nombre.classList.add("is-invalid");
    } else {
        nombre.classList.add("is-valid");
    // Validar Apellido
    if (apellidoValor === "" || apellidoValor.length <= 2 || !text.test(apellidoValor)) {
        apellido.classList.add("is-invalid");
    } else {
        apellido.classList.add("is-valid");
    }
    // Validar Estado
    if (estadoValor === "" || estadoValor.length <= 3 || !text.test(estadoValor)) {
        estado.classList.add("is-invalid");
    } else {
        estado.classList.add("is-valid");
    }
    // Validar Telefono
    var num = /[^+\d]/g;
    if (telefonoValor === "" || num.test(telefonoValor)) {
        telephone.classList.add("is-invalid");
    } else {
        telephone.classList.add("is-valid");
    }
    // Validar Correo
    var email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (correoValor === "" || !email.test(correoValor)) {
        correo.classList.add("is-invalid");
    } else {
        correo.classList.add("is-valid");
    }
    // Validar Mensaje
    var msg = /^[a-zA-ZÀ-ÿ\s]{1,1000}$/;
    if (mensajeValor === "" || !msg.test(mensajeValor)) {
        mensaje.classList.add("is-invalid");
    } else {
        mensaje.classList.add("is-valid");
    }
    do{

    }while(nombre === true && mensaje === true )
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