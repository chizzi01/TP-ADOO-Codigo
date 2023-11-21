  // Clase Beneficio
const PrestamoDetalle = require('../Clases/PrestamoDetalle');

  class Beneficio {
    aplicarBeneficio() {

      const detalle = new PrestamoDetalle();
      detalle.setParametrosPrestamo(detalle.getParametrosPrestamo() + 1);
      console.log('Aplicando estrategia Beneficio');
      console.log(detalle.getParametrosPrestamo());
    }

  }

  module.exports = Beneficio;