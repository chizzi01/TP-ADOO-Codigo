const iStrategyParametro = require('../Clases/iStrategyParametro');
const SuperaPlazo = require('../Clases/SuperaPlazo');
const Beneficio = require('../Clases/Beneficio');
const PlazoNormal = require('../Clases/PlazoNormal');
const ParametrosPrestamo = require('../Clases/ParametrosPrestamo');
const PrestamoDetalle = require('../Clases/PrestamoDetalle');
const Prestamo = require('../Clases/Prestamo');


describe('ParametrosPrestamo', () => {
  test('testActualizarParametros', () => {

    const historialPrestamos = [
      new PrestamoDetalle(1, '02/10/2023','12/10/2023' , 'Fuera de termino', 5),
      new PrestamoDetalle(2, '02/10/2023', '02/10/2023', 'Devuelto', 5),
      new PrestamoDetalle(3, '02/10/2023', '02/10/2023', 'Devuelto', 5),
      new PrestamoDetalle(4, '02/10/2023', '02/10/2023', 'Devuelto', 5),
      new PrestamoDetalle(5, '02/10/2023', '02/10/2023', 'Devuelto', 5)
    ];
    const beneficio = new Beneficio();
    const superaPlazo = new SuperaPlazo();
    const parametrosPrestamo = new ParametrosPrestamo();

    parametrosPrestamo.aplicarEstrategia(historialPrestamos, beneficio, superaPlazo);

    
    
  }

  );
});
//se espera que este devuelto o no disponible o fuera de termino


