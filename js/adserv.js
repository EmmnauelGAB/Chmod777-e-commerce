let servicios = JSON.parse(localStorage.getItem('services'));
console.log (servicios);

//crearCard Servicios

        function crearCard(title,description,image){
            let myCard = `
            <div class="col mb-4"
            <div class="card">
                    <img src=${image} class="card-img-top alt="...">
                    <div class="card-body card-bodyy ">
                    <h5 class="card-titles titleStyleCard">${title}</h5>
                    <p class="card-texts">${description}</p>
                    </div>
                    <div class="card-button">
                    <a href="#" class="btn btn-col btnDef">Agendar</a>
                    </div>
            </div>      
            </div>`;
            return myCard;
            }

            //MOSTRAR CARD SERVICIOS
            function mostrarElementosServicios(servicios) {
            anclaservicios = document.getElementById('anclaservicios'); //TRAER ELEMENTO
            let containerServicio = '';

                for (let i = 0; i < servicios.length; i++) {

                    
                    let title = servicios[i].title;
                    let image = servicios[i].image;
                    let description = servicios[i].description;

                    containerServicio += crearCard(title, description,image);
                    anclaservicios.innerHTML = containerServicio;
                }
            } //PINTAR CARDS SERVICIOS
            mostrarElementosServicios(servicios);


//-------------------------------------------------------------------


// OBJETO TALLER
let taller = [{
    srcT: `../img/serv/tellerMamas.jpg`,
    titleT: "Taller reflexivo madres",
    descT: "En Dánika ofrecemos un espacio para abordar preguntas, miedos, preocupaciones sobre temas relacionados a la concepción, crianza y otros temas relacionados con la experiencia de ser madres."
},
{
    srcT: `../img/serv/tallerParejas.jpg`,
    titleT: "Taller parejas",
    descT: "Los talleres tienen como objetivo brindar herramientas a las parejas para la vinculación positiva: conocerse mejor, comprenderse, apoyarse desde un enfoque terapeútico."
},
{
    srcT: `../img/serv/TallercrianzaPositiva.jpg`,
    titleT: "Taller crianza positiva",
    descT: "Conversatorios y conferencias para madres y padres sobre crianza, educación, maternidad y paternidad. Talleres de información para una maternidad y paternidad más feliz.  Organizamos talleres extraordinarios sobre otros temas de interés como adolescencia, celos entre hermanos."
},
{
    srcT: `../img/serv/TallerAdicciones.jpg`,
    titleT: "Taller adicciones",
    descT: "El consumo de sustancias inicia en edades tempranas. En Dánika ofrecemos talleres psicoeducativos sobre adicciones, sus consecuencias y tratamientos ya que el trabajo preventivo es uno de nuestros objetivos principales."
},
{
    srcT: `../img/serv/tallerPsicoeducativo.jpg`,
    titleT: "Taller psicoeducativo",
    descT: "Son talleres dirigidos a grupos, instituciones educativa y organizaciones. En Dánika nos preocupamos por ofrecer temáticas actualizadas y que se ajustan a las necesidades del cliente."
}
];



//crearCard Talleres
function crearCardTaller(srcT, titleT, descT) {
//crear mi plantilla
//regresar mi plantilla
let myCardTaller = `
<div class="col mb-4"
  <div class="card">
          <img src="${srcT}" class="card-img-top" alt="...">
        <div class="card-body card-bodyy">
          <h5 class="card-titles">${titleT}</h5>
          <p class="card-texts">${descT}</p>
        </div>
        <div class="card-button">
          <a href="#" class="btn btn-col btnDef">Agendar</a>
        </div>
  </div>      
</div>`;
return myCardTaller;
}



// MOSTRAR CARD TALLER
function mostrarElementosTaller(taller) {
let anclataller = document.getElementById("anclataller"); //TRAER ELEMENTO
let containerTaller = '';

for (let j = 0; j < taller.length; j++) {
    let srcT = taller[j].srcT;
    let titleT = taller[j].titleT;
    let descT = taller[j].descT;

    containerTaller += crearCardTaller(srcT, titleT, descT);
    anclataller.innerHTML = containerTaller;

}

}
mostrarElementosTaller(taller);






