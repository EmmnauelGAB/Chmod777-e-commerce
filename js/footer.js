//Declara los elementos del footer
         const title = `NUESTRAS REDES`;
         const fb = `https://www.facebook.com/DanikaMorenoPsicologa`;
         const wa = `https://wa.me/message/KAK7AQLR7BU2F1`;
         const ins = `https://instagram.com/platicaloconpsic.danika?r=nametag`;
         const lk = `https://www.linkedin.com/in/danikamoreno/`;
         const email = `mailto:danika.moreno@gmail.com`;
         const des = `&copy; 2022 PLATÍCALO CON PSIC. DÁNIKA - Todos los Derechos Reservados.`;

  //Crear el footer
    let myfooter= `<h5 class="titleFooter text-center">${title}</h5>
    <div class="footerStyle">
     <ul>
       <li><a href= "${fb}" class="icon" target="_blank"><i class="fa-brands fa-facebook-f"></i></a></li>
       <li><a href= "${wa}" class="icon"  target="_blank"><i class="fa-brands fa-whatsapp"></i></a></li>
       <li><a href= "${ins}" class="icon" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
       <li><a href= "${lk}" class="icon"  target="_blank"><i class="fa-brands fa-linkedin-in"></i></a></li>
       <li><a href= "${email}" class="icon" target="_blank"><i class="fa-solid fa-envelope"></i></a></li>
     </ul>
   </div>
    <div class="footerStyleD">
      <small>${des}</small>
    </div>
    <!--Botón arriba-->
    <button class="btn-scrolltop" id="btn_scrolltop">
      <i class="fa-solid fa-chevron-up"></i>
    </button>`

    
//Muestra el footer en pantalla
anclaFooter.innerHTML = myfooter;