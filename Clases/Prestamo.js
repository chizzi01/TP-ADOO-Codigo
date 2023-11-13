class Prestamo {
    constructor(idPrestamo, fechaPrestamo, socio, ejemplar) {
      this.idPrestamo = idPrestamo;
      this.fechaPrestamo = fechaPrestamo;
      this.socio = socio;
      this.ejemplar = ejemplar;
      this.prestamoDetalle = null;
    }
  
    // Método para generar un objeto PrestamoDetalle
    generarPrestamoDetalle(fechaVencimiento, parametrosPrestamo) {
      this.prestamoDetalle = new PrestamoDetalle(
        this.idPrestamo,
        fechaVencimiento,
        null, // La fecha de devolución se establecerá después
        'Activo',
        parametrosPrestamo
      );
    }
  
    // Método para registrar la devolución
    devolucion(fechaDevolucion) {
      if (this.prestamoDetalle) {
        this.prestamoDetalle.fechaDevolucion = fechaDevolucion;
        this.prestamoDetalle.estado = 'Devuelto';
        this.prestamoDetalle.notificarObservadores('El préstamo ha sido devuelto');
      }
    }
  }
  

  // Ejemplo de uso
// const socio = new Socio(1, 'Juan', 'Pérez');
// const ejemplar = 'Libro - Título del libro';

// const prestamo = new Prestamo(1, new Date(), socio, ejemplar);
// const fechaVencimiento = new Date(); // Fecha de vencimiento simulada

// prestamo.generarPrestamoDetalle(fechaVencimiento, 'Parámetros del préstamo');

// console.log('Préstamo activo:', prestamo.prestamoDetalle);

// // Simulación de devolución
// const fechaDevolucion = new Date();
// prestamo.devolucion(fechaDevolucion);

// console.log('Préstamo devuelto:', prestamo.prestamoDetalle);
