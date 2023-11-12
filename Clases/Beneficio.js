  // Clase Beneficio
  const StrategyParametro = require('../Clases/iStrategyParametro');
  class Beneficio extends StrategyParametro {
    strategyParametro(strategyPrestamo) {
      strategyPrestamo.aplicarBeneficio();
    }
  }