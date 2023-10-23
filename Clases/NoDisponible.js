// Clase NoDisponible
class NoDisponible extends iEstadosLibros {
  libroDevuelto(prestamoDetalle) {
    // No implementa la lógica para libros devueltos en este estado
  }

  libroNoDisponible(prestamoDetalle) {
    console.log('El libro sigue no disponible.');
  }

  libroFueraDeTermino(prestamoDetalle) {
    // No implementa la lógica para libros fuera de término en este estado
  }
}
