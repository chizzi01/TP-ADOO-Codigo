// Clase PaqueteEjemplares
class PaqueteEjemplares extends Ejemplar {
    constructor(tipoEjemplar) {
      super("Paquete de Ejemplares", "PaqueteAutor", "Descripción del paquete", tipoEjemplar, "2023-01-01", "Ubicación del paquete");
      this.ejemplares = [];
    }

    agregar(ejemplar) {
      if (ejemplar.tipoEjemplar === this.tipoEjemplar) {
        this.ejemplares.push(ejemplar);
        console.log(`Agregado un ejemplar de tipo ${this.tipoEjemplar} al paquete.`);
      } else {
        console.log(`No se puede agregar un ejemplar de tipo ${ejemplar.tipoEjemplar} al paquete de tipo ${this.tipoEjemplar}.`);
      }
    }
  

    eliminar(ejemplar) {
      const index = this.ejemplares.indexOf(ejemplar);
      if (index !== -1) {
        this.ejemplares.splice(index, 1);
        console.log(`Eliminado un ejemplar del paquete.`);
      } else {
        console.log(`El ejemplar no está en el paquete.`);
      }
    }
  

    prestamo() {
      if (this.ejemplares.length === 0) {
        console.log(`No hay ejemplares de tipo ${this.tipoEjemplar} en el paquete.`);
      } else {
        console.log(`Solicitando préstamo de ${this.ejemplares.length} ejemplares de tipo ${this.tipoEjemplar} en el paquete:`);
        this.ejemplares.forEach((ejemplar) => {
          ejemplar.solicitarEjemplar();
        });
      }
    }
  }
  