(function() {
    
    window.addEventListener('load', function() {
      //  Traer formulario por validar
      let forms = document.getElementsByClassName('formsLogin');
      // bucle de validacion
      let validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
