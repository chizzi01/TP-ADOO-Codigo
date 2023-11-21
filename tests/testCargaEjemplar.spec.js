const { Ejemplar, TipoEjemplar } = require('../Clases/Ejemplar');

describe('Ejemplar', () => {
  test('cargarEjemplar() debe cargar un ejemplar correctamente', () => {
    const ubicacion = { sucursal: 'Tienda 1', direccion: 'Calle Principal', zona: 'Zona A' };

    const ejemplar = new Ejemplar('Pinocho', 'Carlo Collodi', 'Pinocho es un muñeco de madera que cobra vida.', '20/07/2023' , TipoEjemplar.Libro, ubicacion.direccion , ubicacion.sucursal, ubicacion.zona);

    ejemplar.cargarEjemplar();


  });

});
