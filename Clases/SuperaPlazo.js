// Clase SuperaPlazo
const StrategyParametro = require('../Clases/iStrategyParametro');
class SuperaPlazo extends StrategyParametro {
    strategyParametro(strategyPrestamo) {
      strategyPrestamo.aplicarSuperaPlazo();
    }
  }
  

  