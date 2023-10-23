// Enumeración para los medios de notificación
const MedioNotificacion = {
    SMS: "SMS",
    Whatsapp: "Whatsapp",
    Email: "Email",
  };
  
  // Clase Socio que hereda de Usuario
  class Socio extends Usuario {
    constructor(idUsuario, nombre, apellido, password, dni, mail, telefono, medioNotificacion) {
      super(idUsuario, nombre, apellido, password, dni, mail, telefono);
      this.medioNotificacion = medioNotificacion;
    }
  
    // Método para buscar ejemplar con parámetros y elegir el medio de notificación
    buscarEjemplar(titulo, autor, fechaDePublicacion, tipoEjemplar) {
      // Implementar la lógica para buscar ejemplar y notificar
      const ejemplarEncontrado = /* Lógica para buscar ejemplar */ true;
  
      if (ejemplarEncontrado) {
        const mensaje = `Ejemplar encontrado: ${titulo} de ${autor}. Disponible en la categoría ${tipoEjemplar}.`;
  
        // Elegir el medio de notificación
        if (this.medioNotificacion === MedioNotificacion.SMS) {
          // Implementar la lógica para enviar un SMS
          console.log(`SMS: ${mensaje}`);
        } else if (this.medioNotificacion === MedioNotificacion.Whatsapp) {
          // Implementar la lógica para enviar un mensaje por WhatsApp
          console.log(`WhatsApp: ${mensaje}`);
        } else if (this.medioNotificacion === MedioNotificacion.Email) {
          // Implementar la lógica para enviar un correo electrónico
          console.log(`Email: ${mensaje}`);
        }
      } else {
        console.log("Ejemplar no encontrado.");
      }
    }
  
    // Otros métodos y funcionalidades relacionadas con el socio
  }
  
  // Ejemplo de uso:
  const socio1 = new Socio(1, "Maria", "López", "password123", "987654321", "maria@example.com", "987-654-3210", MedioNotificacion.Whatsapp);
  socio1.crearCuenta();
  
  // Búsqueda de ejemplar y notificación
  socio1.buscarEjemplar("Libro interesante", "Autor Desconocido", "2023-01-01", "Libro");
  