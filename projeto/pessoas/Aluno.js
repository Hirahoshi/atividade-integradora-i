// pessoas/Aluno.js
const Pessoa = require('./Pessoa');
const util = require('../biblioteca/util');

class Aluno extends Pessoa {
    // Atributo privado
    #matricula;

    constructor(nome, email, matricula) {
        super(nome, email);
        this.#matricula = matricula;
    }

    // Getter e Setter para matrícula (com validação)
    getMatricula() {
        return this.#matricula;
    }

    setMatricula(matricula) {
        if (util.validarMatricula(matricula)) {
            this.#matricula = matricula;
            return true;
        }
        return false;
    }
}

module.exports = Aluno;