// Interfaz para StrategyParametro
const SuperaPlazo = require('../Clases/SuperaPlazo');
const Beneficio = require('../Clases/Beneficio');
const PlazoNormal = require('../Clases/PlazoNormal');
class iStrategyParametro {
    strategyParametro(strategyPrestamo) {
      console.log("StrategyParametro:" + strategyPrestamo);
  }
}

module.exports = iStrategyParametro;