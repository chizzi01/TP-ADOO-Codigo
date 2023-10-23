// Clase FueraDeTermino
class FueraDeTermino extends iEstadosLibros {
    libroDevuelto(prestamoDetalle) {
      // No implementa la lógica para libros devueltos en este estado
    }
  
    libroNoDisponible(prestamoDetalle) {
      // No implementa la lógica para libros no disponibles en este estado
    }
  
    libroFueraDeTermino(prestamoDetalle) {
      console.log('El libro está fuera de término.');
    }
  }