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
  }
  