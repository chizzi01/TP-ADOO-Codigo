const Ejemplar = require('../Clases/Ejemplar');
const ModuloBiblioteca = require('../Clases/ModuloBiblioteca');
const Ubicacion = require('../Clases/Ubicacion');

const readline = require('readline');
const Usuario = require('../Clases/Usuario');
readline.question = jest.fn();;

describe('ModuloBiblioteca', () => {
    test('testBuscarEjemplar', () => { 
        const moduloBiblioteca = new ModuloBiblioteca();
        const ubicacion = { sucursal: 'Tienda 1', direccion: 'Calle Principal', zona: 'Zona A' };

        const ejemplar = new Ejemplar('El señor de los anillos', ' J.R.R.Tolkien', 'Fantasia', ' 978-84-450-7570-9', 'Libro', ubicacion.direccion, ubicacion.sucursal, ubicacion.zona);


         moduloBiblioteca.buscarEjemplar(ejemplar.getTitulo(), ejemplar.getAutor(), ejemplar.getFechaPublicacion(), ejemplar.getTipoEjemplar(), ubicacion.direccion, ubicacion.sucursal, ubicacion.zona);
         
    }
    );
}
);
