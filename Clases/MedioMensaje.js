// Clase MedioMensaje
class MedioMensaje {
    constructor() {
        this.observadores = [];
    }

    setStrategyMensaje(strategyMensaje) {
        this.strategyMensaje = strategyMensaje;
    }

}



module.exports = MedioMensaje;
