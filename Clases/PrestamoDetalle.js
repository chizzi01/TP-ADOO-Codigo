// Clase PrestamoDetalle

class PrestamoDetalle {
  // Constructor de la clase
  #idPrestamo;
  #fechaVencimiento;
  #fechaDevolucion;
  #estado;
  #parametrosPrestamo;
  constructor(idPrestamo, fechaVencimiento, fechaDevolucion, estado, parametrosPrestamo) {
    this.#idPrestamo = idPrestamo;
    this.#fechaVencimiento = fechaVencimiento;
    this.#fechaDevolucion = fechaDevolucion;
    this.#estado = estado;
    this.#parametrosPrestamo = parametrosPrestamo;
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
  actualizarEstado(estadoNuevo) {
    this.#estado = estadoNuevo;
    // Notificar a los observadores sobre el cambio de estado
    this.notificarObservadores(`El libro está en estado: ${estadoNuevo}`);
    console.log(`El libro está en estado de: ${this.#estado}`);
    console.log(`Fecha hoy: ${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`);
    console.log(`Fecha de vencimiento: ${this.#fechaVencimiento}`);

  }

  getIdPrestamo() {
    return this.#idPrestamo;
  }

  getFechaVencimiento() {
    return this.#fechaVencimiento;
  }

  getFechaDevolucion() {
    return this.#fechaDevolucion;
  }

  getEstado() {
    return this.#estado;
  }

  getParametrosPrestamo() {
    return this.#parametrosPrestamo;
  }
}

// Ejemplo de uso
// const prestamoDetalle = new PrestamoDetalle(1, new Date(), null, new NoDisponible(), 'Parámetros del préstamo');

// // Agregar observador (puede ser una instancia de Observador)
// const observador1 = {
//   actualizar: (mensaje) => {
//     console.log(`Observador 1: ${mensaje}`);
//   },
// };
// prestamoDetalle.agregarObservador(observador1);

// console.log('Estado actual:', prestamoDetalle.estado.constructor.name);

// // Cambiar el estado
// prestamoDetalle.cambiarEstado(new Devueltos());
// prestamoDetalle.cambiarEstado(new FueraDeTermino());
module.exports = PrestamoDetalle;