//Declara los elementos del Index

//DANIKA
const dTitle = `Acerca de Dánika`;
const dDes = `Soy psicóloga clínica, con formación en la UNAM. Parte de mi formación clínica consta de licenciatura en Psicología, así como un Posgrado en la atención clínica, estoy cursando un diplomado en Psicoanálisis y Género, por parte de la AMPAG. Tengo experiencia trabajando en instituciones gubernamentales para la elaboración del expediente clínico y de baterías psicológicas, dependiendo las necesidades de cada perfil psicológico, también realizando intervención en crisis, atención psicológica por vía telefónica.`;
const dImg = `./img/indexImg/danuka.jpg`;
//CUANDO PUEDE AYUDARTE
const cpaTitle = `¿Cúando puede ayudarte la psicoterapia en línea?`;
const cpaDes = `La psicoterapia en línea puede ayudarte en diferentes escenarios. El objetivo principal es mejorar tu calidad de vida, obteniendo las herramientas que necesitas para tomar decisiones que contribuyan a vivir plenamente:`;
const cpaList = `<ul> <li>Te sientes desconectada o desconectado de actividades que antes disfrutabas, como compañía de familiares, lugares favoritos, por mencionar algunas.</li> <li>Los días malos superan a los buenos. Sientes profunda tristeza que te impide llevar a cabo tus actividades diarias.</li> <li>Sientes nervios, pánico, temblores o cualquier otra sensación de nerviosismo, agitación o tensión.</li></ul>;`;
const cpaImg = `../img/indexImg/terapeuta.webp`;
//PROCESO DE TERAPIA EN LÍNEA
const ptlTitle = `Proceso de la terapia en línea`;
const ptlDes = `El proceso de confirmación es el siguiente:`;
const ptlList = `<li class="liStyle">Primer mensaje y resolución de dudas</li> <li class="liStyle">Verificación de disponibilidad para terapia</li> <li class="liStyle">Confirmación y pago de terapia</li> <li class="liStyle">Mensaje de confirmación</li> <li class="liStyle">Inicio de psicoterapia en línea</li>`;
//BENEFICIOS
const bTitle = `Beneficios de la psicoterapía en línea`;
const bDes = `La psicoterapia en línea puede ayudarte en diferentes escenarios. El objetivo principal es mejorar tu calidad de vida, obteniendo las herramientas que necesitas para tomar decisiones que contribuyan a vivir plenamente:`;
const bList = `<li>Conduce a nuevas oportunidades para aprender modos diferentes de pensar, sentir y actuar.</li> <li>Encontrar un sentido a lo que se está haciendo.</li> <li>Ayuda a mejorar las relaciones con los demás.</li> <li>Analizar problemas y encontrar soluciones.</li> <li>Ayuda a manejar las emociones.</li>`;
const bImg = `./img/indexImg/hombrehablando.webp`;
//TESTIMONIOS
const tTitle = `Testimonios`;
const tImgMas = `img/icons/index/profilem.png`; 
const tImgFem = `img/icons/index/profilef.png`;

//Crear el index
let myIndex = `<!--DANIKA-->
<div class="container">
<h1 class="text-center titleStyle">${dTitle}</h1>
<hr>
<section class="container1-0">
  <div class="container1-1 col-12 col-md-8 col-lg-6">
    <p class="text-justify parrafStyle">${dDes}</p>
  </div>
  <div class="container1-2 col-12 col-md-4 col-lg-6">
    <img class="imgFormat" src="${dImg}" alt="" width="450px">
  </div>
</section>
</div>
<!--CUANDO PUEDE AYUDARTE-->
<section class="container2-0">
  <div class="container2-1">
    <h1 class="titleStyle">${cpaTitle}</h1>
    <hr>
    <p class="">${cpaDes}</p>
  </div>
  <div class="container2-2">
  ${cpaList}
  </div>
  <div class="container2-3">
    <img class="imgFormat" src="${cpaImg}" alt="" width="450px">
  </div>
</section>


<!--PROCESO DE TERAPIA EN LÍNEA-->
<section class="container3-0">
  <h1 class="titleStyle">${ptlTitle}</h1>
  <hr>
  <p>${ptlDes}</p>

  <ul class="ulStyle">
 ${ptlList}
  </ul>
</section>
<!--BENEFICIOS-->
<section class="container4-0">
  <div class="container4-1">
    <h1 class="titleStyle">${bTitle}</h1>
    <hr>
    <p class="">${bDes}</p>
  </div>
  <div class="container4-2">
    <ul>
     ${bList}
    </ul>
  </div>
  <div class="container4-3">
    <img class="imgFormat" src="${bImg}" alt="" width="370px">
  </div>
</section>

<!--TESTIMONIOS-->
<div class="containertestimonios col align-items-center">
  
  <div class="jumbotron jumbotron-testimonios">
    <div class="container-xl">
      <div class="row">
        <div class="col-md-10 mx-auto">
        <div class="titulos">
          <h1 class="tit">${tTitle}</h1>
           <hr>
          </div>
          <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="0">
            <!-- Carousel indicators -->
            <ol class="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
            </ol>
            <!-- Wrapper for carousel items -->
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="carousel-test">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img src="${tImgMas}" class="img-fluid" alt="profilem">
                      </div>
                      <div class="thumb-content">
                        <h4>Javier García</h4>
                        <p>La terapia ha sido de excepcional ayuda. Pudieron ayudarme en situaciones muy difíciles,
                          me dieron calma y posteriormente me proporcionaron las herramientas necesarias para
                          gestionar el motivo por el que contacté con Dánika. </p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-test">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img src="${tImgFem}" class="img-fluid" alt="profilef">
                      </div>
                      <div class="thumb-content">
                        <h4>Alexa Ruíz</h4>
                        <p>Dánika es una excelente profesional, transmite confianza, calidez humana, y hace que todo
                          sea fácil desde el principio. Te motiva y después de cada sesión estás deseando volver a
                          la siguiente ¡Muchas gracias por todo!</p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-test">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img src="${tImgMas}" class="img-fluid" alt="profilem">
                      </div>
                      <div class="thumb-content">
                        <h4>Dilan Cruz</h4>
                        <p>Dánika, me ayudo a entender de dónde vienen mis problemas, comprenderme mejor y ser más
                          amable conmigo mismo. Ha sido un largo camino de auto descubrimiento y crecimiento
                          personal y emocional. Te estoy tremendamente agradecido.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="carousel-test">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img src="${tImgFem}" class="img-fluid" alt="profilef">
                      </div>
                      <div class="thumb-content">
                        <h4>Laura Ruíz</h4>
                        <p>Una magnífica experiencia la terapia online 100% recomendable. Necesitaba un psicólogo
                          on-line porque viajaba bastante y el método que sigue Dánika me ha encantado, yo misma
                          agendo mis terapias según mis necesidades.</p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-test">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img src="${tImgFem}" class="img-fluid" alt="profilef">
                      </div>
                      <div class="thumb-content">
                        <h4>Alondra López</h4>
                        <p>Gracias a Dánika conseguí ordenar los pensamientos de mi cabeza, aprendí a darle la
                          importancia que merece a cada cosa y a quitarle hueco a esos pensamientos negativos que
                          nos frenan y no nos dejan ser felices, gracias por toda la ayuda. </p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-test">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img src="${tImgMas}" class="img-fluid" alt="profilem">
                      </div>
                      <div class="thumb-content">
                        <h4>Isaac Ponce</h4>
                        <p>Llegué a la consulta sin saber manejar situaciones cotidianas, que me ocasionaban ataques
                          de ansiedad. A las pocas semanas comencé a sentir cambios importantes y tengo que decir,
                          que las sesiones han marcado un antes y un después en mi vida.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Carousel controls -->
            <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
              <i class="fa fa-angle-left"></i>
            </a>
            <a class="carousel-control-next" href="#myCarousel" data-slide="next">
              <i class="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>`


//Muestra el index en pantalla
anclaIndex.innerHTML = myIndex;


//Inicializa local storage servicios
let newService = [{
  "_id": 0,
  "title": "Terapia individual",
  "tipe": "Terapia",
  "description": "Cuando te encuentras en una situacion difícil de sobrellevar, no es facil pedir ayuda, pero cuando te encuentras un espacio para ti en terapia, se vuelve un momento para crecer y descubrirte desde la profundidad. Desde ahí, trabajaremos juntos.",
  "image": "terapia-individual.jpg"
},
{
  "_id": 1,
  "title": "Psicoterapia de pareja",
  "tipe": "Terapia",
  "description": "Las dificultades en la pareja son una etapa en toda relación. En Dánika la terapia es una oportunidad de escucha y entendimiento a través de un acompañamiento profesional con un enfoque de terapia.",
  "image": "TerapiaPArejas.jpg"
},
{
  "_id": 2,
  "title": "Psicoterapia de adolescentes",
  "tipe": "Terapia",
  "description": "En Dánika se brinda un espacio para entender la adolescencia como una etapa de crucial para el desarrollo del paciente como de sus familiares.",
  "image": "terapiaAdolecentes.jpg"
},
{
  "_id": 3,
  "title": "Psicoterapia grupal",
  "tipe": "Terapia",
  "description": "La psicoterapia grupal esta basada en el trabajo  individual a  través de la experiencia  grupal, en Dánika se brinda un acompañamiento profesional para la guía y el autodescubrimiento de todos.",
  "image": "Psicoterapiagrupal.jpg"
},
{
  "_id": 4,
  "title": "Psicoterapia grupal para mamás",
  "tipe": "Terapia",
  "description": "Es un espacio para el descubrimiento de la maternidad, sus implicaciones, vivencias, aprendizajes y dificultades a través de un acompañamiento cercano y profesional.",
  "image": "terapiaMadres.jpg"
}
];

let recoverData = localStorage.getItem("services")
if (recoverData == null) {
  let jsonServices = JSON.stringify(newService);
  localStorage.setItem("services", jsonServices);
} else {

}

let newTaller = [{
  "_id": 0,
  "title": "Taller reflexivo madres",
  "tipe": "Taller",
  "description": "En Dánika ofrecemos un espacio para abordar preguntas, miedos, preocupaciones sobre temas relacionados a la concepción, crianza y otros temas relacionados con la experiencia de ser madres.",
  "image": "tellerMamas.jpg"
},
{
  "_id": 1,
  "title": "Taller parejas",
  "tipe": "Taller",
  "description": "Los talleres tienen como objetivo brindar herramientas a las parejas para la vinculación positiva: conocerse mejor, comprenderse, apoyarse desde un enfoque terapeútico.",
  "image": "tallerParejas.jpg"
},
{
  "_id": 2,
  "title": "Taller crianza positiva",
  "tipe": "Taller",
  "description": "Conversatorios y conferencias para madres y padres sobre crianza, educación, maternidad y paternidad. Talleres de información para una maternidad y paternidad más feliz.  Organizamos talleres extraordinarios sobre otros temas de interés como adolescencia, celos entre hermanos.",
  "image": "TallercrianzaPositiva.jpg"
},
{
  "_id": 3,
  "title": "Taller adicciones",
  "tipe": "Taller",
  "description": "El consumo de sustancias inicia en edades tempranas. En Dánika ofrecemos talleres psicoeducativos sobre adicciones, sus consecuencias y tratamientos ya que el trabajo preventivo es uno de nuestros objetivos principales.",
  "image": "TallerAdicciones.jpg"
},
{
  "_id": 4,
  "title": "Taller psicoeducativo",
  "tipe": "Taller",
  "description": "Son talleres dirigidos a grupos, instituciones educativa y organizaciones. En Dánika nos preocupamos por ofrecer temáticas actualizadas y que se ajustan a las necesidades del cliente.",
  "image": "tallerPsicoeducativo.jpg"
}
];

let recoverDatat = localStorage.getItem("talleres")
if (recoverDatat == null) {
  let jsonTaller = JSON.stringify(newTaller);
  localStorage.setItem("talleres", jsonTaller);
} else {

}