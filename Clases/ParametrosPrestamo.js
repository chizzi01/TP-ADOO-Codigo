class ParametrosPrestamo {
  constructor(strategyParametro) {
    this.strategyParametro = strategyParametro;
  }


  setStrategyParametro(strategyParametro) {
    this.strategyParametro = strategyParametro;
  }


  aplicarEstrategia(historialPrestamos, beneficio, superaPlazo) {
    let contador = 0;

    for (let i = 0; i < historialPrestamos.length; i++) {
      const fechaVencimientoString = historialPrestamos[i].getFechaVencimiento();

      const [dia, mes, año] = fechaVencimientoString.split('/');


      const fechaVencimiento = new Date(`${mes}-${dia}-${año}`);

      const fechaDevolucionString = historialPrestamos[i].getFechaDevolucion();


      const [dia1, mes1, año1] = fechaDevolucionString.split('/');


      const fechaDevolucion = new Date(`${mes1}-${dia1}-${año1}`);


      const resta = Math.max(Math.ceil((fechaDevolucion - fechaVencimiento) / (1000 * 60 * 60 * 24)));
      if (historialPrestamos[i].getEstado() == 'Devuelto') {
        contador = contador + 1;
      }

      if (contador >= 5) {
        beneficio.aplicarBeneficio();
        console.log('Se aplico el beneficio de +1 dias')
      }

      if (resta >= 10) {
        superaPlazo.aplicarSuperaPlazo();
        console.log('Se aplico el superaPlazo -1 dias')
      }

    }

  }

}

module.exports = ParametrosPrestamo;



//   // Ejemplo de uso
// const parametrosPrestamo = new ParametrosPrestamo(new SuperaPlazo()); // Inicialmente, utiliza la estrategia de SuperaPlazo

// // Clase que implementa la estrategia
// class StrategyPrestamo {
//   aplicarSuperaPlazo() {
//     console.log('Aplicando estrategia SuperaPlazo');
//   }

//   aplicarPlazoNormal() {
//     console.log('Aplicando estrategia: PlazoNormal');
//   }

//   aplicarBeneficio() {
//     console.log('Aplicando estrategia: Beneficio');
//   }
// }

// // const strategyPrestamo = new StrategyPrestamo();

// // Aplicar la estrategia actual
// parametrosPrestamo.aplicarEstrategia(strategyPrestamo);

// // Cambiar la estrategia
// parametrosPrestamo.setStrategyParametro(new Beneficio());

// // Aplicar la nueva estrategia
// parametrosPrestamo.aplicarEstrategia(strategyPrestamo);
