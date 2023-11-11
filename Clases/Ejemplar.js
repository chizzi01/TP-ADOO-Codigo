const { Ubicacion } = require("./Ubicacion");


// Enumeración para los tipos de ejemplar
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
      // Puedes manejar el caso predeterminado devolviendo un valor por defecto o lanzando un error según tus necesidades
      return 0; // Cambia esto según tus necesidades
    }
    
  
    solicitar(solicitarEjemplar) {
      // Implementa la lógica para solicitar un ejemplar
      console.log(`Solicitando ejemplar: ${this.#titulo}`);
      solicitarEjemplar.solicitarEjemplar(this);
    }
  
    calcularPrestamo() {
      // Implementa la lógica para calcular el préstamo
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

  module.exports = {
    Ejemplar,
    TipoEjemplar, // Si también estás exportando TipoEjemplar
  };
  
  
// Ejemplo de uso
// const ubicacionTienda = new Ubicacion('Seccion 1', 'Calle Principal', 'Zona A');

// const ejemplar = new Ejemplar('Pinocho', 'Carlo Collodi', 'Pinocho es un muñeco de madera que cobra vida.', '20/10/2023', 'Libro' ,  ubicacionTienda.sucursal, ubicacionTienda.direccion, ubicacionTienda.zona);

// ejemplar.calcularPrestamo();
// ejemplar.obtenerUbicacion('Seccion 1');

// // Clase para solicitar ejemplares
// class SolicitarEjemplar {
//   solicitarEjemplar(ejemplar) {
//     console.log(`Solicitud realizada para ejemplar: ${ejemplar.getTitulo()}`);
//   }
// }

// const solicitarEjemplar = new SolicitarEjemplar();

// ejemplar.solicitar(solicitarEjemplar);
