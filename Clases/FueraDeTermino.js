// Clase FueraDeTermino
class FueraDeTermino extends iEstadosLibros {
    libroDevuelto(prestamoDetalle) {
    }
  
    libroNoDisponible(prestamoDetalle) {
    }
  
    libroFueraDeTermino(prestamoDetalle) {
      console.log('El libro está fuera de término.');
    }
  }