// Clase Sujeto que implementa Observer
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

  observerNotifica(mensaje) {
    console.log(`Notificando a los socios:`);
    this.notificaSocios.forEach((socio) => {
      socio.recibirNotificacion(mensaje);
    });
  }
}