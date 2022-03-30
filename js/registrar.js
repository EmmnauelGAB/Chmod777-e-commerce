//**Inicialización de Local Storage */
let newUser = [{
    "_id": 0,
    "name": "Emmanuel",
    "lastname": "García",
    "phone": "5519845653",
    "state": "CDMX",
    "email": "emma@gmail.com",
    "password": "emmanuel$",
}];

let recoverDatar = localStorage.getItem("users")
if (recoverDatar == null) {
    let jsonUsuarios = JSON.stringify(newUser);
    localStorage.setItem("users", jsonUsuarios);
} else {

}

//**valida cada uno de los campos del form */
function UserAdd(name, lastname, phone, state, email, password, passwordTwo) {
    let nameValue = name.value;
    let lastValue = lastname.value;
    let phoneValue = phone.value;
    let stateValue = state.value;
    let emailValue = email.value;
    let pass1Value = password.value;
    let pass2Value = passwordTwo.value;

    // valida nombre

    let text = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    let textName;
    let condition = true;
    if (nameValue === "" || !text.test(nameValue)) {
        textName = `<div class="alert alert-danger" role="alert">¡Nombre inválido!</div>`;
        condition = false;
    } else if (nameValue.length <= 3) {
        textName = `<div class="alert alert-danger" role="alert">¡Nombre menor a 4 caracteres!</div>`;
        condition = false;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Nombre válido!</div>`;
    }
    document.getElementById("nombreDemo").innerHTML = textName;

    // valida apellido

    if (lastValue === "" || !text.test(lastValue)) {
        textName = `<div class="alert alert-danger" role="alert">¡Apellido inválido!</div>`;
        condition = false;
    }else if (nameValue.length <= 3) {
        textName = `<div class="alert alert-danger" role="alert">¡Apellido menor a 4 caracteres!</div>`;
        condition = false;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Apellido válido!</div>`;
    }
    document.getElementById("apellidoDemo").innerHTML = textName;

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
    document.getElementById("telefonoDemo").innerHTML = textName;

    // Validar Estado
    if (stateValue === null || stateValue == 0) {
        textName = `<div class="alert alert-danger" role="alert">¡Estado no seleccionado!</div>`;
        condition = false;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Estado válido!</div>`;
    }
    document.getElementById("estadoDemo").innerHTML = textName;

    // Validar Correo
    let emailVal = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (emailValue === "" || !emailVal.test(emailValue)) {
        textName = `<div class="alert alert-danger" role="alert">¡Correo inválido!</div>`;
        condition = false;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Correo válido!</div>`;
    }
    document.getElementById("correoDemo").innerHTML = textName;

    // Validar Contraseña

    //No haya espacios en blanco
    let spaces = false;
    let cont = 0;
    while (!spaces && (cont < pass1Value.length)) {
        if (pass1Value.charAt(cont) == " ")
            spaces = true;
        cont++;
        textName = `<div class="alert alert-success" role="alert">¡Contraseña válida!</div>`;
    }
    document.getElementById("contraseñaDemo").innerHTML = textName;

    if (spaces) {
        textName = `<div class="alert alert-danger" role="alert">¡No pueden existir campos vacíos!</div>`;
        condition = false;
    }

    //Que no haya dejado campos vacios
    if (pass1Value.length == 0 || pass2Value.length == 0) {
        textName = `<div class="alert alert-danger" role="alert">¡No pueden existir campos vacíos!</div>`;
        condition = false;
    }
    document.getElementById("contraseñaDemo").innerHTML = textName;
    document.getElementById("confirmacionDemo").innerHTML = textName;

    //Validar longitud de contraseña
    if (pass1Value.length <= 8) {
        textName = `<div class="alert alert-danger" role="alert">¡La contraseña debe ser mayor de 8 carácteres!</div>`;
        condition = false;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Todo correcto!</div>`;
    }
    document.getElementById("contraseñaDemo").innerHTML = textName;
    document.getElementById("confirmacionDemo").innerHTML = textName;

    //Que ambas contraseñas coincidan
    if (pass1Value != pass2Value) {
        textName = `<div class="alert alert-danger" role="alert">¡Las contraseñas no coinciden!</div>`;
        condition = false;
    } else if (pass1Value === pass2Value && pass2Value.length != 0 && pass2Value.charAt(cont) == " ") {
        textName = `<div class="alert alert-success" role="alert">¡Todo correcto!</div>`;
    }
    document.getElementById("contraseñaDemo").innerHTML = textName;
    document.getElementById("confirmacionDemo").innerHTML = textName;

    


    /* Agregar a Local Storage */
    if (condition === true) {
        let newUser = {
            "_id": arrayUsers.length,
            "name": name.value,
            "lastname": lastname.value,
            "phone": phone.value,
            "state": state.value,
            "email": email.value,
            "password": password.value,
        };
        arrayUsers.push(newUser);
        let jsonUsers = JSON.stringify(arrayUsers);
        localStorage.setItem("users", jsonUsers);
        name.value = "";
        lastname.value = "";
        phone.value = "";
        state.value = "";
        email.value = "";
        password.value = "";
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

let usersStorage = localStorage.getItem("users");
let arrayUsers = JSON.parse(usersStorage);

let formAddUsers = document.getElementById("form-registro");

formAddUsers.addEventListener("submit", (evento) => {
        let name = document.getElementById("nombreR");
        let lastname = document.getElementById("apellidoR");
        let phone = document.getElementById("telefonoR");
        let state = document.getElementById("estadoR");
        let email = document.getElementById("emailR");
        let password = document.getElementById("passR");
        let passwordTwo = document.getElementById("passR2");
        evento.preventDefault();
        UserAdd(name, lastname, phone, state, email, password, passwordTwo);
    });