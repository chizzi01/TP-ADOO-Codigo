// Subclase Revista de Ejemplar
class Revista extends Ejemplar {
    constructor(titulo, autor, descripcion, fechaPublicacion, ubicacion) {
      super(titulo, autor, descripcion, TipoEjemplar.Revista, fechaPublicacion, ubicacion);
      this.dias = 5; 
    }
  

    prestamo() {
      console.log(`Prestando la revista: ${this.titulo}`);
    }
  }
  