document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#form").addEventListener('submit', validarFormulario); 
});


function validarFormulario(evento) {
    evento.preventDefault();
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let message = document.querySelector('#message').value;

    if(name.length < 2) {
      alert('El nombre debe contener al menos 3 carácteres.');
      return;
    }
    if (!(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email))){
        alert('Debe ingresar un E-mail válido.');
        return;
    }
    if (message.length < 6) {
      alert('El mensaje debe contener al menos 6 carácteres para que podamos entenderlo.');
      return;
    }
    alert('Formulario enviado exitosamente.')
    this.submit();
};