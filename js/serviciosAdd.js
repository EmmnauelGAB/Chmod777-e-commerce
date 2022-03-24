//**Inicialización de Local Storage */
let newService =[
    {
       "_id": 0,
       "title": "Terapia individual",
       "tipe": "Terapia",
       "description": "Cuando te encuentras en una situacion difícil de sobrellevar, no es facil pedir ayuda, pero cuando te encuentras un espacio para ti en terapia, se vuelve un momento para crecer y descubrirte desde la profundidad. Desde ahí, trabajaremos juntos.",
       "image": "terapia-individual.png"
   }
   ];

let recoverData = localStorage.getItem("services")
if(recoverData == null){
    let jsonServices = JSON.stringify(newService);
    localStorage.setItem("servicios",jsonServices);
}else{

}

//**valida cada uno de los campos del form */
function servicesAdd(title, tipe, description, image) {
    let titleValue = title.value;
    let tipeValue = tipe.value;
    let descriptionValue = description.value;
    let imageValue = image.value;

    // valida titulo
    let text = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    let textName;
    let condition = true;
    if (titleValue === "" || titleValue.length <= 10 || !text.test(titleValue)) {
        textName = `<div class="alert alert-danger" role="alert">¡Título inválido! </div>`;
        condition = false;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Título válido!</div>`;  
    }
    document.getElementById("serviceDemo").innerHTML = textName;

    // valida tipo
    if (tipeValue === "") {
        textName = `<div class="alert alert-danger" role="alert">¡Elige un tipo de servicio! </div>`;
        condition = false;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Tipo de servicio válido!</div>`;
    }
    document.getElementById("tipeDemo").innerHTML = textName;

    // valida Descripcion
    if (descriptionValue === "" || descriptionValue.length <= 20 || /^\s+$/.test(description)) {
        textName = `<div class="alert alert-danger" role="alert">¡Ingresa una descripción! </div>`;
        condition = false;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Descripción válida!</div>`;
    }
    document.getElementById("descriptionDemo").innerHTML = textName;

    // valida imagen
    if (imageValue === "") {
        textName = `<div class="alert alert-danger" role="alert">¡Agrega una imagen! </div>`;
        condition = false;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Imagen válida!</div>`;
    }
    document.getElementById("imageDemo").innerHTML = textName;

    

        if (condition === true) {
            let newService = {
                "_id": arrayServicios.length + 1,
                "title": title.value,
                "tipe": tipe.value,
                "description": description.value,
                "image": image.value
            };
            arrayService.push(newService);
            let jsonServices = JSON.stringify(arrayService);
            localStorage.setItem("services", jsonServices);
            
            Swal.fire({
                icon: 'success',
                title: '¡Éxito!',
                text: '¡Se agregó el servicio!',
                footer: '<a href="./servicios.html">Ir a servicios</a>'
            })
        }else{  
            Swal.fire({
                icon: 'error',
                title: '¡Falló!',
                text: '¡No se agregó el servicio!',
            })
        }
    }

let servicesStorage = localStorage.getItem("services");
arrayServices = JSON.parse(servicesStorage);
  

let formAddService = document.getElementById("form-service");

formAddService.addEventListener("submit", function (event) {
    let title = document.getElementById("newService");
    let tipe = document.getElementById("serviceTipe");
    let description = document.getElementById("description");
    let image = document.getElementById("validatedCustomFile");
    event.preventDefault();
    servicesAdd(title, tipe, description, image);
});

