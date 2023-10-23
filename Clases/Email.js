class MensajeEmail extends iStrategyMensaje {
    enviarMensaje(mensaje, socios) {
      console.log('Enviando mensaje por correo electrónico:');
      socios.forEach((socio) => {
        console.log(`Correo electrónico enviado a ${socio}: ${mensaje}`);
      });
    }
  }