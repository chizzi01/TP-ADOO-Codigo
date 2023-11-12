const PrestamoDetalle = require('../Clases/PrestamoDetalle');

describe('PrestamoDetalle', () => {
    test('actualizarEstado() debe actualizar el estado de un prestamo correctamente', () => {
        const detalle = new PrestamoDetalle(1, '02/10/2023', null, 'NoDisponible', 'Parámetros del préstamo');


        if (detalle.getFechaDevolucion() != null) {
            detalle.actualizarEstado('Devuelto');
        } else {
            if (detalle.getFechaVencimiento() > new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear()) {
                detalle.actualizarEstado('NoDisponible');
            }
            if (detalle.getFechaVencimiento() < new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear()) {
                detalle.actualizarEstado('Fuera de termino');
            }
        }

        

    });
    //se espera que este devuelto o no disponible o fuera de termino


});