const Socio = require('../Clases/Socio');
const Prestamo = require('../Clases/Prestamo');
const PrestamoDetalle = require('../Clases/PrestamoDetalle');
const iObserverNotifica = require('../Clases/iObserverNotifica');
const MedioMensaje = require('../Clases/MedioMensaje');

describe('iObserverNotifica', () => {
    test('testNotificarEstado', () => {
        const socio = new Socio( 1, 'Juan', 'Perez', '12345678', ' 43175643', 'juan@hotmail.com' , '1165376415' , 'Mail' );
        const prestamoDetalle = new PrestamoDetalle(2, '02/10/2023', '02/10/2023', 'Devuelto', 5);
        const observer = new iObserverNotifica();

        let mensaje = prestamoDetalle.getEstado();
        let medioNotificacion = socio.getMedioNotificacion();
        observer.notificarEstado(mensaje, medioNotificacion);

    }
    );
}
);