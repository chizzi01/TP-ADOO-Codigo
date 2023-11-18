const Socio = require('../Clases/Socio');
const Prestamo = require('../Clases/Prestamo');
const PrestamoDetalle = require('../Clases/PrestamoDetalle');
const iObserverNotifica = require('../Clases/iObserverNotifica');
const MedioMensaje = require('../Clases/MedioMensaje');
const Sujeto = require('../Clases/Sujeto');

describe('Sujeto', () => {
    test('testNotificarEstado', () => {
        const socio = new Socio( 1, 'Juan', 'Perez', '12345678', ' 43175643', 'juan@hotmail.com' , '1165376415' , 'Mail' );
        const prestamoDetalle = new PrestamoDetalle(2, '02/10/2023', '02/10/2023', 'Devuelto', 5);
        const observer = new iObserverNotifica();
        const sujeto = new Sujeto();

        let mensaje = prestamoDetalle.getEstado();
        let medioNotificacion = socio.getMedioNotificacion();
        sujeto.notificarEstado(mensaje, medioNotificacion);
        observer.notificarEstado(mensaje, medioNotificacion);
    }
    );
}
);