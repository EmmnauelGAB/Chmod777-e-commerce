let servicios = JSON.parse(localStorage.getItem('services'));

//crearCard Servicios

        function crearCard(title,description,image){
            let myCard = `
            <div class="col mb-4"
            <div class="card">
                    <img src="./../img/serv/${image}" class="card-img-top alt="...">
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

let taller = JSON.parse(localStorage.getItem('talleres'));

//crearCard Talleres
function crearCardTaller(title,description,image) {
let myCardTaller = `
<div class="col mb-4"
  <div class="card">
          <img src="./../img/serv/${image}" class="card-img-top" alt="...">
        <div class="card-body card-bodyy">
          <h5 class="card-titles">${title}</h5>
          <p class="card-texts">${description}</p>
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

        let title = taller[j].title;
        let image = taller[j].image;
        let description = taller[j].description;

        containerTaller += crearCardTaller(title, description, image);
        anclataller.innerHTML = containerTaller;
    }
}
mostrarElementosTaller(taller);






