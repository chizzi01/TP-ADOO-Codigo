// Clase Usuario
class Usuario {
    #idUsuario;
    #nombre;
    #apellido;
    #password;
    #dni;
    #mail;
    #telefono;
    constructor(idUsuario, nombre, apellido, password, dni, mail, telefono) {
        this.#idUsuario = idUsuario;
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#password = password;
        this.#dni = dni;
        this.#mail = mail;
        this.#telefono = telefono;
    }

    // Método para crear una cuenta de usuario
    crearCuenta() {
        // Implement the logic to create a user account
        this.#idUsuario = this.#idUsuario + 1;
        console.log(`Account created successfully for ${this.#nombre} ${this.#apellido}.`);
    }
    // Método para realizar el login
    login(username, password) {
        // Implementar la lógica de autenticación
        if (this.#nombre === username && this.#password === password) {
            return true;
        } else {
            return false;
        }
    }

    getNombre() {
        return this.#nombre;
    }

    getApellido() {
        return this.#apellido;
    }

    getPassword() {
        return this.#password;
    }

    getDni() {
        return this.#dni;
    }

    getMail() {
        return this.#mail;
    }

    getTelefono() {
        return this.#telefono;
    }

    // Otros métodos y funcionalidades relacionadas con el usuario
}

// Ejemplo de uso:
const usuario1 = new Usuario(1, "Juan", "Pérez", "123456", "123456789", "juan@example.com", "123-456-7890");
usuario1.crearCuenta();

// Intento de inicio de sesión
const username = "Juan";
const password = "123456";
const loginExitoso = usuario1.login(username, password);

if (loginExitoso) {
    console.log("Inicio de sesión exitoso.");
} else {
    console.log("Credenciales incorrectas. Inicio de sesión fallido.");
}

module.exports = Usuario;