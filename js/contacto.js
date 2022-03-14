"use strict"

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("sendinfo").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    /** Validar Nombre */
    var nombre = document.getElementById('name').value;
    if (nombre == "") {
        alert("Por favor, Introduce tu nombre valido.");
        return;
    } else {
        if (nombre.length >= 2) {
            console.log(nombre);
            return;
        }
    }
    /** Validar Apellidos */
    var apellidos = document.getElementById('lasName').value;
    if (apellidos.length == "") {
        alert("Por favor, Introduce tu apellido");
        return;
    } else {
        if (apellidos.length >= 3) {
            return;
        }
    }
    /** Validar Estado */
    var estado = document.getElementById('std');
    if (estado == "") {
        alert("Por favor, Introduce tu estado");
        return;
    }
    /**Validar Telefone */
    var telefono = document.getElementById('telephone');
    if (telefono == "") {
        alert("Por favor, Introduce tu nombre");
        return;
    }
    /**Validar Correo */
    var correo = document.getElementById('telephone');
    if (correo == "") {
        alert("Por favor, Introduce tu correo");
        return;
    }
    /**Validar mensaje */
    var mensaje = document.getElementById('telephone');
    if (mensaje == "") {
        alert("Por favor, Introduce tu mensaje");
        return;
    }
}


// Example starter JavaScript for disabling form submissions if there are invalid fields
// (function() {
//     window.addEventListener(
//         "load",
//         function() {
//             // Fetch all the forms we want to apply custom Bootstrap validation styles to
//             var forms = document.getElementsByClassName("needs-validation");
//             // Loop over them and prevent submission
//             var validation = Array.prototype.filter.call(
//                 forms,
//                 function(form) {
//                     form.addEventListener(
//                         "submit",
//                         function(event) {
//                             if (form.checkValidity() === false) {
//                                 event.preventDefault();
//                                 event.stopPropagation();
//                             }
//                             form.classList.add("was-validated");
//                         },
//                         false
//                     );
//                 }
//             );
//         },
//         false
//     );
// })();