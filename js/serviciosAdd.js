

let servicios =[
 {
    "_id": 1,
    "titulo": "Terapia individual",
    "tipo": "Terapia",
    "descripcion": "Cuando te encuentras en una situacion difícil de sobrellevar, no es facil pedir ayuda, pero cuando te encuentras un espacio para ti en terapia, se vuelve un momento para crecer y descubrirte desde la profundidad. Desde ahí, trabajaremos juntos.",
    "imagen": "terapia-individual.png"
}
];

let jsonServicios = JSON.stringify(servicios);
localStorage.setItem("servicios",jsonServicios);

//**valida cada uno de los campos del form */

function serviciosAdd(titulo, tipo, description, imagen) {
    let tituloValor = titulo.value;
    let tipoValor = tipo.value;
    let descriptionValor = description.value;
    let imagenValor = imagen.value;

    // valida titulo

    let text = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    let textName;
    let condicion = true;
    if (tituloValor === "" || tituloValor.length <= 10 || !text.test(tituloValor)) {
        textName = `<div class="alert alert-danger" role="alert">¡Título inválido! </div>`;
        condicion = false;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Título válido!</div>`;  
    }
    document.getElementById("serviceDemo").innerHTML = textName;

    // valida tipo

    if (tipoValor === "") {
        textName = `<div class="alert alert-danger" role="alert">¡Elige un tipo de servicio! </div>`;
        condicion = false;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Tipo de servicio válido!</div>`;
    }
    document.getElementById("tipoDemo").innerHTML = textName;

    // valida Descripcion
    if (descriptionValor === "" || descriptionValor.length <= 20 || /^\s+$/.test(description)) {
        textName = `<div class="alert alert-danger" role="alert">¡Ingresa una descripción! </div>`;
        condicion = false;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Descripción válida!</div>`;
    }
    document.getElementById("descriptionDemo").innerHTML = textName;

    // valida imagen
    if (imagenValor === "") {
        textName = `<div class="alert alert-danger" role="alert">¡Agrega una imagen! </div>`;
        condicion = false;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Imagen válida!</div>`;
    }

    document.getElementById("imagenDemo").innerHTML = textName;

    if (condicion = true) {
        let nuevoServicio = {
            "_id": arrayServicios.length + 1,
            "titulo": titulo.value,
            "tipo": tipo.value,
            "descripcion": description.value,
            "imagen": imagen.value
        };
        arrayServicios.push(nuevoServicio);
        let jsonServicios = JSON.stringify(arrayServicios);
        localStorage.setItem("servicios", jsonServicios);
        titulo.value = "";
        tipo.value = "";
        description.value = "";
        imagen.value = "";
        Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: '¡Se agregó el servicio!',
        })
    }else{
        Swal.fire({
            icon: 'error',
            title: '¡Falló!',
            text: '¡No se agregó el servicio!',
        })
    }
}

let serviciosStorage = localStorage.getItem("servicios");
let arrayServicios = JSON.parse(serviciosStorage);
console.log(arrayServicios);

//(Borra todo lo de Local Storage)
//window.localStorage.removeItem("servicios")   

let formAddServicio = document.getElementById("form-servicio");

formAddServicio.addEventListener("submit", function (evento) {
    let titulo = document.getElementById("newService");
    let tipo = document.getElementById("servicioTipo");
    let description = document.getElementById("description");
    let imagen = document.getElementById("validatedCustomFile");
    evento.preventDefault();
    serviciosAdd(titulo, tipo, description, imagen);
});

