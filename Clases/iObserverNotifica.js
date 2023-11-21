// Interfaz Observer
const MedioMensaje = require('../Clases/MedioMensaje');

class iObserverNotifica {
    update(mensaje) {
      console.log(`Observador 1: ${mensaje}`);
    }

    notificarEstado(mensaje, medioNotificacion) {
      console.log(`Notificando estado de prestamo: ${mensaje}`);
      console.log(`Notificando por medio: ${medioNotificacion}`);
    }

  }
  
  module.exports = iObserverNotifica;