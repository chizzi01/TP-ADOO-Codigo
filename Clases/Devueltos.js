// Clase Devueltos
class Devueltos extends EstadosLibros {
    libroDevuelto(prestamoDetalle) {
      console.log('El libro ha sido devuelto.');
    }
  
    libroNoDisponible(prestamoDetalle) {
      // No implementa la lógica para libros no disponibles en este estado
    }
  
    libroFueraDeTermino(prestamoDetalle) {
      // No implementa la lógica para libros fuera de término en este estado
    }
  }