  // Clase Beneficio
const PrestamoDetalle = require('../Clases/PrestamoDetalle');

  // const StrategyParametro = require('../Clases/iStrategyParametro');
  class Beneficio {
    aplicarBeneficio() {
      //dias totales +1
      const detalle = new PrestamoDetalle();
      detalle.setParametrosPrestamo(detalle.getParametrosPrestamo() + 1);
      console.log('Aplicando estrategia Beneficio');
      console.log(detalle.getParametrosPrestamo());
    }

  }

  module.exports = Beneficio;