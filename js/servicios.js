

let servicios =[
    {
       src : `../img/serv/terapia-individual.jpg`,
       title: "Psicoterapia individual",
       desc : "En Dánika encontrarás un espacio terapéutico, que impulsará tu crecimiento  y redescubrimiento personal"
    },
    {
      src : `../img/serv/TerapiaPArejas.jpg`,
      title: "Psicoterapia de pareja",
      desc : "Las dificultades en la pareja son una etapa en toda relación. En Dánika la terapia es una oportunidad de escucha y entendimiento a través de un acompañamiento profesional con un enfoque de terapia."
   },
   {
    src : `../img/serv/terapiaAdolecentes.jpg`,
    title: "Psicoterapia de adolescentes",
    desc : "En Dánika se brinda un espacio para entender la adolescencia como una etapa de crucial para el desarrollo del paciente como de sus familiares."
  },
  {
    src : `../img/serv/Psicoterapia grupal.jpg`,
    title: "Psicoterapia grupal",
    desc : "La psicoterapia grupal esta basada en el trabajo  individual a  través de la experiencia  grupal, en Dánika se brinda un acompañamiento profesional para la guía y el autodescubrimiento de todos."
  },
  {
    src : `../img/serv/terapiaMadres.jpg`,
    title: "Psicoterapia grupal para mamás",
    desc : "Es un espacio para el descubrimiento de la maternidad, sus implicaciones, vivencias, aprendizajes y dificultades a través de un acompañamiento cercano y profesional. "
  }

  
  ];

  //crearCard Servicios
  function crearCard(src,title,desc){
    //crear mi plantilla
    //regresar mi plantilla
    let myCard= `
    <div class="col mb-4"
      <div class="card">
              <img src="${src}" class="card-img-top alt="...">
            <div class="card-body card-bodyy ">
              <h5 class="card-titles titleStyleCard">${title}</h5>
              <p class="card-texts">${desc}</p>
            </div>
            <div class="card-button">
              <a href="#" class="btn btn-col btnDef">Agendar</a>
            </div>
      </div>      
    </div>`;
    return myCard;
  }

  //MOSTRAR CARD SERVICIOS
  function mostrarElementosServicios (servicios){
    //traer el elemento ancla    
    //recorrer algo
        //por cada elemento nececito hacer algo
        //dibujar una card(src,title,desc)

        
        //actualizar el elemento con lo que ya tenga mas la nueva card
        //Pueda mandar un solo elemento
        anclaservicios = document.getElementById('anclaservicios'); //TRAER ELEMENTO
        let container = '';

        for(let i=0 ; i<servicios.length; i++){
            console.log(servicios[i].desc);

            let src = servicios[i].src;
            let title = servicios[i].title;
            let desc = servicios [i].desc;

            container += crearCard(src,title,desc);
            anclaservicios.innerHTML = container;
        }
        
        
  } //PINTAR CARDS SERVICIOS

  mostrarElementosServicios(servicios);
//  window.onload = function(){
//     mostrarElementosServicios(servicios);
//  }

//-------------------------------------------------------------------


   // OBJETO TALLER
   let taller =[
    {
       srcT : `../img/serv/tellerMamas.jpg`,
       titleT : "Taller reflexivo madres",
       descT : "En Dánika ofrecemos un espacio para abordar preguntas, miedos, preocupaciones sobre temas relacionados a la concepción, crianza y otros temas relacionados con la experiencia de ser madres."
    },
    {
      srcT : `../img/serv/tallerParejas.jpg`,
      titleT : "Taller parejas",
      descT : "Los talleres tienen como objetivo brindar herramientas a las parejas para la vinculación positiva: conocerse mejor, comprenderse, apoyarse desde un enfoque terapeútico."
    },
    {
      srcT : `../img/serv/TallercrianzaPositiva.jpg`,
      titleT : "Taller crianza positiva",
      descT : "Conversatorios y conferencias para madres y padres sobre crianza, educación, maternidad y paternidad. Talleres de información para una maternidad y paternidad más feliz.  Organizamos talleres extraordinarios sobre otros temas de interés como adolescencia, celos entre hermanos."
    },
    {
      srcT : `../img/serv/TallerAdicciones.jpg`,
      titleT : "Taller adicciones",
      descT : "El consumo de sustancias inicia en edades tempranas. En Dánika ofrecemos talleres psicoeducativos sobre adicciones, sus consecuencias y tratamientos ya que el trabajo preventivo es uno de nuestros objetivos principales."
    },
    {
      srcT : `../img/serv/tallerPsicoeducativo.jpg`,
      titleT : "Taller psicoeducativo",
      descT : "Son talleres dirigidos a grupos, instituciones educativa y organizaciones. En Dánika nos preocupamos por ofrecer temáticas actualizadas y que se ajustan a las necesidades del cliente."
    }
    ];
  
 

  //crearCard Talleres
  function crearCardTaller(srcT,titleT,descT){
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
 function mostrarElementosTaller (taller){
    //traer el elemento ancla    
    //recorrer algo
        //por cada elemento nececito hacer algo
        //dibujar una card(src,title,desc)

        
        //actualizar el elemento con lo que ya tenga mas la nueva card
        //Pueda mandar un solo elemento
        let anclataller = document.getElementById("anclataller"); //TRAER ELEMENTO
        let containerTaller = '';

        for(let j=0 ; j<taller.length; j++){
           // console.log(taller[j].desc);

            let srcT = taller[j].srcT;
            let titleT = taller[j].titleT;
            let descT = taller [j].descT;

            containerTaller += crearCardTaller(srcT,titleT,descT);
            anclataller.innerHTML = containerTaller;
            
        }
        
        
  }
  mostrarElementosTaller(taller);
//  window.onload = function(){
//     mostrarElementosTaller(taller);
//  }