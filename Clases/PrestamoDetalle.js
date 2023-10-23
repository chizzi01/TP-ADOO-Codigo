// Clase PrestamoDetalle
class PrestamoDetalle {
  constructor(idPrestamo, fechaVencimiento, fechaDevolucion, estado, parametrosPrestamo) {
    this.idPrestamo = idPrestamo;
    this.fechaVencimiento = fechaVencimiento;
    this.fechaDevolucion = fechaDevolucion;
    this.estado = estado;
    this.parametrosPrestamo = parametrosPrestamo;
    this.observadores = [];
  }

  // Método para agregar un observador
  agregarObservador(observador) {
    this.observadores.push(observador);
  }

  // Método para notificar a los observadores
  notificarObservadores(mensaje) {
    this.observadores.forEach((observador) => {
      observador.actualizar(mensaje);
    });
  }

  // Método para cambiar el estado
  cambiarEstado(estadoNuevo) {
    this.estado = estadoNuevo;
    // Notificar a los observadores sobre el cambio de estado
    this.notificarObservadores(`El libro está en estado: ${estadoNuevo.constructor.name}`);
  }
}

// Ejemplo de uso
const prestamoDetalle = new PrestamoDetalle(1, new Date(), null, new NoDisponible(), 'Parámetros del préstamo');

// Agregar observador (puede ser una instancia de Observador)
const observador1 = {
  actualizar: (mensaje) => {
    console.log(`Observador 1: ${mensaje}`);
  },
};
prestamoDetalle.agregarObservador(observador1);

console.log('Estado actual:', prestamoDetalle.estado.constructor.name);

// Cambiar el estado
prestamoDetalle.cambiarEstado(new Devueltos());
prestamoDetalle.cambiarEstado(new FueraDeTermino());
