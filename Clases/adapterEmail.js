class AdapterEmail {
    constructor(email) {
      this.email = email;
    }
  
    enviarMensaje(destinatario, mensaje) {
      this.email.enviarCorreo(destinatario, mensaje);
    }
  }