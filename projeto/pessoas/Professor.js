// pessoas/Professor.js
const Pessoa = require('./Pessoa');

class Professor extends Pessoa {
    #disciplina;

    constructor(nome, email, disciplina) {
        super(nome, email);
        this.#disciplina = disciplina;
    }

    getDisciplina() {
        return this.#disciplina;
    }

    setDisciplina(disciplina) {
        if (typeof disciplina === 'string' && disciplina.trim().length > 0) {
            this.#disciplina = disciplina.trim();
            return true;
        }
        return false;
    }

    setEmail(email) {
        if (email && email.includes('@') && email.endsWith('.edu.br')) {
            return super.setEmail(email);
        }
        return false;
    }
}

module.exports = Professor;