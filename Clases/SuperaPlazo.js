// Clase SuperaPlazo
const PrestamoDetalle = require('../Clases/PrestamoDetalle');
// const iStrategyParametro = require('../Clases/iStrategyParametro');
class SuperaPlazo  {
  aplicarSuperaPlazo() {
    const detalle = new PrestamoDetalle();
    detalle.setParametrosPrestamo(detalle.getParametrosPrestamo() - 1);
    console.log('Aplicando estrategia SuperaPlazo');

  }
  
}
  
module.exports = SuperaPlazo;