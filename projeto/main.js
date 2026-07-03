
// main.js

// Importamos todas as classes que criamos
const Pessoa = require('./pessoas/Pessoa');
const Aluno = require('./pessoas/Aluno');
const Professor = require('./pessoas/Professor');

// Função auxiliar (Resolve o Desafio Extra 2)
// Usa 'Polimorfismo' para receber qualquer objeto (Pessoa, Aluno ou Professor) e agir da forma correta
function mostrarDados(objeto) {
  // Construímos uma base com os dados comuns de qualquer Pessoa usando seus Getters
  // O operador || 'Inválido' garante que se o atributo estiver vazio por falha na validação, mostre um aviso
  let dados = `Nome: ${objeto.getNome() || 'Inválido'}, E-mail: ${objeto.getEmail() || 'Inválido'}`;
  
  // O operador 'instanceof' verifica dinamicamente o tipo de objeto em tempo de execução
  if (objeto instanceof Aluno) {
    // Se o objeto for um Aluno, adicionamos exclusivamente o dado da matrícula
    dados += `, Matrícula: ${objeto.getMatricula() || 'Inválida'}`;
  } else if (objeto instanceof Professor) {
    // Se o objeto for um Professor, adicionamos exclusivamente a disciplina
    dados += `, Disciplina: ${objeto.getDisciplina() || 'Inválida'}`;
  }
  
  // Imprimimos a linha completa de informações no console
  console.log(dados);
}

// --- CASOS DE TESTE ---

// 1. Instanciando objetos da classe Pessoa
const p1 = new Pessoa("Ana Silva", "ana@gmail.com");     // Válido: tem '@' e termina em '.com'
const p2 = new Pessoa("Carlos", "carlos@invalido.net");    // Inválido: termina em '.net' (a biblioteca recusa)

// 2. Instanciando objetos da classe Aluno
const a1 = new Aluno("João", "joao@escola.edu.br", "2023001"); // Válido: e-mail correto e matrícula com texto
const a2 = new Aluno("Maria", "maria.escola.com", "");        // Inválido: não tem '@' e a matrícula está vazia

// 3. Instanciando objetos da classe Professor
const prof1 = new Professor("Paulo", "paulo@escola.edu.br", "Matemática"); // Válido: termina em '.edu.br'
const prof2 = new Professor("Lucia", "lucia@escola.com", "História");     // Inválido: é '.com', e o método sobrescrito de Professor exige '.edu.br'

// --- RELATÓRIO FINAL ---
console.log("=== RELATÓRIO FINAL DO SISTEMA ACADÊMICO ===");
mostrarDados(p1);
mostrarDados(p2);
mostrarDados(a1);
mostrarDados(a2);
mostrarDados(prof1);
mostrarDados(prof2);
