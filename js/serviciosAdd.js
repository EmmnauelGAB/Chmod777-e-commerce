//**valida cada uno de los campos del form */

function serviciosAdd(titulo, tipo, description, imagen) {
    let tituloValor = titulo.value;
    let tipoValor = tipo.value;
    let descriptionValor = description.value;
    let imagenValor = imagen.value;

    // valida titulo

    let text = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    if (tituloValor === "" || tituloValor.length <= 10 || !text.test(tituloValor)) {
        titulo.classList.add("is-invalid");
    } else {
        titulo.classList.add("is-valid");
    }

    // valida tipo

    if (tipoValor === "") {
        tipo.classList.add("is-invalid");
    } else {
        tipo.classList.add("is-valid");
    }

    // valida Descripcion
    let texto = /^[a-zA-ZÀ-ÿ\s]{1,1000}$/;
    if (descriptionValor === "" || descriptionValor.length <=20 || !texto.test(descriptionValor)) {
        description.classList.add("is-invalid");
    } else {
        description.classList.add("is-valid");
    }

    // valida imagen
    if (imagenValor === "") {
        imagen.classList.add("is-invalid");
    } else {
        imagen.classList.add("is-valid");
    }
}

const formAddServicio = document.getElementById("form-servicio");

formAddServicio.addEventListener("submit", (evento) => {
    let titulo = document.getElementById("newService");
    let tipo = document.getElementById("servicioTipo");
    let description = document.getElementById("description");
    let imagen = document.getElementById("validatedCustomFile");
    evento.preventDefault();
    serviciosAdd(titulo, tipo, description, imagen);
})

