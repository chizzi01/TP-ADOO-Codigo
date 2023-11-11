const { Ejemplar, TipoEjemplar } = require('../Clases/Ejemplar');

describe('Ejemplar', () => {
  test('cargarEjemplar() debe cargar un ejemplar correctamente', () => {
    const ubicacion = { sucursal: 'Tienda 1', direccion: 'Calle Principal', zona: 'Zona A' };

    const ejemplar = new Ejemplar('Pinocho', 'Carlo Collodi', 'Pinocho es un muñeco de madera que cobra vida.', '20/07/2023' , TipoEjemplar.Libro, ubicacion.direccion , ubicacion.sucursal, ubicacion.zona);

    // ejemplar.calcularPrestamo();
    // ejemplar.obtenerUbicacion();
    ejemplar.cargarEjemplar();

    // expect(ejemplar.getTitulo()).toBe('Pinocho');
    // expect(ejemplar.getAutor()).toBe('Carlo Collodi');
    // expect(ejemplar.getDescripcion()).toBe('Pinocho es un muñeco de madera que cobra vida.');
    // expect(ejemplar.getTipoEjemplar()).toBe(TipoEjemplar.Revista);
    // expect(ejemplar.obtenerUbicacion()).toStrictEqual(ubicacion);
    // Asegúrate de agregar más expectativas según los atributos que tenga tu clase Ejemplar
  });

  // Puedes agregar más pruebas según sea necesario
});
