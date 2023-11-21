class Prestamo {
    constructor(idPrestamo, fechaPrestamo, socio, ejemplar) {
      this.idPrestamo = idPrestamo;
      this.fechaPrestamo = fechaPrestamo;
      this.socio = socio;
      this.ejemplar = ejemplar;
      this.prestamoDetalle = null;
    }
  

    generarPrestamoDetalle(fechaVencimiento, parametrosPrestamo) {
      this.prestamoDetalle = new PrestamoDetalle(
        this.idPrestamo,
        fechaVencimiento,
        null, 
        'Activo',
        parametrosPrestamo
      );
    }
  

    devolucion(fechaDevolucion) {
      if (this.prestamoDetalle) {
        this.prestamoDetalle.fechaDevolucion = fechaDevolucion;
        this.prestamoDetalle.estado = 'Devuelto';
        this.prestamoDetalle.notificarObservadores('El préstamo ha sido devuelto');
      }
    }
  }

module.exports = Prestamo;
  
