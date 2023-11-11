const { Ejemplar, TipoEjemplar } = require('../Clases/Ejemplar');
const Socio = require('../Clases/Socio');

describe('Socio', () => {
    test('buscarEjemplar() debe buscar un ejemplar correctamente', () => {
        // Crear ejemplares
        const ejemplares = [
            new Ejemplar('Pinocho', 'Carlo Collodi', 'Descripción 1', new Date(), TipoEjemplar.Libro, 'Sucursal A', 'Dirección 1', 'Zona X'),
            new Ejemplar('Cenicienta', 'Charles Perrault', 'Descripción 2', new Date(), TipoEjemplar.Libro, 'Sucursal B', 'Dirección 2', 'Zona Y'),
            // Agregar más ejemplares según sea necesario
        ];

        const socio = new Socio();
        socio.buscarEjemplar('Pinocho', 'Carlo Collodi');
        // Socio.buscarEjemplar('Pinocho', 'Carlo Collodi', '20/07/2023', TipoEjemplar.Libro);

        // Realizar las expectativas según el resultado de la búsqueda
        // Puedes agregar más expectativas según sea necesario
    });
});
