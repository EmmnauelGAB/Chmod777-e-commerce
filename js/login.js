//Declaciones de elementos del modal 
//Modal
const titleModal = `Ingresar`;
const imgModal = `../img/user_2.png`;
//Creacion de plantilla 
let login = `
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${titleModal}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form class="formsLogin">
          <div class="form-group">
            <div class="container_user_img">
              <img class="user_img" src="${imgModal}">
            </div>
            <hr>
            <label for="userRigister">Correo</label>
            <input type="email" class="form-control" id="userRigister" aria-describedby="emailHelp"
              placeholder="Ingrese su correo" >
            <div id="userDemo"></div>
          <div class="form-group">
            <label for="userPassword">Contraseña</label>
            <input type="password" class="form-control" id="userPassword"
              placeholder="Ingrese su contraseña" >
              <div id="passwordDemo"></div>
            <div>
          </div>
          <hr>
          <a href="/page/registrar.html">¿Aún no tienes cuenta?</a>
          <hr>
          <button type="submit" class="btn btn-primary">Ingresar</button>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>`
    //Muestra el modal en pantalla
modalLogin.innerHTML = login;

let userList = [{
    "_id": 0,
    "user": "admin@gmail.com",
    "password": "admin@123",
}];

let recoverDatar = localStorage.getItem("usersL")
if (recoverDatar == null) {
    let jsonUsuarios = JSON.stringify(userList);
    localStorage.setItem("usersL", jsonUsuarios);
}

//** Validacion de usuario */
function userValid(user, password) {
    let userValue = user.value;
    let passwordValue = password.value;

    //** Validar usuario nuevo */
    let textName;
    let condition = true;
    let emailVal = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (userValue === "" || !emailVal.test(userValue)) {
        textName = `<div class="alert alert-danger" role="alert">¡Usuario inválido!</div>`;
        condition = false;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Usuario válido!</div>`;
    }
    document.getElementById("userDemo").innerHTML = textName;
    //No haya espacios en blanco
    let spaces = false;
    let cont = 0;
    while (!spaces && (cont < passwordValue.length)) {
        if (passwordValue.charAt(cont) == " ")
            spaces = true;
        cont++;
        textName = `<div class="alert alert-success" role="alert">¡Contraseña válida!</div>`;
    }
    document.getElementById("passwordDemo").innerHTML = textName;

    if (spaces) {
        textName = `<div class="alert alert-danger" role="alert">¡No pueden existir campos vacíos!</div>`;
        condition = false;
    }

    //Que no haya dejado campos vacios
    if (passwordValue.length == 0) {
        textName = `<div class="alert alert-danger" role="alert">¡No pueden existir campos vacíos!</div>`;
        condition = false;
    }
    document.getElementById("passwordDemo").innerHTML = textName;
    //Validar longitud de contraseña
    if (passwordValue.length <= 8) {
        textName = `<div class="alert alert-danger" role="alert">¡La contraseña debe ser mayor de 8 carácteres!</div>`;
        condition = false;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Todo correcto!</div>`;
    }
    document.getElementById("passwordDemo").innerHTML = textName;

    /* Agregar a Local Storage */
    if (condition === true) {
        let userList = {
            "_id": arrayUsersLogin.length,
            "user": user.value,
            "password": password.value,
        };
        arrayUsersLogin.push(userList);
        let jsonLogin = JSON.stringify(arrayUsersLogin);
        localStorage.setItem("usersL", jsonLogin);
        user.value = "";
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
let usersStorage = localStorage.getItem("usersL");
let arrayUsersLogin = JSON.parse(usersStorage);
let formLoginUsers = document.getElementById("exampleModal");
formLoginUsers.addEventListener("submit", function(evento) {
    let user = document.getElementById("userRigister");
    let password = document.getElementById("userPassword");
    evento.preventDefault();
    userValid(user, password);
})