

let servicios =[
    {
       src : `https://picsum.photos/${500}`,
       title: "Psicoterapia individual",
       desc : "Cuando te encuentras en una situacion difícil de sobrellevar, no es facil pedir ayuda, pero cuando te encuentras un espacio para ti en terapia, se vuelve un momento para crecer y descubrirte desde la profundidad. Desde ahí, trabajaremos juntos."
    },
    {
      src : `https://picsum.photos/${500}`,
      title: "Psicoterapia de pareja",
      desc : "Las dificultades en la pareja son una etapa en toda relación, acudir a terapia puede representar la oportunidad de escucharse y entenderse desde una comunicación que les permita verse más allá de lo que viven en el presente."
   },
   {
    src : `https://picsum.photos/${500}`,
    title: "Psicoterapia para adolescentes",
    desc : " Las etapas de crecimiento de la vida son mejores cuando se tiene el espacio para poder experimentarlas y entenderlas; la adolescencia es una etapa crucial para el desarrollo tanto del paciente como de sus familiares. Investiguemos ¿cuál será nuestra línea de trabajo?."
  },
  {
    src : `https://picsum.photos/${500}`,
    title: "Psicoterapia grupal",
    desc : "El trabajo clínico de uno, se complementa a través de la experiencia y el trabajo de todos. Es así como el grupo es curativo en sí mismo, y qué mejor con la compañía de un especialista que puede guiarlos a descubrirse mejor."
  },
  {
    src : `https://picsum.photos/${500}`,
    title: "Psicoterapia grupal para mamás",
    desc : "Es un espacio diseñado para el trabajo clínico de la maternidad y de lo que implica ser y vivirse como madres y mujeres; se trabaja con las vivencias, aprendizajes y dificultades que el maternar conlleva. "
  }

  
  ];

  //crearCard Servicios
  function crearCard(src,title,desc){
    //crear mi plantilla
    //regresar mi plantilla
    let myCard= `
    <div class="card" style="width: 14rem;">
  <img src="${src}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${desc}</p>
    <a href="#" class="btn btn-primary">Agendar</a>
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
       srcT : `https://picsum.photos/${500}`,
       titleT : "taller reflexivo madres",
       descT : "DESCRIPCION"
    },
    {
      srcT : `https://picsum.photos/${500}`,
      titleT : "taller parejas",
      descT : "DESCRIPCION"
   },
   {
    srcT : `https://picsum.photos/${500}`,
    titleT : "taller crianza positiva",
    descT : "DESCRIPCION"
  },
  {
    srcT : `https://picsum.photos/${500}`,
    titleT : "Taller adicciones",
    descT : "DESCRIPCION"
  }

  
  ];
  
 



//crearCard Taller
function crearCardTaller(srcT,titleT,descT){
    //crear mi plantilla
    //regresar mi plantilla
    let myCardTaller= `
    <div class="card" style="width: 14rem;">
  <img src="${srcT}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${titleT}</h5>
    <p class="card-text">${descT}</p>
    <a href="#" class="btn btn-primary">Agendar</a>
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