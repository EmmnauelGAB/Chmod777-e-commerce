//Declara los elementos del Index

//DANIKA
const dTitle = `ACERCA DE DÁNIKA`;
const dDes = `Soy psicóloga clínica, con formación en la UNAM. Parte de mi formación clínica consta de licenciatura en Psicología, así como un Posgrado en la atención clínica para adolescentes, adultos y terapia de grupo, actualmente estoy cursando un diplomado en Psicoanálisis y Género, por parte de la AMPAG. Tengo experiencia trabajando en instituciones gubernamentales para la elaboración del expediente clínico y de baterías psicológicas, dependiendo las necesidades de cada perfil psicológico, también realizando intervención en crisis, atención psicológica por vía telefónica; todo mi trabajo está guiado y elaborado desde el enfoque psicoanalítico y psicodinámico.`;
const dImg = `./img/indexImg/danuka.jpg`;
//CUANDO PUEDE AYUDARTE
const cpaTitle = `¿CUANDO PUEDE AYUDARTE LA PSICOTERAPIA EN LÍNEA?`;
const cpaDes = `La psicoterapia en línea puede ayudarte en diferentes escenarios. El objetivo principal es mejorar tu calidad de vida, obteniendo las herramientas que necesitas para tomar decisiones que contribuyan a vivir plenamente:`;
const cpaList = `<ul> <li>Te sientes desconectada o desconectado de actividades que antes disfrutabas, como compañía de familiares, lugares favoritos, por mencionar algunas.</li> <li>Los días malos superan a los buenos. Sientes profunda tristeza que te impide llevar a cabo tus actividades diarias.</li> <li>Sientes nervios, pánico, temblores o cualquier otra sensación de nerviosismo, agitación o tensión.</li> <li>Has sufrido un trauma en el pasado y no puedes dejar de pensar en ello.</li> <li>Relaciones dañadas con tu pareja, hijos, padres. Tienes dificultad para expresar lo que sientes.</li> </ul>`;
const cpaImg = `../img/indexImg/terapeuta.webp`;
//PROCESO DE TERAPIA EN LÍNEA
const ptlTitle = `PROCESO DE LA TERAPIA EN LÍNEA`;
const ptlDes = `El proceso de confirmación es el siguiente:`;
const ptlList = `<li class="liStyle">Primer mensaje y resolución de dudas</li> <li class="liStyle">Verificación de disponibilidad para terapia</li> <li class="liStyle">Confirmación y pago de terapia</li> <li class="liStyle">Mensaje de confirmación</li> <li class="liStyle">Inicio de psicoterapia en línea</li>`;
//BENEFICIOS
const bTitle = `BENEFICIOS DE LA PSICOTERAPIA EN LÍNEA`;
const bDes = `La psicoterapia en línea puede ayudarte en diferentes escenarios. El objetivo principal es mejorar tu calidad de vida, obteniendo las herramientas que necesitas para tomar decisiones que contribuyan a vivir plenamente:`;
const bList = `<li>Conduce a nuevas oportunidades para aprender modos diferentes de pensar, sentir y actuar.</li> <li>Encontrar un sentido a lo que se está haciendo.</li> <li>Ayuda a mejorar las relaciones con los demás.</li> <li>Analizar problemas y encontrar soluciones.</li> <li>Ayuda a manejar las emociones.</li>`;
const bImg = `./img/indexImg/hombrehablando.webp`;
//TESTIMONIOS
const tTitle = `TESTIMONIOS`;
const tImgMas = `img/icons/index/profilem.png`; 
const tImgFem = `img/icons/index/profilef.png`;

//Crear el index
let myIndex = `<!--DANIKA-->
<section class="container1-0">
  <div class="container1-1">
    <h1 class="text-center titleStyle">${dTitle}</h1>
    <hr>
    <p class="text-justify parrafStyle">${dDes}</p>
  </div>
  <div class="container1-2">
    <img src="${dImg}" alt="" width="500px">
  </div>
</section>
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
    <img src="${cpaImg}" alt="" width="450px">
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
    <img src="${bImg}" alt="" width="370px">
  </div>
</section>

<!--TESTIMONIOS-->
<div class="containertestimonios col align-items-center">
  <div class="titulos">
    <h1 class="tit">${tTitle}</h1>
    <hr>
  </div>
  <div class="jumbotron jumbotron-testimonios">
    <div class="container-xl">
      <div class="row">
        <div class="col-md-10 mx-auto">
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