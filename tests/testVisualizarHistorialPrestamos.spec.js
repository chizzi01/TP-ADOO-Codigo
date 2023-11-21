const Socio = require('../Clases/Socio');
const Prestamo = require('../Clases/Prestamo');
const PrestamoDetalle = require('../Clases/PrestamoDetalle');

describe('Socio', () => {
    test('testVisualizarHistorialPrestamos', () => {
        const socio = new Socio();
        const historialPrestamos = [
            new Prestamo(1, new Date(), socio, 'Libro - Título del libro', 5),
            new Prestamo(2, new Date(), socio, 'Libro - Título del libro', 5),
            new Prestamo(3, new Date(), socio, 'Libro - Título del libro', 5),
        ];



        socio.getHistorialPrestamos(historialPrestamos);



    }
    );
}
);
