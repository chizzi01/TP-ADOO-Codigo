// Clase PaqueteEjemplares
class PaqueteEjemplares extends Ejemplar {
    constructor(tipoEjemplar) {
      super("Paquete de Ejemplares", "PaqueteAutor", "Descripción del paquete", tipoEjemplar, "2023-01-01", "Ubicación del paquete");
      this.ejemplares = [];
    }
  
    // Método para agregar un ejemplar al paquete
    agregar(ejemplar) {
      if (ejemplar.tipoEjemplar === this.tipoEjemplar) {
        this.ejemplares.push(ejemplar);
        console.log(`Agregado un ejemplar de tipo ${this.tipoEjemplar} al paquete.`);
      } else {
        console.log(`No se puede agregar un ejemplar de tipo ${ejemplar.tipoEjemplar} al paquete de tipo ${this.tipoEjemplar}.`);
      }
    }
  
    // Método para eliminar un ejemplar del paquete
    eliminar(ejemplar) {
      const index = this.ejemplares.indexOf(ejemplar);
      if (index !== -1) {
        this.ejemplares.splice(index, 1);
        console.log(`Eliminado un ejemplar del paquete.`);
      } else {
        console.log(`El ejemplar no está en el paquete.`);
      }
    }
  
    // Método para realizar un préstamo de todos los ejemplares en el paquete
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
  
  // Ejemplo de uso:
  const paqueteLibros = new PaqueteEjemplares(TipoEjemplar.Libro);
  
  const libro1 = new Libro("Libro 1", "Autor 1", "Descripción 1", "2023-01-01", "Sección A");
  const libro2 = new Libro("Libro 2", "Autor 2", "Descripción 2", "2023-01-02", "Sección B");
  const revista1 = new Revista("Revista 1", "Editorial 1", "Edición 1", "2023-02-01", "Sección C");
  
  paqueteLibros.agregar(libro1);
  paqueteLibros.agregar(libro2);
  paqueteLibros.agregar(revista1);
  
  paqueteLibros.prestamo();
  
  paqueteLibros.eliminar(libro1);
  
  paqueteLibros.prestamo();
  