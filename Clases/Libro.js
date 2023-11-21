// Subclase Libro de Ejemplar
class Libro extends Ejemplar {
    constructor(titulo, autor, descripcion, fechaPublicacion, ubicacion) {
      super(titulo, autor, descripcion, TipoEjemplar.Libro, fechaPublicacion, ubicacion);
      this.dias = 10; 
    }

    prestamo() {
      console.log(`Prestando la Libro: ${this.titulo}`);
    }
  }

  const Libro = new Libro("Libro de Ciencia", "Editorial XYZ", "Edición de octubre 2023", "2023-10-01", "Sección B");
  
  console.log(`Título: ${Libro.titulo}`);
  console.log(`Tipo de Ejemplar: ${Libro.tipoEjemplar}`);
  console.log(`Días de Préstamo: ${Libro.dias}`);
  Libro.prestamo();
  