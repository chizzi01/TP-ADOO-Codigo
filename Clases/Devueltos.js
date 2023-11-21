// Clase Devueltos
class Devueltos extends EstadosLibros {
    libroDevuelto(prestamoDetalle) {
      console.log('El libro ha sido devuelto.');
    }
  
    libroNoDisponible(prestamoDetalle) {
    }
  
    libroFueraDeTermino(prestamoDetalle) {
    }
  }