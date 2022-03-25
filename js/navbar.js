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


//Crear el navbar
let myNavbar= `<a class="navbar-brand" href="#" href="../index.html">
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
      </div>`


//Muestra el footer en pantalla
anclaNavbar.innerHTML = myNavbar;