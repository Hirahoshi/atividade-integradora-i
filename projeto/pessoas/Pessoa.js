// pessoas/Pessoa.js
const util = require('../biblioteca/util');

class Pessoa {
    #nome;
    #email;

    constructor(nome, email) {
        this.#nome = nome;
        this.#email = email;
    }

    getNome() {
        return this.#nome;
    }

    setNome(nome) {
        if (typeof nome === 'string' && nome.trim().length > 0) {
            this.#nome = nome.trim();
            return true;
        }
        return false;
    }

    getEmail() {
        return this.#email;
    }

    setEmail(email) {
        if (util.validarEmail(email)) {
            this.#email = email;
            return true;
        }
        return false;
    }
}

module.exports = Pessoa;