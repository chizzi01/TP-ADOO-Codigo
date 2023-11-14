// Interfaz Observer
const MedioMensaje = require('../Clases/MedioMensaje');

class iObserverNotifica {
    update(mensaje) {
      console.log(`Observador 1: ${mensaje}`);
      // Método que será implementado por las clases que observan
    }

    notificarEstado(mensaje, medioNotificacion) {
      console.log(`Notificando estado de prestamo: ${mensaje}`);
      console.log(`Notificando por medio: ${medioNotificacion}`);
      // Método que será implementado por las clases que observan
    }

  }
  
  module.exports = iObserverNotifica;