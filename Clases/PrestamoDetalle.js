// Clase PrestamoDetalle

class PrestamoDetalle {
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

  calcularDiasRetraso() {
    const diasRetraso = Math.max(0, Math.ceil((this.#fechaVencimiento - this.#fechaDevolucion) / (1000 * 60 * 60 * 24)));
    return diasRetraso;
  }

  aplicarPenalizacion() {
    const diasRetraso = this.calcularDiasRetraso();

    if (diasRetraso > 0) {
      this.diasPrestamo -= diasRetraso;

      if (this.diasPrestamo < 0) {
        // Si el socio supera el plazo inicial, queda suspendido
        this.suspenderSocio();
      }
    }
  }

  getParametrosPrestamo() {
    return this.#parametrosPrestamo;
  }

  setParametrosPrestamo(value) {
    this.#parametrosPrestamo = value;
  }

  suspenderSocio() {
    this.socio.suspender();
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

module.exports = PrestamoDetalle;