class MensajeSMS extends iStrategyMensaje {
    enviarMensaje(mensaje, socios) {
      console.log('Enviando mensaje por SMS:');
      socios.forEach((socio) => {
        console.log(`SMS enviado a ${socio}: ${mensaje}`);
      });
    }
  }