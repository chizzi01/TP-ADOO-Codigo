// Subclase revistaEspecializada de Ejemplar
class revistaEspecializadaEspecializada extends Ejemplar {
    constructor(titulo, autor, descripcion, fechaPublicacion, ubicacion) {
      super(titulo, autor, descripcion, TipoEjemplar.revistaEspecializada, fechaPublicacion, ubicacion);
      this.dias = 5; // Número de días de préstamo fijo para revistaEspecializadas
    }
  
    // Método para realizar un préstamo de la revistaEspecializada
    prestamo() {
      console.log(`Prestando la revistaEspecializada: ${this.titulo}`);
    }
  }
  
  // Ejemplo de uso de la clase revistaEspecializada
  const revistaEspecializada = new revistaEspecializada("revistaEspecializada de Ciencia", "Editorial XYZ", "Edición de octubre 2023", "2023-10-01", "Sección B");
  
  console.log(`Título: ${revistaEspecializada.titulo}`);
  console.log(`Tipo de Ejemplar: ${revistaEspecializada.tipoEjemplar}`);
  console.log(`Días de Préstamo: ${revistaEspecializada.dias}`);
  revistaEspecializada.prestamo();
  