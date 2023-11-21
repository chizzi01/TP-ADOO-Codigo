const Usuario = require('./Usuario');
const Ejemplar = require('./Ejemplar');
const readline = require('readline');
const Socio = require('./Socio');
const Ubicacion = require('./Ubicacion');

class ModuloBiblioteca {
    constructor() {
      this.ejemplares = [];
    }
  

    configurarEstablecimiento(tipo) {

      console.log(`Establecimiento configurado como ${tipo}`);
    }
  
  
    registrarUsuario(nombre, password) {

      const usuario = new Usuario(nombre, password);
      console.log(`Usuario ${usuario.nombre} registrado con éxito.`);
      return usuario;
    }
  
    modificarUsuario(datosActuales,nombreSocio, apellidoSocio, passwordSocio, dniSocio, mailSocio, telefonoSocio, medioNotificacionSocio) {
      const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
      });

      const actuales = datosActuales;

      const datosModificados = {

      };
  

  
 
      if (actuales.Nombre  != nombreSocio) datosModificados.Nombre = nombreSocio;
      if (actuales.Apellido != apellidoSocio) datosModificados.Apellido = apellidoSocio;
      if (actuales.Password != passwordSocio ) datosModificados.Password = passwordSocio;
      if (actuales.DNI != dniSocio) datosModificados.DNI = dniSocio;
      if (actuales.Telefono != telefonoSocio) datosModificados.Telefono = telefonoSocio;
      if (actuales.Correo != mailSocio) datosModificados.Correo = mailSocio;
      if (actuales.Medio != medioNotificacionSocio) datosModificados.Medio = medioNotificacionSocio;
  

  
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

    console.log(`Buscando ejemplar: ${titulo} de ${autor}.`);
    console.log(`Fecha de publicación: ${fechaDePublicacion}.`);
    console.log(`Tipo de ejemplar: ${tipoEjemplar}.`);
    console.log(`Ubicación del ejemplar: ${direccion} , ${sucursal} , ${zona }`);


  }
  
  
  }

  module.exports = ModuloBiblioteca;

  