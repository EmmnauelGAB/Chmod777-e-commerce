//Declara los elementos de ayuda
//Preguntas frecuentes
const pfTitle = `Preguntas frecuentes`;
const pfQ1 = `¿En dónde puedo tomar la terapia?`;
const pfR1 = `Puede ser desde tu hogar o en un espacio en silencio, cómodo y en donde puedas tomar la terapia de forma individual. En el caso de terapia para adolescentes, el primer contacto será con los padres, para dar paso así a la terapia individual.`;
const pfQ2 = `¿Qué formas de pago se aceptan?`;
const pfR2 = `La forma de pago aceptada es depósito bancario o transferencia interbancaria.`;
const pfQ3 = `¿Cómo puedo resolver mis dudas?`;
const pfR3 = `Te invito a que me dejes un mensaje por WhatsApp al 5544606815. Te responderé tan pronto sea posible.`
const pfQ4 = `Si vivo fuera de la Ciudad de México, ¿puedo tomar terapia?`;
const pfR4 = `Claro que sí. Una de las bondades de la psicoterapia en línea es que no hay fronteras. Puedes tomar terapia desde el lugar en donde te encuentres.`;
//CONTACTO
const cTitle = `Contacto`;
//MAPADA
const mUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.3628635562754!2d-99.16677768558075!3d19.353434648223487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffc3b6b0d33b%3A0x4bb4804107bb08c4!2sC.%20Paris%20150%2C%20Del%20Carmen%2C%20Coyoac%C3%A1n%2C%2004100%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1646336231261!5m2!1ses-419!2smx`;

//Crear el contenido de ayuda
let myHelp = `<!--Form-->
<div class="containerAsk ">
    <div class="col">
        <div class="col-12 col-sm-7 col-lg-7 mx-auto ">
            

            <div class="accordion containerColapse" id="accordionExample">
            <h1 class="text-center ask">${pfTitle}</h1>
                <div class="card colapseSt ">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn text-left titleFormatColapse {                                " type="button" data-toggle="collapse"
                                data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                ${pfQ1}
                            </button>
                        </h2>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                        data-parent="#accordionExample">
                        <div class="card-body card-ayuda">
                           ${pfR1}
                        </div>
                    </div>
                </div>
                <div class="card colapseSt">
                    <div class="card-header" id="headingTwo">
                        <h2 class="mb-0">
                            <button class="btn text-left collapsed titleFormatColapse {                                " type="button"
                                data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                                aria-controls="collapseTwo">
                                ${pfQ2}
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                        data-parent="#accordionExample">
                        <div class="card-body card-ayuda">
                            ${pfR2}
                        </div>
                    </div>
                </div>
                <div class="card colapseSt">
                    <div class="card-header" id="headingThree">
                        <h2 class="mb-0">
                            <button class="btn text-left collapsed titleFormatColapse" type="button"
                                data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                                aria-controls="collapseThree">
                                ${pfQ3}
                            </button>
                        </h2>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                        data-parent="#accordionExample">
                        <div class="card-body card-ayuda">
                            ${pfR3}
                        </div>
                    </div>
                </div>
                <div class="card colapseSt">
                    <div class="card-header" id="headingFour">
                        <h2 class="mb-0">
                            <button class="btn  text-left collapsed titleFormatColapse" type="button"
                                data-toggle="collapse" data-target="#collapseFour" aria-expanded="false"
                                aria-controls="collapseThree">
                                ${pfQ4}
                            </button>
                        </h2>
                    </div>
                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour"
                        data-parent="#accordionExample">
                        <div class="card-body card-ayuda">
                            ${pfR4}
                        </div>
                    </div>
                </div>
            </div>

            
            <section class="containerColorC">
            <form class="sendinfo " id="sendinfo" novalidate action="https://formspree.io/f/mqknblnw" method="POST">
                
            <!--Nombre-->
            <h1 class="text-center ask2">${cTitle}</h1>
                <div class="form-row ">
                    <div class="col-md-6 mb-3">
                        <label for="name" class="formulario__label titleFormat">Nombre(s)</label>
                        <input type="text" class="form-control " id="name" placeholder="Ingrese su nombre" required
                            name="name" />
                        <div id="nameDemo"></div>
                    </div>
                    <!--Apellido-->
                    <div class="col-md-6 mb-3 ">
                        <label class="titleFormat" for="lastName">Apellidos</label>
                        <input type="text" class="form-control" id="lastName" placeholder="Ingrese sus apellidos"
                            required name="lastName" />
                        <div class="invalid-feedback">Ingresa un apellido válido.</div>
                        <div id="lastNameDemo"></div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                        <label class="titleFormat" for="std">Estado</label>
                        <select id="std" class="form-control" required name="city">
                            <option></option>
                            <option value="Aguascalientes">Aguascalientes</option>
                            <option value="Baja California">Baja California</option>
                            <option value="Baja California Sur">Baja California Sur</option>
                            <option value="Campeche">Campeche</option>
                            <option value="Chiapas">Chiapas</option>
                            <option value="Chihuahua">Chihuahua</option>
                            <option value="CDMX">Ciudad de México</option>
                            <option value="Coahuila">Coahuila</option>
                            <option value="Colima">Colima</option>
                            <option value="Durango">Durango</option>
                            <option value="Estado de México">Estado de México</option>
                            <option value="Guanajuato">Guanajuato</option>
                            <option value="Guerrero">Guerrero</option>
                            <option value="Hidalgo">Hidalgo</option>
                            <option value="Jalisco">Jalisco</option>
                            <option value="Michoacán">Michoacán</option>
                            <option value="Morelos">Morelos</option>
                            <option value="Nayarit">Nayarit</option>
                            <option value="Nuevo León">Nuevo León</option>
                            <option value="Oaxaca">Oaxaca</option>
                            <option value="Puebla">Puebla</option>
                            <option value="Querétaro">Querétaro</option>
                            <option value="Quintana Roo">Quintana Roo</option>
                            <option value="San Luis Potosí">San Luis Potosí</option>
                            <option value="Sinaloa">Sinaloa</option>
                            <option value="Sonora">Sonora</option>
                            <option value="Tabasco">Tabasco</option>
                            <option value="Tamaulipas">Tamaulipas</option>
                            <option value="Tlaxcala">Tlaxcala</option>
                            <option value="Veracruz">Veracruz</option>
                            <option value="Yucatán">Yucatán</option>
                            <option value="Zacatecas">Zacatecas</option>
                        </select>
                        <div id="stdDemo"></div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label class="titleFormat" for="telephone">Teléfono</label>
                        <input type="tel" class="form-control" id="telephone" placeholder="Ingrese su teléfono"
                            required name="telephone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                        <div id="telephoneDemo"></div>
                    </div>
                    <div class="col-md-12 mb-12">
                        <label class="titleFormat" for="email">Correo</label>
                        <input type="email" class="form-control" id="email" placeholder="Ingrese su correo" required
                            name="email" />
                        <div id="emailDemo"></div>

                        <div class="form-group">
                        <hr>
                            <label class="titleFormat" for="mensaje">Mensaje</label>
                            <textarea class="form-control" id="message" rows="10" name="message"></textarea>
                            <div id="menssageDemo"></div>
                        </div>

                        <div class="form-group">
                            <div class="form-check mb-3 was-validated">
                                <input type="checkbox" class="form-check-input" id="validationFormCheck1"
                                    required />
                                <label class="form-check-label" for="validationFormCheck1"> Acepta los <a
                                        style="color:blue;" data-toggle="modal"
                                        data-target="#staticBackdrop">Términos y Condiciones</a></label>
                                <div class="invalid-feedback "> Es necesario aceptar los términos y condiciones para
                                    enviar tu información. </div>
                            </div>

                        </div>
                    </div>
                </div>
                <hr />
                <button class="col-md-3 col-12 btn btn-col btnDef float-right"  type="submit" value="Entrar">Enviar</button>
            </form>
            </section>
            <!-- Modal  Terminos y condiciones-->
            <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close btn-col" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <h2 style="text-align: center;"><strong>Términos y Condiciones de Uso</strong></h2>
                            <p>&nbsp;</p>
                            <p><strong>INFORMACIÓN RELEVANTE</strong></p>
                            <p>Es requisito necesario para la adquisición de los productos que se ofrecen en este
                                sitio, que lea y acepte los siguientes Términos y Condiciones que a continuación se
                                redactan. El uso de nuestros servicios así como la compra
                                de nuestros productos implicará que usted ha leído y aceptado los Términos y
                                Condiciones de Uso en el presente documento. Todas los productos &nbsp;que son
                                ofrecidos por nuestro sitio web pudieran ser creadas, cobradas,
                                enviadas o presentadas por una página web tercera y en tal caso estarían sujetas a
                                sus propios Términos y Condiciones. En algunos casos, para adquirir un producto,
                                será necesario el registro por parte del usuario, con
                                ingreso de datos personales fidedignos y definición de una contraseña.
                            </p>
                            <p>El usuario puede elegir y cambiar la clave para su acceso de administración de la
                                cuenta en cualquier momento, en caso de que se haya registrado y que sea necesario
                                para la compra de alguno de nuestros productos. www.danika.com
                                no asume la responsabilidad en caso de que entregue dicha clave a terceros.</p>
                            <p>Todas las compras y transacciones que se lleven a cabo por medio de este sitio web,
                                están sujetas a un proceso de confirmación y verificación, el cual podría incluir la
                                verificación del stock y disponibilidad de producto,
                                validación de la forma de pago, validación de la factura (en caso de existir) y el
                                cumplimiento de las condiciones requeridas por el medio de pago seleccionado. En
                                algunos casos puede que se requiera una verificación
                                por medio de correo electrónico.</p>
                            <p>Los precios de los productos ofrecidos en esta Tienda Online es válido solamente en
                                las compras realizadas en este sitio web.</p>
                            <p><strong>LICENCIA</strong></p>
                            <p>Danika&nbsp; a través de su sitio web concede una licencia para que los usuarios
                                utilicen&nbsp; los productos que son vendidos en este sitio web de acuerdo a los
                                Términos y Condiciones que se describen en este documento.</p>
                            <p><strong>USO NO AUTORIZADO</strong></p>
                            <p>En caso de que aplique (para venta de software, templetes, u otro producto de diseño
                                y programación) usted no puede colocar uno de nuestros productos, modificado o sin
                                modificar, en un CD, sitio web o ningún otro medio
                                y ofrecerlos para la redistribución o la reventa de ningún tipo.</p>
                            <p><strong>PROPIEDAD</strong></p>
                            <p>Usted no puede declarar propiedad intelectual o exclusiva a ninguno de nuestros
                                productos, modificado o sin modificar. Todos los productos son propiedad &nbsp;de
                                los proveedores del contenido. En caso de que no se especifique
                                lo contrario, nuestros productos se proporcionan&nbsp; sin ningún tipo de garantía,
                                expresa o implícita. En ningún esta compañía será &nbsp;responsables de ningún daño
                                incluyendo, pero no limitado a, daños directos,
                                indirectos, especiales, fortuitos o consecuentes u otras pérdidas resultantes del
                                uso o de la imposibilidad de utilizar nuestros productos.</p>
                            <p><strong>POLÍTICA DE REEMBOLSO Y GARANTÍA</strong></p>
                            <p>En el caso de productos que sean&nbsp; mercancías irrevocables no-tangibles, no
                                realizamos reembolsos después de que se envíe el producto, usted tiene la
                                responsabilidad de entender antes de comprarlo. &nbsp;Le pedimos
                                que lea cuidadosamente antes de comprarlo. Hacemos solamente excepciones con esta
                                regla cuando la descripción no se ajusta al producto. Hay algunos productos que
                                pudieran tener garantía y posibilidad de reembolso pero
                                este será especificado al comprar el producto. En tales casos la garantía solo
                                cubrirá fallas de fábrica y sólo se hará efectiva cuando el producto se haya usado
                                correctamente. La garantía no cubre averías o daños ocasionados
                                por uso indebido. Los términos de la garantía están asociados a fallas de
                                fabricación y funcionamiento en condiciones normales de los productos y sólo se
                                harán efectivos estos términos si el equipo ha sido usado correctamente.
                                Esto incluye:</p>
                            <p>– De acuerdo a las especificaciones técnicas indicadas para cada producto.<br>– En
                                condiciones ambientales acorde con las especificaciones indicadas por el fabricante.
                                <br>– En uso específico para la función con que fue diseñado de fábrica.
                                <br>– En condiciones de operación eléctricas acorde con las especificaciones y
                                tolerancias indicadas.
                            </p>
                            <p><strong>COMPROBACIÓN ANTIFRAUDE</strong></p>
                            <p>La compra del cliente puede ser aplazada para la comprobación antifraude. También
                                puede ser suspendida por más tiempo para una investigación más rigurosa, para evitar
                                transacciones fraudulentas.</p>
                            <p><strong>PRIVACIDAD</strong></p>
                            <p>Este www.danika.com garantiza que la <a href="https://noticias-fcbarcelona.es/"
                                    target="_blank">fc barcelona noticias</a> información personal que usted envía
                                cuenta con la seguridad necesaria. Los datos ingresados por
                                usuario o en el caso de requerir una validación de los pedidos no serán entregados a
                                terceros, salvo que deba ser revelada en cumplimiento a una orden judicial o
                                requerimientos legales.</p>
                            <p>La suscripción a boletines de correos electrónicos publicitarios es voluntaria y
                                podría ser seleccionada al momento de crear su cuenta.</p>
                            <p>Danika reserva los derechos de cambiar o de modificar estos términos sin previo
                                aviso.
                            </p>
                            <p>Estas terminos y condiciones se han generado en&nbsp;<a
                                    href="http://terminosycondicionesdeusoejemplo.com/"
                                    target="_blank">terminosycondicionesdeusoejemplo.com</a>.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
<!--Localizacion map-->
<div class="col-md-8 offset-md-3">
    <fieldset>
            <h4 class="ubicacion">Nuestra ubicación</h4>                    
    </fieldset>
    <div class="row">
        <div class="col-md-9">
            <div class="map-responsive"><iframe
                    src="${mUrl}"
                    width="600px" height="4500px" frameborder="0" style="border:0" allowfullscreen></iframe></div>
        </div>
        <div class="col-sm-6">
            <fieldset>
                <legend><i class="fa fa-envelope"></i> Contáctanos</legend>
            </fieldset>
            <div><span><br /><strong>PSIC. DÁNIKA</strong><br /></span></div>
            <div><span>email@danika.com</span></div>
            <div><span>www.danica.com</span></div>
            <hr />
        </div>
        <div class="col-sm-6">
            <fieldset>
                <legend><i class="fa fa-location-arrow"></i>Dirección</legend>
            </fieldset>
            <div><span><strong>C. Paris 150</strong><br /></span></div>
            <div><span>C. Paris 150, Del Carmen,</span></div>
            <div><span>Coyoacán, CDMX<br />C.P. 04100<br /><br /><br /></span></div>
            <div></div>
        </div>
    </div>
</div>`


//Muestra el contenido ayuda en pantalla
anclaHelp.innerHTML = myHelp;
//** se valida cada uno de los campos y se anexo expreciones regulares */
function validationForm(name, lastName, state, telephone, email, message) {
    let nameValue = name.value;
    let lastValue = lastName.value;
    let stateValue = state.value;
    let phoneValue = telephone.value;
    let emailValue = email.value;
    let messageValue = message.value;


    // Validar Nombre
    let text = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    let textName;
    let condition = true;
    if (nameValue === "" || !text.test(nameValue)) {
        textName = `<div class="alert alert-danger" role="alert">¡Nombre inválido! </div>`;
    } else if (nameValue.length <= 3) {
        textName = `<div class="alert alert-danger" role="alert">¡Nombre menor a 4 caracteres!</div>`;
        condition = false;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Nombre válido!</div>`;

    }
    document.getElementById("nameDemo").innerHTML = textName;
    // Validar Apellido
    if (lastValue === "" || !text.test(lastValue)) {
        textName = `<div class="alert alert-danger" role="alert">¡Apellido inválido! </div>`;
    } else if (nameValue.length <= 3) {
        textName = `<div class="alert alert-danger" role="alert">¡Apellido menor a 4 caracteres!</div>`;
        condition = false;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Apellido válido!</div>`;
    }
    document.getElementById("lastNameDemo").innerHTML = textName;
    // Validar Estado
    if (stateValue === "") {
        textName = `<div class="alert alert-danger" role="alert">¡Estado no seleccionado! </div>`;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Estado válido!</div>`;
    }
    document.getElementById("stdDemo").innerHTML = textName;
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
    document.getElementById("telephoneDemo").innerHTML = textName;

    // Validar Correo
    let emailVal = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (emailValue === "" || !emailVal.test(emailValue)) {
        textName = `<div class="alert alert-danger" role="alert">¡Correo inválido! </div>`;
        condition = false;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Correo válido!</div>`;
    }
    document.getElementById("emailDemo").innerHTML = textName;

    // Validar Message
    if (messageValue === "" || /^\s+$/.test(messageValue)) {
        textName = `<div class="alert alert-danger" role="alert">¡Mensaje inválido! </div>`;
        condition = false;
    } else {
        textName = `<div class="alert alert-success" role="alert">¡Mensaje válido!</div>`;
    }
    document.getElementById("menssageDemo").innerHTML = textName;

    if (condition === true) {
        Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: '¡Correo Enviado!',
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


//** Se declara la const del form */
const formAddProduct = document.getElementById("sendinfo");
//** Hacemos una funcion que escucha al boton enviar mediante el evente */
formAddProduct.addEventListener("submit", (event) => {
    let lastName = document.getElementById("lastName");
    let name = document.getElementById("name");
    let state = document.getElementById("std");
    let phone = document.getElementById("telephone");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    event.preventDefault();
    validationForm(name, lastName, state, phone, email, message);
})