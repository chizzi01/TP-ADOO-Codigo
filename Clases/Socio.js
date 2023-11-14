const { Ubicacion } = require("./Ubicacion");
const  Usuario  = require("./Usuario");

// Enumeración para los medios de notificación
const MedioNotificacion = {
  SMS: "SMS",
  Whatsapp: "Whatsapp",
  Email: "Email",
};

// Clase Socio que hereda de Usuario
class Socio extends Usuario {
  #historialPrestamos = [];
  #medioNotificacion;
  #idUsuario;
  #nombre;
  #apellido;
  #password;
  #dni;
  #mail;
  #telefono;

  constructor(idUsuario, nombre, apellido, password, dni, mail, telefono, medioNotificacion) {
    super(idUsuario, nombre, apellido, password, dni, mail, telefono);
    this.#medioNotificacion = medioNotificacion;
    this.#idUsuario = idUsuario;
    this.#nombre = nombre;
    this.#apellido = apellido;
    this.#password = password;
    this.#dni = dni;
    this.#mail = mail;
    this.#telefono = telefono;
  }

  historialPrestamos(historialPrestamos) {
    // Implementar la lógica para obtener el historial de préstamos del socio
    this.#historialPrestamos = historialPrestamos ;
    console.log("Historial de préstamos del socio" + this.#historialPrestamos);
  }

  // Método para buscar ejemplar con parámetros y elegir el medio de notificación
  buscarEjemplar(titulo, autor, fechaDePublicacion, tipoEjemplar) {
    // Implementar la lógica para buscar ejemplar 
    console.log(`Buscando ejemplar: ${titulo} de ${autor}.`);
    console.log(`Fecha de publicación: ${fechaDePublicacion}.`);
    console.log(`Tipo de ejemplar: ${tipoEjemplar}.`);

    //ubicacion
    const ubicacion = new Ubicacion("Sucursal", "Dirección", "Zona");
    ubicacion.obtenerUbicacion();

  }

  getHistorialPrestamos(historialPrestamos) {
    this.#historialPrestamos = historialPrestamos;
    console.log("Historial de préstamos del socio:", this.#historialPrestamos);
  }

  getMedioNotificacion() {
    return this.#medioNotificacion;
  }

  getNombre() {
    return this.#nombre;
  }

  getApellido() {
    return this.#apellido;
  }

  getDocumento() {
    return this.#dni;
  } 

  getMail() {
    return this.#mail;
  }

  getTelefono() {
    return this.#telefono;
  }

  getPassword() {
    return this.#password;
  }

  setMedioNotificacion(medioNotificacion) {
    this.#medioNotificacion = medioNotificacion;
  }

  setNombre(nombre) {
    this.#nombre = nombre;
  }

  setApellido(apellido) {
    this.#apellido = apellido;
  }

  setDocumento(dni) {

    this.#dni = dni;

  }

  setMail(mail) {
    this.#mail = mail;
  }

  setTelefono(telefono) {
    this.#telefono = telefono;
  }

  setPassword(password) {
    this.#password = password;
  }

  getDatosActuales() {
    return {
      Nombre: this.getNombre(),
      Apellido: this.getApellido(),
      Password: this.getPassword(),
      DNI: this.getDocumento(),
      Telefono: this.getTelefono(),
      Correo: this.getMail(),
      'Medio de Notificación': this.getMedioNotificacion(),
    };
  }


  cambiarDatos(nombre, apellido, dni, mail, telefono) {
    this.#nombre = nombre;
    this.#apellido = apellido;
    this.#dni = dni;
    this.#mail = mail;
    this.#telefono = telefono;
  }

  
}

// Ejemplo de uso:
// const socio1 = new Socio(1, "Maria", "López", "password123", "987654321", "maria@example.com", "987-654-3210", MedioNotificacion.Whatsapp);
// socio1.crearCuenta();

// // Búsqueda de ejemplar y notificación
// socio1.buscarEjemplar("Libro interesante", "Autor Desconocido", "2023-01-01", "Libro");

module.exports = Socio;
