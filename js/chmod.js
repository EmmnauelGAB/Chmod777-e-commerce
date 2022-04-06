
let acerca =[
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
      //-------------EMMANUEL-------------------
      {
        src : `../img/fotos/Emmanuel.png`,
        title: "Emmanuel",
        desc : "Como persona organizada y con una gran motivación, soy capaz de adaptarme a cualquier circunstancia y dar siempre lo mejor de mí en cualquier proyecto, al mismo tiempo que me esfuerzo por trabajar en equipo y fomentar valores como los del compañerismo.",
        des2 : "Desarrollador Java FullStack",
        lk : `https://www.linkedin.com/in/egab/`,
        git : `https://github.com/EmmnauelGAB`,
        wapp : `https://api.whatsapp.com/send?phone=5561160225`,
        email : `mailto:emmanuelgarciabarron0@gmail.com`,
       },
       //-------------VICTOR-------------------
       {
        src : `../img/fotos/Victor.png`,
        title: "Victor",
        desc : "Estudiante de Ingeniería en Sistemas Computacionales. Me he desempeñado en puestos administrativos relacionados con la informática, pretendo un trabajo donde pueda desarrollar todo mi potencial tanto personal como profesional. Asistente de sistemas, Auxiliar administrativo, Monitorista GPS son algunos de los puestos más destacados que he desempeñado.",
        des2 : "Desarrollador Java FullStack",
        lk : `https://www.linkedin.com/in/victor-toriz-90/`,
        git : `https://github.com/VictorToriz`,
        wapp : `https://api.whatsapp.com/send?phone=5536956659`,
        email : `mailto:victor.toriz.90@gmail.com`,  
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
       //-------------EDUARDO-------------------
       {
        src : `../img/fotos/Eduardo.png`,
        title: "Eduardo",
        desc : "Actualmente estudio Ingeniería en Sistemas Computacionales, pertenezco a una academia enfocada al desarrollo de videojuegos y soy parte de diversos bootcamps de developers.  Me apasiona crear cosas por medio de la programación y el arte digital. Me gusta experimentar, innovar, resolver problemas de manera óptima y me fascina aprender cosas nuevas. Creo firmemente   que “El único límite es tu imaginación”",
        des2 : "Desarrollador Java FullStack",
        lk : `https://www.linkedin.com/in/eduantvarmau/`,
        git : `https://github.com/eduantvarmau`,
        wapp : `https://api.whatsapp.com/send?phone=5579111838`,
        email : `mailto:eduant.varmau@gmail.com`,
       },

  
  ];

  //Arreglos ordenados de forma aleatoria con el método sort https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  //a, b sirve para comparar dos elementos del arreglo entre si, por ejemplo
  // <  0  -> a esta en un índice menor que b .
  // = 0 a y b son iguales.
  // > 0 -> a esta en un índice mayor que b .
  //El  -0.5 funciona para que el meto Math no nos devuelva un valor menor a 0 no evitara que no nos entregue los arreglos en el mismo orden
  acerca.sort((a,b)=> Math.random(8)-0.5)

  //crearCard Nosotros
  function crearCard(src,title,desc,des2,lk,git,wapp,email){
    let myCard= `<div class="row align-items-center h-100">
    <div class="col-lg-8 col-md-8 col-sm-8 mx-auto mt-5 pt-5 pb-5">
      <div class="card-section border rounded p-1">
        <div class="card-header-first rounded pb-5">
          <img id="imagen" src="${src}" alt="Sara" class="mx-auto d-block"  />
        </div>
        <div class="card-body text-center cardStyleC">
            <h2 class="card-header-title pt-4">${title}</h2>
            <p class="card-text text-justify pt-2">${desc}</p>
            <p class="card-text text-center">${des2}</p>
            <hr id="line">
            <div class="footerStyleCard">
            <ul>
              <li><a href= "${lk}"  class="icon" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a></li>
              <li><a href= "${git}" class="icon" target="_blank"><i class="fa-brands fa-github"></i></a></li>
              <li><a href= "${wapp}" class="icon"  target="_blank"><i class="fa-brands fa-whatsapp"></i></a></li>
              <li><a href= "${email}" class="icon" target="_blank"><i class="fa-solid fa-envelope"></i></a></li>
            </ul>
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
        let anclaacerca = document.getElementById('nosotros'); //TRAER ELEMENTO
        let container = '';

        for(let i=0 ; i<acerca.length; i++){

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