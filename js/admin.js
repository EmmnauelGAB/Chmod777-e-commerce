//Crear el elementos html nosotros
let myAdmin = `<div class="container">
<div class="row align-items-center h-100">
    <div class="col-12 col-sm-7 col-lg-7 mx-auto">
        <div class="">
            <h1 class="titt text-center titAdm">Agregar servicio</h1>
            <hr />
            <form id="form-service">
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                        <label class="titleFormat" for="newService">Nombre del servicio</label>
                        <input type="text" class="form-control" id="newService"
                            placeholder="Ingresa el nombre del servicio" />
                        <div id="serviceDemo"></div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label class="titleFormat" for="servicioTipo">Tipo de servicio</label>
                        <select id="serviceTipe" class="form-control">
                            <option selected></option>
                            <option>Taller</option>
                            <option>Terapia</option>
                        </select>
                        <div id="tipeDemo"></div>
                    </div>
                </div>

                <br />
                <div class="form-group">
                    <label class="titleFormat" for="description">Descripción del servicio</label>
                    <textarea class="form-control" id="description" rows="10"
                        placeholder="Ingresa la descripción del servicio"></textarea>
                    <div id="descriptionDemo"></div>
                </div>

                <div class="form-group">
                    <div class="custom-file mb-3">
                        <label class="titleFormat" for="validatedCustomFil">Ingresa imagen referente al
                            servicio:</label>
                        <br />
                        <input type="file" class="fileAdd" id="validatedCustomFile" id="imgServ" />

                        <div id="imageDemo"></div>
                    </div>
                </div>
                <button class="btn btn-addservices btnDef float-right" type="submit" value="add" onclick="agregar();">
                    Agregar Servicio
                </button>
            </form>
        </div>
    </div>
</div>
</div>`


//Muestra el footer en pantalla
anclaAdmin.innerHTML = myAdmin;


//**Inicialización de Local Storage */
let newService = [{
    "_id": 0,
    "title": "Terapia individual",
    "tipe": "Terapia",
    "description": "Cuando te encuentras en una situacion difícil de sobrellevar, no es facil pedir ayuda, pero cuando te encuentras un espacio para ti en terapia, se vuelve un momento para crecer y descubrirte desde la profundidad. Desde ahí, trabajaremos juntos.",
    "image": "../img/serv/terapia-individual.jpg"
},
{
    "_id": 1,
    "title": "Psicoterapia de pareja",
    "tipe": "Terapia",
    "description": "Las dificultades en la pareja son una etapa en toda relación. En Dánika la terapia es una oportunidad de escucha y entendimiento a través de un acompañamiento profesional con un enfoque de terapia.",
    "image": "../img/serv/TerapiaPArejas.jpg"
},
{
    "_id": 2,
    "title": "Psicoterapia de adolescentes",
    "tipe": "Terapia",
    "description": "En Dánika se brinda un espacio para entender la adolescencia como una etapa de crucial para el desarrollo del paciente como de sus familiares.",
    "image": "../img/serv/terapiaAdolecentes.jpg"
},
{
    "_id": 3,
    "title": "Psicoterapia grupal",
    "tipe": "Terapia",
    "description": "La psicoterapia grupal esta basada en el trabajo  individual a  través de la experiencia  grupal, en Dánika se brinda un acompañamiento profesional para la guía y el autodescubrimiento de todos.",
    "image": "../img/serv/Psicoterapiagrupal.jpg"
},
{
    "_id": 4,
    "title": "Psicoterapia grupal para mamás",
    "tipe": "Terapia",
    "description": "Es un espacio para el descubrimiento de la maternidad, sus implicaciones, vivencias, aprendizajes y dificultades a través de un acompañamiento cercano y profesional.",
    "image": "../img/serv/terapiaMadres.jpg"
}
];

let recoverData = localStorage.getItem("services")
if (recoverData == null) {
    let jsonServices = JSON.stringify(newService);
    localStorage.setItem("services", jsonServices);
} else {

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
            "_id": arrayService.length + 1,
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
    } else {
        Swal.fire({
            icon: 'error',
            title: '¡Falló!',
            text: '¡No se agregó el servicio!',
        })
    }
}

let servicesStorage = localStorage.getItem("services");
let arrayService = JSON.parse(servicesStorage);


let formAddService = document.getElementById("form-service");

formAddService.addEventListener("submit", function(event) {
    let title = document.getElementById("newService");
    let tipe = document.getElementById("serviceTipe");
    let description = document.getElementById("description");
    let image = document.getElementById("validatedCustomFile");
    event.preventDefault();
    servicesAdd(title, tipe, description, image);
});