// Subclase Revista de Ejemplar
class Revista extends Ejemplar {
    constructor(titulo, autor, descripcion, fechaPublicacion, ubicacion) {
      super(titulo, autor, descripcion, TipoEjemplar.Revista, fechaPublicacion, ubicacion);
      this.dias = 5; // Número de días de préstamo fijo para Revistas
    }
  
    // Método para realizar un préstamo de la revista
    prestamo() {
      console.log(`Prestando la revista: ${this.titulo}`);
    }
  }
  
  // Ejemplo de uso de la clase Revista
  const revista = new Revista("Revista de Ciencia", "Editorial XYZ", "Edición de octubre 2023", "2023-10-01", "Sección B");
  
  console.log(`Título: ${revista.titulo}`);
  console.log(`Tipo de Ejemplar: ${revista.tipoEjemplar}`);
  console.log(`Días de Préstamo: ${revista.dias}`);
  revista.prestamo();
  