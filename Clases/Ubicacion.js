class Ubicacion {
    #sucursal;
    #direccion;
    #zona;

    constructor(sucursal, direccion, zona) {
      this.#sucursal = sucursal;
      this.#direccion = direccion;
      this.#zona = zona;
    }
  
    getSucursal() {
      return this.#sucursal;
    }

    getDireccion() {
      return this.#direccion;
    }

    getZona() {
      return this.#zona;
    } 

  }
  

module.exports = { Ubicacion };