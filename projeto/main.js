// main.js
const Pessoa = require('./pessoas/Pessoa');
const Aluno = require('./pessoas/Aluno');
const Professor = require('./pessoas/Professor');

console.log('='.repeat(50));
console.log('📚 SISTEMA ACADÊMICO - TESTES');
console.log('='.repeat(50));

// 1. CADASTRO DE PESSOAS
console.log('\n🔹 CADASTRANDO PESSOAS:');

const pessoa1 = new Pessoa('João Silva', 'joao@email.com');
console.log('✅ Pessoa 1:', pessoa1.getNome(), '-', pessoa1.getEmail());

const pessoa2 = new Pessoa('Maria Santos', 'maria@invalido');
console.log('❌ Pessoa 2 (email inválido):', pessoa2.getNome(), '-', pessoa2.getEmail() || 'Não definido');

pessoa2.setEmail('maria@empresa.com');
console.log('✅ Pessoa 2 corrigida:', pessoa2.getNome(), '-', pessoa2.getEmail());

// 2. CADASTRO DE ALUNOS
console.log('\n🔹 CADASTRANDO ALUNOS:');

const aluno1 = new Aluno('Carlos Souza', 'carlos@estudante.com', '20241234');
console.log('✅ Aluno 1:', aluno1.getNome(), '- Matrícula:', aluno1.getMatricula());

const aluno2 = new Aluno('Ana Pereira', 'ana@escola.com', '123');
console.log('❌ Aluno 2 (matrícula inválida):', aluno2.getNome(), '- Matrícula:', aluno2.getMatricula() || 'Inválida');

aluno2.setMatricula('20245678');
console.log('✅ Aluno 2 corrigido:', aluno2.getNome(), '- Matrícula:', aluno2.getMatricula());

// 3. CADASTRO DE PROFESSORES
console.log('\n🔹 CADASTRANDO PROFESSORES:');

const prof1 = new Professor('Dra. Fernanda Lima', 'fernanda@universidade.edu.br', 'Matemática');
console.log('✅ Professor 1:', prof1.getNome(), '-', prof1.getEmail(), '- Disciplina:', prof1.getDisciplina());

const prof2 = new Professor('Dr. Roberto Alves', 'roberto@escola.com', 'Física');
console.log('❌ Professor 2 (email não permitido):', prof2.getNome(), '-', prof2.getEmail() || 'Não definido');

prof2.setEmail('roberto@ifb.edu.br');
console.log('✅ Professor 2 corrigido:', prof2.getNome(), '-', prof2.getEmail());

// 4. RELATÓRIO FINAL
console.log('\n' + '='.repeat(50));
console.log('📊 RELATÓRIO FINAL DO SISTEMA');
console.log('='.repeat(50));

const pessoas = [pessoa1, pessoa2, aluno1, aluno2, prof1, prof2];

pessoas.forEach((p, index) => {
    console.log(`\n👤 Registro ${index + 1}:`);
    console.log(`   Nome: ${p.getNome()}`);
    console.log(`   Email: ${p.getEmail() || 'NÃO DEFINIDO'}`);
    
    if (p instanceof Aluno) {
        console.log(`   Tipo: ALUNO`);
        console.log(`   Matrícula: ${p.getMatricula() || 'NÃO DEFINIDA'}`);
    } else if (p instanceof Professor) {
        console.log(`   Tipo: PROFESSOR`);
        console.log(`   Disciplina: ${p.getDisciplina() || 'NÃO DEFINIDA'}`);
    } else {
        console.log(`   Tipo: PESSOA COMUM`);
    }
});

console.log('\n' + '='.repeat(50));
console.log('✅ TESTES FINALIZADOS');
console.log('='.repeat(50));