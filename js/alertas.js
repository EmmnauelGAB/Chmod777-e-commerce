

// function validacionForm(newService,description){ //PARAMETRO PRECIO NOMBRE
//     let newService1 = newService.value;
//     let description1 = description.value;

    
//     if(newService1 === "" || description1 === ""){
        
//         newService1.classList.add("is-invalid");

//         description1.classList.add("is-invalid");

//     }else{

//         description1.classList.add("is-valid");
//         newService1.classList.add("is-valid");

       
//     };
//  };
// function crearAlertasSI (){
//     let alertaSI1=`
//     <div id="alertaSI" class="alert alert-primary" role="alert">Servicio Agregado</div>
                    
//     `;
//     return alertaSI1;
// }
// function crearAlertasNO(){
//     let alertaNO1= `
//     <div id="alertaNo" class="alert alert-primary" role="alert">Completa todos los campos</div>
//     `;
//     return alertaNO1;
    
// }
// let formAddProduct = document.getElementById("form-servicio");

// let newService2 = document.getElementById("newService"); //HOSTING DONDE VIVEN ESTOS VARIABLES; SON DISTINTAS A LAS DE ARRIBA
// let description2 =  document.getElementById("description");
// let ancla = document.getElementById("wrapper");


// formAddProduct.addEventListener("submit",(evento)=>{

//     evento.preventDefault();
//     validacionForm(newService2,description2);
//     let newService3 = newService2.value;
//     let description3 = description2.value;
//         if(newService3 ==="" || description3===""){
//    let nuevaAlert= crearAlertasNO();
//    ancla.innerHTML = nuevaAlert;
//         }else{
//             let nuevaAlert1 = crearAlertasSI();
//             ancla.innerHTML = nuevaAlert1;
//         }
// });



$(document).ready(function(){  //funcion de alertas
    $("#alertaSI").hide();
    $("#alertaNO").hide();  //ocultar alertas
    e.preventDefault(); // al presionar boton agregar producto, no se recargue la pagina
    $("#form1").submit(function(e){
        e.preventDefault(); //NO recargar la pagina al submit boton "Agregar servicio"
       servicio = $.trim($("#newService").val());
       descripcion = $.trim($("#description").val());
       if(newService.length>0 && descripcion.length>0){
           $("#alertaSI").fadeTo(2000, 500).slideUp(500, function(){
               $("#alertaSI").slideUp(500);
           });
       }else{
           $("#alertaNO").fadeTo(2000, 500).slideUp(500, function(){
               $("#alertaNO").slideUp(500);
           });
       }
    });
});