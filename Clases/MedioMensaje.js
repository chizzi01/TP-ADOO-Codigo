// Clase MedioMensaje
class MedioMensaje {
    constructor() {
        this.observadores = [];
    }

    // Agregar un observador
    addObserver(observer) {
        this.observadores.push(observer);
    }

    // Eliminar un observador
    removeObserver(observer) {
        const index = this.observadores.indexOf(observer);
        if (index !== -1) {
            this.observadores.splice(index, 1);
        }
    }

    // Notificar a todos los observadores
    notify(mensaje) {
        this.observadores.forEach((observer) => {
            observer.update(mensaje);
        });
    }

    // Método para establecer la estrategia de mensaje
    setStrategyMensaje(strategyMensaje) {
        this.strategyMensaje = strategyMensaje;
    }

    // Método para enviar un mensaje a través de la estrategia actual
    enviar(mensaje, socios) {
        this.strategyMensaje.enviarMensaje(mensaje, socios);
    }
}


// Clase MedioMensaje
class MedioMensaje {
    constructor(strategyMensaje) {
        this.strategyMensaje = strategyMensaje;
    }


}


// Ejemplo de uso
const medioMensaje = new MedioMensaje(new MensajeSMS()); // Inicialmente, utiliza la estrategia de SMS

const socios = ["Socio 1", "Socio 2", "Socio 3"];
const mensaje = "Este es un mensaje importante.";

medioMensaje.enviar(mensaje, socios);

// Cambiar la estrategia de mensaje a correo electrónico
medioMensaje.setStrategyMensaje(new MensajeEmail());

medioMensaje.enviar(mensaje, socios);
