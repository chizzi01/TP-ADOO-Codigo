class AdapterWhatsapp {
    constructor(whatsapp) {
      this.whatsapp = whatsapp;
    }
  
    enviarMensaje(destinatario, mensaje) {
      this.whatsapp.enviarMensaje(destinatario, mensaje);
    }
  }