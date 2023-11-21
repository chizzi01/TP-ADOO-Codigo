const { Ubicacion } = require("./Ubicacion");

const TipoEjemplar = {
    Revista: "Revista",
    RevistaEspecializada: "Revista Especializada",
    Diario: "Diario",
    Libro: "Libro",
  };
  
  class Ejemplar extends Ubicacion {
    #titulo;
    #autor;
    #descripcion;
    #fechaPublicacion;
    #tipoEjemplar;
    constructor(titulo, autor, descripcion, fechaPublicacion, tipoEjemplar, sucursal, direccion, zona) {
      super(sucursal, direccion, zona);
      this.#titulo = titulo;
      this.#autor = autor;
      this.#descripcion = descripcion;
      this.#fechaPublicacion = fechaPublicacion;
      this.#tipoEjemplar = tipoEjemplar;
    }
  
    diasPrestamo() {
      if (this.#tipoEjemplar === TipoEjemplar.RevistaEspecializada || this.#tipoEjemplar === TipoEjemplar.Revista || this.#tipoEjemplar === TipoEjemplar.Diario) {
        return 5;
      }
      if (this.#tipoEjemplar === TipoEjemplar.Libro) {
        return 10;
      }
      return 0; 
    }
    
  
    solicitar(solicitarEjemplar) {
      console.log(`Solicitando ejemplar: ${this.#titulo}`);
      solicitarEjemplar.solicitarEjemplar(this);
    }
  
    calcularPrestamo() {
      console.log(`El préstamo de "${this.#titulo}" es de ${this.diasPrestamo()} días.`);
    }

    obtenerUbicacion() {
      console.log(`Ubicación del ejemplar: ${this.getTitulo()}`);
      console.log(`Sucursal: ${this.getSucursal()}`);
      console.log(`Dirección: ${this.getDireccion()}`);
      console.log(`Zona: ${this.getZona()}`);
    }
    
    cargarEjemplar(){
      console.log(`Cargando ejemplar: ${this.#titulo}`);
      console.log(`Autor: ${this.#autor}`);
      console.log(`Descripción: ${this.#descripcion}`);
      console.log(`Fecha de publicación: ${this.#fechaPublicacion}`);
      console.log(`Tipo de ejemplar: ${this.#tipoEjemplar}`);
      console.log(`El ejemplar "${this.#titulo}" se ha cargado correctamente`);

    }

    // Getters 
    getTitulo() {
      return this.#titulo;
    }
    
    getAutor() {
      return this.#autor;
    }

    getDescripcion() {
      return this.#descripcion;
    }

    getFechaPublicacion() {
      return this.#fechaPublicacion;
    }

    getTipoEjemplar() {
      return this.#tipoEjemplar;
    }



  }

  module.exports = Ejemplar;
  module.exports.TipoEjemplar = TipoEjemplar;
  
