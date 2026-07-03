// pessoas/Professor.js

// Importamos a classe base Pessoa
const Pessoa = require('./Pessoa');

// Professor herda de Pessoa
class Professor extends Pessoa {
  // Atributo privado específico para armazenar a disciplina que leciona
  #disciplina;

  constructor(nome, email, disciplina) {
    // Enviamos o nome e o e-mail para o construtor da classe mãe (Pessoa)
    super(nome, email);
    // Atribuímos a disciplina
    this.setDisciplina(disciplina);
  }

  // Setter para a disciplina
  setDisciplina(disciplina) {
    this.#disciplina = disciplina;
  }

  // Getter para a disciplina
  getDisciplina() {
    return this.#disciplina;
  }

  // SOBRESCRITA (Override): Redefinimos o método setEmail que veio de Pessoa
  // Os professores têm uma regra mais rígida: o e-mail DEVE terminar obrigatoriamente em '.edu.br'
  setEmail(email) {
    // Verificamos a condição específica do professor
    if (email && email.endsWith('.edu.br')) {
      // 'super.setEmail(email)' chama o método original da classe mãe.
      // Assim, reaproveitamos a validação geral (ter '@', etc.) sem repetir código.
      return super.setEmail(email);
    }
    // Se não terminar em .edu.br, o e-mail é recusado automaticamente para o professor
    return false; 
  }
}

// Exportamos a classe Professor
module.exports = Professor;