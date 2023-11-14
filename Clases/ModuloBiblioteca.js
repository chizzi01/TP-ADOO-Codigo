const Usuario = require('./Usuario');
const Ejemplar = require('./Ejemplar');
const readline = require('readline');
const Socio = require('./Socio');
const Ubicacion = require('./Ubicacion');

class ModuloBiblioteca {
    constructor() {
      this.ejemplares = [];
    }
  
    // Método para configurar el establecimiento
    configurarEstablecimiento(tipo) {
      // Implementa la configuración del establecimiento
      console.log(`Establecimiento configurado como ${tipo}`);
    }
  
    // Método para registrar un usuario
    registrarUsuario(nombre, password) {
      // Implementa la lógica de registro de usuarios
      const usuario = new Usuario(nombre, password);
      console.log(`Usuario ${usuario.nombre} registrado con éxito.`);
      return usuario;
    }
  
    // Método para buscar un ejemplar
    modificarUsuario(datosActuales,nombreSocio, apellidoSocio, passwordSocio, dniSocio, mailSocio, telefonoSocio, medioNotificacionSocio) {
      const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
      });

      const actuales = datosActuales;

      const datosModificados = {

      };
  
      // Almacena los datos actuales del socio
  
      // Modifica los datos del socio
      if (actuales.Nombre  != nombreSocio) datosModificados.Nombre = nombreSocio;
      if (actuales.Apellido != apellidoSocio) datosModificados.Apellido = apellidoSocio;
      if (actuales.Password != passwordSocio ) datosModificados.Password = passwordSocio;
      if (actuales.DNI != dniSocio) datosModificados.DNI = dniSocio;
      if (actuales.Telefono != telefonoSocio) datosModificados.Telefono = telefonoSocio;
      if (actuales.Correo != mailSocio) datosModificados.Correo = mailSocio;
      if (actuales.Medio != medioNotificacionSocio) datosModificados.Medio = medioNotificacionSocio;
  
      // Almacena los datos modificados del socio

  
      rl.question('Ingrese su nombre: ', (name) => {
          rl.question('Ingrese su documento: ', (document) => {
              console.log(`El usuario: ${name}, de documento: ${document}, realizó los siguientes cambios:`);
              console.log('Datos modificados:', JSON.stringify(datosModificados, null, 2));
              console.log('Datos originales:', JSON.stringify(actuales, null, 2));
              rl.close();
          });
      });
  }

  buscarEjemplar(titulo, autor, fechaDePublicacion, tipoEjemplar, direccion, sucursal, zona) {
    // Implementar la lógica para buscar ejemplar 
    console.log(`Buscando ejemplar: ${titulo} de ${autor}.`);
    console.log(`Fecha de publicación: ${fechaDePublicacion}.`);
    console.log(`Tipo de ejemplar: ${tipoEjemplar}.`);
    console.log(`Ubicación del ejemplar: ${direccion} , ${sucursal} , ${zona }`);

    //ubicacion

  }
  
  
  }

  module.exports = ModuloBiblioteca;
  
  // Clase TipoEstablecimiento (asume que está definida)
  
  // Clase Usuario (asume que está definida)
  
  // Clase Ejemplar (asume que está definida)
  
  // Ejemplo de uso
  // const moduloBiblioteca = new ModuloBiblioteca();
  
  // moduloBiblioteca.configurarEstablecimiento('Biblioteca Pública');
  
  // const usuario = moduloBiblioteca.registrarUsuario('Usuario1', 'contraseña123');
  
  // const ejemplar = moduloBiblioteca.buscarEjemplar('Libro', 'Autor', new Date(), 'Libro');
  