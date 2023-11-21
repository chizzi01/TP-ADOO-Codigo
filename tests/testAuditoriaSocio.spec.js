const Socio = require('../Clases/Socio');
const ModuloBiblioteca = require('../Clases/ModuloBiblioteca');

const readline = require('readline');
const Usuario = require('../Clases/Usuario');
readline.question = jest.fn();;

describe('ModuloBiblioteca', () => {
    test('testAuditoriaSocio', async () => {
        const socio = new Socio(1, 'Juan', 'Perez', 'holaquetal123', '43175643', 'perez@gmail.com', '1165376415', 'Mail');
        const moduloBiblioteca = new ModuloBiblioteca();
        const nombreSocio = 'Juan';
        const apellidoSocio = 'Rodriguez';
        const passwordSocio = 'holaquetal123';
        const documentoSocio = '43175676';
        const telefonoSocio = '1198673541';
        const mailSocio = 'juancito@gmail.com';
        const medioSocio = 'Whatsapp';

        const datosActuales={
            Nombre: socio.getNombre(),
            Apellido: socio.getApellido(),
            Password: socio.getPassword(),
            DNI: socio.getDocumento(),
            Telefono: socio.getTelefono(),
            Correo: socio.getMail(),
            Medio: socio.getMedioNotificacion(),
        };


        jest.spyOn(global.console, 'log').mockImplementation(() => {});

        await moduloBiblioteca.modificarUsuario(datosActuales, nombreSocio, apellidoSocio, socio.password, documentoSocio, mailSocio, telefonoSocio, medioSocio);

        jest.restoreAllMocks();

    });
});