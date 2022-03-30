//Declara los elementos del nosotros
//Info Nosotros
const nTitle = `Nosotros`;
const nDes = `Somos una plataforma web que ofrece servicios de psicoterapia online y presencial. Nuestro camino es la confidencialidad, responsabilidad y ética; nuestro objetivo es ser eficaces en nuestra intervención para mejorar la calidad de vida de nuestros pacientes; nuestra meta y recompensa es el éxito y bienestar de nuestros usuarios.`;
//Info Misión
const mTitle = `Misión`;
const mDes = `Brindar un servicio psicológico integral para identificar y solucionar dificultades mediante estrategias efectivas de intervención, para lograr un óptimo desarrollo humano y una mejor calidad de vida en nuestros usuarios.`;
//Info Visión
const vTitle = `Visión`;
const vDes = `Consolidarnos como el centro psicológico de vanguardia; brindar los servicios de más alta calidad y los resultados más efectivos en nuestra nación; así como ser reconocidos por nuestros valores, asertividad y pertinencia.`;
//Info Vlores
const vaTitle = `Valores`;
const vaDes = `Ejercemos nuestros servicios mediante un trato ético, profesional y responsable, fomentando la confianza mutua. La ética y la ciencia son nuestras principales herramientas.`;
//Crear el elementos html nosotros
let myNosotros = ` <div class="containerAsk">
<div class="col align-items-center">
  <div class="col-12 col-sm-7 col-lg-7 mx-auto ">
    <h1>${nTitle}</h1>
    <hr>
    <p class="text-justify">
      ${nDes}
    </p>
    <br>
    <h1>${mTitle}</h1>
    <hr>
    <p class="text-justify">
     ${mDes}
    </p>
    <br>
    <h1>${vTitle}</h1>
    <hr>
    <p class="text-justify">
      ${vDes}
    </p>
    <br>
    <h1>${vaTitle}</h1>
    <hr>
    <p class="text-justify">
     ${vaDes}
    </p>

  </div>
</div>
</div>`


//Muestra el footer en pantalla
anclaNosotros.innerHTML = myNosotros;