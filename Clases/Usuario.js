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

 
    crearCuenta() {
        this.#idUsuario = this.#idUsuario + 1;
        console.log(`Account created successfully for ${this.#nombre} ${this.#apellido}.`);
    }

    login(username, password) {
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


}



module.exports = Usuario;