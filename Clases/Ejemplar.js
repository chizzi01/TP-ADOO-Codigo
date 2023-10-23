import { Libro } from "./Libro.js";

// Enumeración para los tipos de ejemplar
const TipoEjemplar = {
    Revista: "Revista",
    RevistaEspecializada: "Revista Especializada",
    Diario: "Diario",
    Libro: "Libro",
  };
  
  class Ejemplar extends Ubicacion {
    constructor(titulo, autor, descripcion, fechaPublicacion, TipoEjemplar , sucursal, direccion, zona) {
      super(sucursal, direccion, zona);
      this.titulo = titulo;
      this.autor = autor;
      this.descripcion = descripcion;
      this.fechaPublicacion = fechaPublicacion;
      this.tipoEjemplar = TipoEjemplar;
    }
  
    diasPrestamo() {
      if(this.tipoEjemplar === TipoEjemplar.RevistaEspecializada || this.tipoEjemplar === TipoEjemplar.Revista || this.tipoEjemplar === TipoEjemplar.Diario ){
        return 5;
      }
      if(this.tipoEjemplar === TipoEjemplar.Libro){
        return 10;
      }
      // Implementa la lógica para calcular los días de préstamo
    }
  
    solicitar(solicitarEjemplar) {
      // Implementa la lógica para solicitar un ejemplar
      console.log(`Solicitando ejemplar: ${this.titulo}`);
      solicitarEjemplar.solicitarEjemplar(this);
    }
  
    calcularPrestamo() {
      // Implementa la lógica para calcular el préstamo
      const diasPrestamo = this.diasPrestamo();
      console.log(`El préstamo de "${this.titulo}" es de ${diasPrestamo} días.`);
    }
  }
  
  
// Ejemplo de uso
const ubicacionTienda = new Ubicacion('Tienda 1', 'Calle Principal', 'Zona A');

const ejemplar = new Ejemplar('Título del Ejemplar', 'Autor del Ejemplar', 'Descripción', new Date(), ubicacionTienda.sucursal, ubicacionTienda.direccion, ubicacionTienda.zona);

ejemplar.calcularPrestamo();
ejemplar.obtenerUbicacion('Tienda 1');

// Clase para solicitar ejemplares
class SolicitarEjemplar {
  solicitarEjemplar(ejemplar) {
    console.log(`Solicitud realizada para ejemplar: ${ejemplar.titulo}`);
  }
}

const solicitarEjemplar = new SolicitarEjemplar();

ejemplar.solicitar(solicitarEjemplar);
