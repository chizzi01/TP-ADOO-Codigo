
class revistaEspecializadaEspecializada extends Ejemplar {
    constructor(titulo, autor, descripcion, fechaPublicacion, ubicacion) {
      super(titulo, autor, descripcion, TipoEjemplar.revistaEspecializada, fechaPublicacion, ubicacion);
      this.dias = 5; 
    }
  

    prestamo() {
      console.log(`Prestando la revistaEspecializada: ${this.titulo}`);
    }
  }
  

  