const Usuario = require('../Clases/Usuario');

describe('Usuario', () => {
test('crearCuenta() debe crear una cuenta de usuario', () => {
    const usuario = new Usuario(1, 'Juan', 'Pérez', '123456', '123456789', 'juan@example.com', '123-456-7890');
    usuario.crearCuenta();
    expect(usuario.getNombre()).toBe('Juan');
    expect(usuario.getApellido()).toBe('Pérez');
    expect(usuario.getPassword()).toBe('123456');
    expect(usuario.getDni()).toBe('123456789');
    expect(usuario.getMail()).toBe('juan@example.com');
    expect(usuario.getTelefono()).toBe('123-456-7890');
});

  test('login() debe autenticar al usuario correctamente', () => {
    const usuario = new Usuario(1, 'Juan', 'Pérez', '123456', '123456789', 'juan@example.com', '123-456-7890');
    const loginExitoso = usuario.login('Juan', '123456');
    expect(loginExitoso).toBe(true);
  });

  test('login() debe rechazar el inicio de sesión si las credenciales son incorrectas', () => {
    const usuario = new Usuario(1, 'Juan', 'Pérez', '123456', '123456789', 'juan@example.com', '123-456-7890');
    const loginExitoso = usuario.login('Juan', 'contraseñaIncorrecta');
    expect(loginExitoso).toBe(false);
  });
});