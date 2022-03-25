//Declara los elementos del navbar
//logo
const log = `../img/logo.png`
//Enlaces
const inc = `Inicio`;
const inc1 = `../index.html`;
const nos = `Nosotros`;
const nos1 = `../page/nosotros.html`;
const ser = `Servicios`;
const ser1 = `../page/servicios.html`;
const age = `Agendar cita`;
const age1 = `../page/agendar.html`;
const ayu = `Ayuda`;
const ayu1 = `../page/ayuda.html`;
const chm = `Chmod 777`;
const chm1 = `../page/chmod.html`;
const adm = `Administrador`;
const adm1 = `../page/admin.html`;
//Botones INGRESAR REGISTRO
const ing = `INGRESAR`;
const reg1 = `../page/registrar.html`;
const reg = `REGISTRARSE`;
//Modal
const titleModal = `Ingresar`;
const imgModal = `../img/user_2.png`;

//Crear el navbar
let myNavbar = `<a class="navbar-brand" href="#" href="../index.html">
  <img src="${log}" alt="" width="40px">
</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto ulNavStyle">
    <li>
      <a class="btn btnNav rounded-pill" href="${inc1}">${inc}</a>
    </li>
    <li>
      <a class="btn btnNav rounded-pill" href="${nos1}">${nos}</a>
    </li>
    <li>
      <a class="btn btnNav rounded-pill" href="${ser1}">${ser}</a>
    </li>
    <li class="nav-item">
      <a class="btn btnNav rounded-pill" href="${age1}">${age}</a>
    </li>
    <li class="nav-item">
      <a class="btn btnNav rounded-pill" href="${ayu1}">${ayu}</a>
    </li>
    <li>
      <a class="btn btnNav rounded-pill" href="${chm1}">${chm}</a>
    </li>
    <li>
      <a class="btn btnNav rounded-pill" href="${adm1}">${adm}</a>
    </li>
  </ul>
  </ul>
  <form class="form-inline my-2 my-lg-0 affix ">
          <button type="button" class="btn btnUser  my-2 my-sm-0" data-toggle="modal" data-target="#exampleModal"
            style="border-radius: 16px 1px 1px 16px">
            ${ing}
          </button>
          <a type="button" class="btn btnUser  my-2 my-sm-0" style="border-radius: 1px 16px 16px 1px"
            href="${reg1}">
            ${reg}
          </a>
        </form>
      </div> 
      <!--modal login-->
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
              <form class="formsLogin" novalidate>
                <div class="form-group">
  
                  <div class="container_user_img">
                    <img class="user_img" src="${imgModal}">
                  </div>
                  <hr>
                  <label for="exampleInputEmail1">Correo</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Ingrese su correo" required>
                  <div class="invalid-feedback">
                    Por favor, introduce una dirección de correo electrónico válida
                  </div>
                  <small id="emailHelp" class="form-text text-muted">Nunca compartiremos su correo electrónico con nadie.
                  </small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Contraseña</label>
                  <input type="password" class="form-control" id="exampleInputPassword1"
                    placeholder="Ingrese su contraseña" required>
                  <div class="invalid-feedback">
                    Por favor ingrese una contraseña.
                  </div>
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
      </div>
  
      <!--fin modal login-->`


//Muestra el footer en pantalla
anclaNavbar.innerHTML = myNavbar;