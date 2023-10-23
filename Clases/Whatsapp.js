class MensajeWhatsapp extends iStrategyMensaje {
    enviarMensaje(mensaje, socios) {
      console.log('Enviando mensaje por Whatsapp:');
      socios.forEach((socio) => {
        console.log(`Whatsapp enviado a ${socio}: ${mensaje}`);
      });
    }
  }