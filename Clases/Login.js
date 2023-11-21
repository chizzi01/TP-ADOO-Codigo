// Login.js
const adapterLogin = require('./adapterLogin'); 

const tipoUsuario = {
    Socio: 'Socio',
    Bibliotecario: 'Bibliotecario'
};


class Login {
  constructor(adapterLogin) {
    this.adapterLogin = adapterLogin;
  }

    login(idUsuario, password, TipoUsuario) {
      const authSuccessful = true; 
      return this.adapterLogin.login(idUsuario, password, tipoUsuario);
    }
  }
  

  module.exports = Login;
  