// Clase Sujeto que implementa Observer
const iObserverNotifica = require('./iObserverNotifica');

class Sujeto extends iObserverNotifica {
  constructor() {
    super();
    this.notificaSocios = [];
  }

  agregarUsuario(usuario) {
    this.notificaSocios.push(usuario);
  }

  quitarUsuario(usuario) {
    const index = this.notificaSocios.indexOf(usuario);
    if (index !== -1) {
      this.notificaSocios.splice(index, 1);
    }
  }

  notificarEstado(mensaje, medioNotificacion) {
    console.log(`Notificando estado de prestamo al observer: ${mensaje}`);
    console.log(`Notificando por medio al observer: ${medioNotificacion}`);

  }

  observerNotifica(mensaje) {
    console.log(`Notificando a los socios:`);
    this.notificaSocios.forEach((socio) => {
      socio.recibirNotificacion(mensaje);
    });
    
  }
}

module.exports = Sujeto;