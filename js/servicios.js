

let servicios =[
    {
       src : `../img/servicios/individual.jpg`,
       title: "Psicoterapia individual",
       desc : "Cuando te encuentras en una situacion difícil de sobrellevar, no es facil pedir ayuda, pero cuando te encuentras un espacio para ti en terapia, se vuelve un momento para crecer y descubrirte desde la profundidad. Desde ahí, trabajaremos juntos."
    },
    {
      src : `../img/servicios/pareja.jpg`,
      title: "Psicoterapia de pareja",
      desc : "Las dificultades en la pareja son una etapa en toda relación, acudir a terapia puede representar la oportunidad de escucharse y entenderse desde una comunicación que les permita verse más allá de lo que viven en el presente."
   },
   {
    src : `../img/servicios/adolescente.png`,
    title: "Psicoterapia de adolescentes",
    desc : " Las etapas de crecimiento de la vida son mejores cuando se tiene el espacio para poder experimentarlas y entenderlas; la adolescencia es una etapa crucial para el desarrollo tanto del paciente como de sus familiares."
  },
  {
    src : `../img/servicios/grupal.jpg`,
    title: "Psicoterapia grupal",
    desc : "El trabajo clínico de uno, se complementa a través de la experiencia y el trabajo de todos. Es así como el grupo es curativo en sí mismo, y qué mejor con la compañía de un especialista que puede guiarlos a descubrirse mucho mejor."
  },
  {
    src : `../img/servicios/mamas.jpg`,
    title: "Psicoterapia grupal para mamás",
    desc : "Es un espacio diseñado para el trabajo clínico de la maternidad y de lo que implica ser y vivirse como madres y mujeres; se trabaja con las vivencias, aprendizajes y dificultades que el maternar conlleva. "
  }

  
  ];

  //crearCard Servicios
  function crearCard(src,title,desc){
    //crear mi plantilla
    //regresar mi plantilla
    let myCard= `
    <div class="col mb-4"
      <div class="card">
              <img src="${src}" class="card-img-top" alt="...">
            <div class="card-body card-bodyy">
              <h5 class="card-titles">${title}</h5>
              <p class="card-texts">${desc}</p>
            </div>
            <div class="card-button">
              <a href="#" class="btn btn-col">Agendar</a>
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
       srcT : `../img/servicios/terapiamujeres.jpg`,
       titleT : "Taller reflexivo madres",
       descT : "Si va a tener su primer hijo, es muy probable que se sienta abrumada por las preguntas, los miedos o, simplemente, por no saber qué esperar. Por eso para muchos padres primerizos tomar clases de preparación para el parto les ayuda a calmar sus preocupaciones y responder a muchas preguntas, te ayudaré a resolver tus dudas."
    },
    {
      srcT : `../img/servicios/tallerpareja.jpeg`,
      titleT : "Taller parejas",
      descT : "Tienen por objetivo apoyar a la pareja a conocerse mejor, a fin de que puedan comprenderse, humanizarse y apoyarse amorosamente en sus áreas disfuncionales, cada taller tiene una temática especial con el propósito de desarrollar diferentes habilidades a fin de potencializar el proceso terapéutico de la pareja."
    },
    {
      srcT : `../img/servicios/crianza.jpg`,
      titleT : "Taller crianza positiva",
      descT : "Conversatorios y conferencias para madres y padres sobre crianza, educación, maternidad y paternidad. Talleres de información para una maternidad y paternidad más feliz.  Organizamos talleres extraordinarios sobre otros temas de interés como adolescencia, celos entre hermanos."
    },
    {
      srcT : `../img/servicios/adicciones.jpg`,
      titleT : "Taller adicciones",
      descT : "El inicio en el consumo se produce a edades muy tempranas, entre 13 y 16 años dependiendo de la sustancia. Por lo que el trabajo preventivo hay que empezarlo en edades anteriores. El alcohol, el tabaco y el cannabis son las sustancias más consumidas en la actualidad."
    },
    {
      srcT : `../img/servicios/educativo.jpg`,
      titleT : "Taller psicoeducativo",
      descT : "Dependiendo de las necesidades del grupo, se determinan las horas y número de sesiones para trabajar el tema. Este apartado está disponible para grupos de instituciones educativas u organizaciones."
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
              <a href="#" class="btn btn-col">Agendar</a>
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