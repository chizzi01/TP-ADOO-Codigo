class AdapterSms {
    constructor(sms) {
      this.sms = sms;
    }
  
    enviarMensaje(destinatario, mensaje) {
      this.sms.enviarSMS(destinatario, mensaje);
    }
  }