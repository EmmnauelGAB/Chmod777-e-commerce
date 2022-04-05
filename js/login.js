//Declaciones de elementos del modal 
//Modal
const titleModal = `Ingresar`;
const imgModal = `../img/user_2.png`;
//Creacion de plantilla 
let login = `
<div class="modal fade" data-backdrop="static" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
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
            <label class="titleFormat" for="userRigister">Correo</label>
            <input type="text" class="form-control txtuser "  aria-describedby="emailHelp"
              placeholder="Ingrese su correo" >
            <div class="userDemo"></div>
          <div class="form-group">
          <br>
            <label class="titleFormat" for="userPassword">Contraseña</label>
            <input type="password" class="form-control txtpass" id="userPassword"
              placeholder="Ingrese su contraseña" >
              <div class="passwordDemo"></div>
            <div>
          </div>
          <hr>
          <a href="/page/registrar.html">¿Aún no tienes cuenta?</a>
          <hr>
          <div class="center">
            <label type="button" class="btn btnDef btnIn submit">Ingresar</label>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <p class="message pt-4 text-danger"></p>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>`
    //Muestra el modal en pantalla
modalLogin.innerHTML = login;
/**********Sesion Valida************ */
let txtuser = document.querySelector(".txtuser");
let txtpass = document.querySelector(".txtpass");
let submit = document.querySelector(".submit");

if (window.localStorage) {
    //Store value usingkey
    localStorage.setItem("user", "danika@gmail.com");
    localStorage.setItem("pass", "123@danika");

    let user = localStorage.getItem("user");
    let pass = localStorage.getItem("pass");

    let messageUser = document.querySelector(".userDemo");
    let messagePass = document.querySelector(".passwordDemo");
    submit.addEventListener("click", () => {
        if (user == txtuser.value && pass == txtpass.value) {
            messageUser.innerHTML = `<div class="alert alert-success" role="alert">¡Usuario válido!</div>`;
            messagePass.innerHTML = `<div class="alert alert-success" role="alert">¡Contraseña válido!</div>`;
            Swal.fire({
                icon: 'success',
                title: '¡Éxito!',
                text: '¡Usuario Correcto!',
            });
 
        } else {
            messageUser.innerHTML = `<div class="alert alert-danger" role="alert">¡Usuario Inválido!</div>`;
            messagePass.innerHTML = `<div class="alert alert-danger" role="alert">¡Contraseña Inválido!</div>`;
            
            Swal.fire({ // Se muestra una alerta que indica Fallo
                title: '¡Cuidado!',
                text: 'Usuario incorrecto',
                icon: 'error',              
            });
        }
    })

   
}