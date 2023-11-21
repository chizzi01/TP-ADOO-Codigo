
class Diario extends Ejemplar {
    constructor(titulo, autor, descripcion, fechaPublicacion, ubicacion) {
      super(titulo, autor, descripcion, TipoEjemplar.diario, fechaPublicacion, ubicacion);
      this.dias = 5; 
    }
  

    prestamo() {
      console.log(`Prestando la diario: ${this.titulo}`);
    }
  }
  

  const diario = new diario("diario de Ciencia", "Editorial XYZ", "Edición de octubre 2023", "2023-10-01", "Sección B");
  
  console.log(`Título: ${diario.titulo}`);
  console.log(`Tipo de Ejemplar: ${diario.tipoEjemplar}`);
  console.log(`Días de Préstamo: ${diario.dias}`);
  diario.prestamo();
  