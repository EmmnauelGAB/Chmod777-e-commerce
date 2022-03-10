
let acerca =[
      //-------------SARA-------------------
    {
       src : `../img/fotos/Sara.png`,
       title: "Sara",
       desc : "Socióloga, amante de la tecnología, los idiomas y el diseño. Experiencia laboral como asistente administrativo senior, diplomado en enseñanza de idiomas y diseño; hablo alemán,ingles y español (nociones de francés).",
       des2 : "Desarrolladora Java FullStack",
       lk : `#`,
       git : `https://github.com/saragami`,
       wapp : `#`,
       email : `#`,
      },
      //-------------EMMANUEL-------------------
      {
        src : `../img/fotos/Emmanuel.png`,
        title: "Emmanuel",
        desc : "Como persona organizada y con una gran motivación, soy capaz de adaptarme a cualquier circunstancia y dar siempre lo mejor de mí en cualquier proyecto, al mismo tiempo que me esfuerzo por trabajar en equipo y fomentar valores como los del compañerismo.",
        des2 : "Desarrolladora Java FullStack",
        lk : `https://www.linkedin.com/in/egab/`,
        git : `https://github.com/EmmnauelGAB`,
        wapp : `https://api.whatsapp.com/send?phone=5561160225`,
        email : `mailto:emmanuelgarciabarron0@gmail.com`,
       },
       //-------------ALINE-------------------
       {
        src : `../img/fotos/Aline.png`,
        title: "Aline",
        desc : "Soy psicóloga y me gusta aprender cosas nuevas que me ayuden a darle una perspectiva nueva a mis conocimientos. Me considero una persona alegre, tranquila y que siempre gusta de enfrentar nuevos desafíos.",
        des2 : "Desarrolladora Java FullStack",
        lk : `#`,
        git : `#`,
        wapp : `#`,
        email : `#`,
       },
       //-------------VICTOR-------------------
       {
        src : `../img/fotos/Victor.png`,
        title: "Victor",
        desc : "Estudiante de Ingeniería en Sistemas Computacionales. Me he desempeñado en puestos administrativos relacionados con la informática, pretendo un trabajo donde pueda desarrollar todo mi potencial tanto personal como profesional. Asistente de sistemas, Auxiliar administrativo, Monitorista GPS son algunos de los puestos más destacados que he desempeñado.",
        des2 : "Desarrolladora Java FullStack",
        lk : `https://www.linkedin.com/in/victor-toriz-90/`,
        git : `https://github.com/VictorToriz`,
        wapp : `https://api.whatsapp.com/send?phone=5536956659`,
        email : `mailto:victor.toriz.90@gmail.com`,  
       },
       //-------------FRANCISCO-------------------
       {
        src : `../img/fotos/Francisco.png`,
        title: "Francisco",
        desc : "Soy una persona creativa, en constante aprendizaje y desarrollo. Me gusta pensar de manera lógica y analítica, buscando siempre una mentalidad de crecimiento. He adquirido la habilidad de “solución de problemas” de manera eficaz, apoyándome en el trabajo en equipo, además de la retroalimentación de mis compañeros.",
        des2 : "Desarrolladora Java FullStack",
        lk : `https://www.linkedin.com/in/fjcl/`,
        git : `https://github.com/FranciscoCL13`,
        wapp : `https://api.whatsapp.com/send?phone=5574047038`,
        email : `mailto:fcontreras1311@gmail.com`,
       },
       //-------------NENEMY-------------------
       {
        src : `../img/fotos/Nenemy.png`,
        title: "Nenemy",
        desc : "Ingeniera en Sistemas y Telecomunicaciones con especialidad en redes, amante de la tecnologia y del aprendizaje continuo. Me encanta crear contenido siempre en busca de la innovacion, apasionda de terner nuevos retos por cumplir, siempre en busca de resultados positivos.",
        des2 : "Desarrolladora Java FullStack",
        lk : `https://www.linkedin.com/in/brenda-nenemy-valdez-castro-a97057194/`,
        git : `https://github.com/NenemyVc`,
        wapp : `https://api.whatsapp.com/send?phone=5552528975`,
        email : `mailto:nenemy28@gmail.com`,
       },
       //-------------JOCELIN-------------------
       {
        src : `../img/fotos/Joce.png`,
        title: "Jocelin",
        desc : " Ingeniera Biomédica y estudiante de Ingeniería en Sistemas Computacionales, soy una persona dinámica, que le encantan los retos y estar en constante aprendizaje, con facilidad de trabajo en equipo y condiciones de alta presión.",
        des2 : "Desarrolladora Java FullStack",
        lk : `https://www.linkedin.com/in/jocelin-correa/`,
        git : `https://github.com/JocelinCorrea`,
        wapp : `https://api.whatsapp.com/send?phone=5519193970`,
        email : `mailto:correajocelin8@gmail.com`,
       },
       //-------------EDUARDO-------------------
       {
        src : `../img/fotos/Eduardo.png`,
        title: "Eduardo",
        desc : "Socióloga, amante de la tecnología, los idiomas y el diseño. Experiencia laboral como asistente administrativo senior, diplomado en enseñanza de idiomas y diseño; hablo alemán,ingles y español (nociones de francés).",
        des2 : "Desarrolladora Java FullStack",
        lk : `https://www.linkedin.com/in/eduantvarmau/`,
        git : `https://github.com/eduantvarmau`,
        wapp : `https://api.whatsapp.com/send?phone=5579111838`,
        email : `mailto:eduant.varmau@gmail.com`,
       },

  
  ];

  //crearCard Nosotros
  function crearCard(src,title,desc,des2,lk,git,wapp,email){
    let myCard= `<div class="row align-items-center h-100">
    <div class="col-lg-8 col-md-8 col-sm-8 mx-auto mt-5 pt-5 pb-5">
      <div class="card-section border rounded p-1">
        <div class="card-header-first rounded pb-5">
          <img id="imagen" src="${src}" alt="Sara" class="mx-auto d-block"  />
        </div>
        <div class="card-body text-center">
            <h2 class="card-header-title pt-4">${title}</h2>
            <p class="card-text text-justify pt-2">${desc}</p>
            <p class="card-text text-center">${des2}</p>
            <hr id="line">
            <div class="social-icons">
            <a href="${lk}" target="_blank">
              <button class="button"><img class="icon" src="../img/icons/blue/linkedin.png"/></button>
              </a> 
            <a href="${git}" target="_blank"> 
              <button class="button"><img class="icon" src="../img/icons/blue/github.png"/></button>
              </a>
            <a href="${wapp}" target="_blank"> 
              <button class="button"><img class="icon" src="../img/icons/blue/whatsapp.png"/></button>
              </a>
            <a href="${email}" target="_blank"> 
              <button class="button"><img class="icon" src="../img/icons/blue/correo.png"/></button>
              </a>
            </div>      
        </div>
      </div>
    </div>
  </div>`;
    return myCard;
  }//crear mi plantilla

  //MOSTRAR CARD ACERCA
  //traer el elemento ancla 
  function mostrarElementosAcerca (acerca){
        //dibujar una card(src,title,desc,des2,lk,git,wapp,email)
        //actualizar el elemento con lo que ya tenga mas la nueva card
        //Pueda mandar un solo elemento
         anclaacerca = document.getElementById('nosotros'); //TRAER ELEMENTO
        let container = '';

        for(let i=0 ; i<acerca.length; i++){
            console.log(acerca [i].desc);

            let src = acerca [i].src;
            let title = acerca [i].title;
            let desc = acerca [i].desc;
            let des2 = acerca [i].des2;
            let lk = acerca[i].lk;
            let git = acerca[i].git;
            let wapp = acerca[i].wapp;
            let email = acerca[i].email;

            container += crearCard(src,title,desc,des2,lk,git,wapp,email);
            anclaacerca.innerHTML = container;
        }
        
        
  } //RENDERIZADO CARDS ACERCA

  mostrarElementosAcerca(acerca);