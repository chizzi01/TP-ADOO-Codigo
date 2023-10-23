class ParametrosPrestamo {
    constructor(strategyParametro) {
      this.strategyParametro = strategyParametro;
    }
  
    // Método para establecer la estrategia
    setStrategyParametro(strategyParametro) {
      this.strategyParametro = strategyParametro;
    }
  
    // Método para aplicar la estrategia
    aplicarEstrategia(strategyPrestamo) {
      this.strategyParametro.strategyParametro(strategyPrestamo);
    }
  }
  


  // Ejemplo de uso
const parametrosPrestamo = new ParametrosPrestamo(new SuperaPlazo()); // Inicialmente, utiliza la estrategia de SuperaPlazo

// Clase que implementa la estrategia
class StrategyPrestamo {
  aplicarSuperaPlazo() {
    console.log('Aplicando estrategia: SuperaPlazo');
  }

  aplicarPlazoNormal() {
    console.log('Aplicando estrategia: PlazoNormal');
  }

  aplicarBeneficio() {
    console.log('Aplicando estrategia: Beneficio');
  }
}

const strategyPrestamo = new StrategyPrestamo();

// Aplicar la estrategia actual
parametrosPrestamo.aplicarEstrategia(strategyPrestamo);

// Cambiar la estrategia
parametrosPrestamo.setStrategyParametro(new Beneficio());

// Aplicar la nueva estrategia
parametrosPrestamo.aplicarEstrategia(strategyPrestamo);
