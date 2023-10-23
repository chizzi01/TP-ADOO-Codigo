class Ubicacion {
    constructor(sucursal, direccion, zona) {
      this.sucursal = sucursal;
      this.direccion = direccion;
      this.zona = zona;
    }
  
    obtenerUbicacion(tiendas) {
      console.log(`La ubicación de ${tiendas} es la siguiente:`);
      console.log(`Sucursal: ${this.sucursal}`);
      console.log(`Dirección: ${this.direccion}`);
      console.log(`Zona: ${this.zona}`);
    }
  }
  