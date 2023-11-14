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

// // Ejemplo de uso
// const medioMensaje = new MedioMensaje(new MensajeSMS()); // Inicialmente, utiliza la estrategia de SMS

// const socios = ["Socio 1", "Socio 2", "Socio 3"];
// const mensaje = "Este es un mensaje importante.";

// medioMensaje.enviar(mensaje, socios);

// // Cambiar la estrategia de mensaje a correo electrónico
// medioMensaje.setStrategyMensaje(new MensajeEmail());

// medioMensaje.enviar(mensaje, socios);
