// Login.js
const adapterLogin = require('./adapterLogin'); // Importa la clase AdapterLogin desde su archivo

const tipoUsuario = {
    Socio: 'Socio',
    Bibliotecario: 'Bibliotecario'
};


class Login {
  constructor(adapterLogin) {
    this.adapterLogin = adapterLogin;
  }
    // Método para iniciar sesión que recibe idUsuario y password y devuelve un booleano
    login(idUsuario, password, TipoUsuario) {
      // Implementa la lógica de inicio de sesión normal aquí
      // Por ejemplo, verifica las credenciales de inicio de sesión y devuelve true o false
      const authSuccessful = true; // Simula una autenticación exitosa
    //   return authSuccessful;
      return this.adapterLogin.login(idUsuario, password, tipoUsuario);
    }
  }
  
  // Exporta la clase Login
  module.exports = Login;
  