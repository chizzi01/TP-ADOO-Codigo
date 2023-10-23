// Enumeración para los tipos de ejemplar
const TipoEjemplar = {
    Revista: "Revista",
    RevistaEspecializada: "Revista Especializada",
    Diario: "Diario",
    Libro: "Libro",
  };
  
  // Clase abstracta Ejemplar
  class Ejemplar {
    constructor(titulo, autor, descripcion, tipoEjemplar, fechaPublicacion, ubicacion) {
      if (this.constructor === Ejemplar) {
        throw new Error("No se puede instanciar una clase abstracta.");
      }
  
      this.titulo = titulo;
      this.autor = autor;
      this.descripcion = descripcion;
      this.tipoEjemplar = tipoEjemplar;
      this.fechaPublicacion = fechaPublicacion;
      this.ubicacion = ubicacion;
    }
  
    // Método abstracto para calcular el número de días de préstamo
    diasPrestamo() {
      throw new Error("Método abstracto 'diasPrestamo' debe ser implementado en subclases.");
    }
  
    // Método para solicitar un ejemplar
    solicitarEjemplar() {
      console.log(`Solicitando ejemplar: ${this.titulo}`);
    }
  
    // Método abstracto para calcular el costo de préstamo
    calcularPrestamo() {
      throw new Error("Método abstracto 'calcularPrestamo' debe ser implementado en subclases.");
    }
  }
  
  // Ejemplo de subclase de Ejemplar (Libro)
  class Libro extends Ejemplar {
    constructor(titulo, autor, descripcion, fechaPublicacion, ubicacion) {
      super(titulo, autor, descripcion, TipoEjemplar.Libro, fechaPublicacion, ubicacion);
    }
  
    diasPrestamo() {
      // Implementar la lógica para calcular el número de días de préstamo para libros
      return 10;
    }
  
    calcularPrestamo() {
      // Implementar la lógica para calcular el costo de préstamo para libros
      return 5.0;
    }
  }
  
  // Ejemplo de uso de la clase Libro
  const libro = new Libro("El Gran Gatsby", "F. Scott Fitzgerald", "Una novela clásica", "2023-01-15", "Sección A");
  
  console.log(`Título: ${libro.titulo}`);
  console.log(`Autor: ${libro.autor}`);
  console.log(`Tipo de Ejemplar: ${libro.tipoEjemplar}`);
  console.log(`Días de Préstamo: ${libro.diasPrestamo()}`);
  console.log(`Costo de Préstamo: $${libro.calcularPrestamo()}`);
  