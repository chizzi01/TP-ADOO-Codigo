
const Login = require('./Login'); 
const Usuario = require('./Usuario'); 
const Socio = require('./Socio'); 


class adapterLogin {
    constructor(usuario) {
      this.usuario = usuario;
    }

  // Método login que recibe idUsuario, password y tipo y devuelve un booleano
  login(idUsuario, password, tipoUsuario) {
    if (tipoUsuario === 'Socio') {
      return this.login.login(idUsuario, password);
    } else if (tipo === 'Bibliotecario') {
      const authSuccessful = true; 
      return authSuccessful;
    } else {
      return false;
    }
  }
}

module.exports = adapterLogin;
