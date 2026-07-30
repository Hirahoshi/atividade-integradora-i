// pessoas/Professor.js
const Pessoa = require('./Pessoa');

class Professor extends Pessoa {
    // Atributo privado
    #disciplina;

    constructor(nome, email, disciplina) {
        super(nome, email);
        this.#disciplina = disciplina;
    }

    // Getter e Setter para disciplina
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

    // Sobrescrita do setEmail: aceita apenas emails terminados em .edu.br
    setEmail(email) {
        // Reutiliza o método da classe pai, que já valida o formato
        if (super.setEmail(email)) {
            // Validação extra: deve terminar com .edu.br
            if (email.endsWith('.edu.br')) {
                return true;
            }
            // Se passou na validação do pai mas não termina com .edu.br,
            // precisamos reverter a alteração (o pai já alterou o atributo)
            // Por isso, é melhor validar antes de chamar o super
            return false;
        }
        return false;
    }

    // Versão melhorada do setEmail para evitar alteração indevida:
    // (substitua o método acima por este se preferir)
    setEmailMelhorado(email) {
        // Valida primeiro o formato geral e a terminação .edu.br
        if (email && email.includes('@') && email.endsWith('.edu.br')) {
            // Agora chama o super, que fará a validação final
            return super.setEmail(email);
        }
        return false;
    }
}

module.exports = Professor;