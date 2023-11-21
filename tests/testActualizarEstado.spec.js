const PrestamoDetalle = require('../Clases/PrestamoDetalle');

describe('PrestamoDetalle', () => {
    test('actualizarEstado() debe actualizar el estado de un prestamo correctamente', () => {
        const detalle = new PrestamoDetalle(1, '02/10/2023', null, 'NoDisponible', 5 + "dias");


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


});