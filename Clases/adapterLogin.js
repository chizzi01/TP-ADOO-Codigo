// AdapterLogin.js
const Login = require('./Login'); // Importa la clase Login desde el archivo Login.js
const Usuario = require('./Usuario'); // Importa la clase Usuario desde su archivo
const Socio = require('./Socio'); // Importa la clase Socio desde su archivo


class adapterLogin {
    constructor(usuario) {
      this.usuario = usuario;
    }

  // Método login que recibe idUsuario, password y tipo y devuelve un booleano
  login(idUsuario, password, tipoUsuario) {
    if (tipoUsuario === 'Socio') {
      return this.login.login(idUsuario, password);
    } else if (tipo === 'Bibliotecario') {
      // Implementa la lógica de autenticación con inicio de sesión social aquí
      // Por ejemplo, verifica las credenciales de inicio de sesión social y devuelve true o false
      const authSuccessful = true; // Simula una autenticación exitosa
      return authSuccessful;
    } else {
      // Manejo de otros tipos de autenticación si es necesario
      return false;
    }
  }
}

// Exporta la clase AdapterLogin
module.exports = adapterLogin;
