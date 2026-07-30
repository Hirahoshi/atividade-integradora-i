// main.js
const Pessoa = require('./pessoas/Pessoa');
const Aluno = require('./pessoas/Aluno');
const Professor = require('./pessoas/Professor');

console.log('='.repeat(50));
console.log('📚 SISTEMA ACADÊMICO - TESTES');
console.log('='.repeat(50));

// ==========================================
// 1. CADASTRO DE PESSOAS
// ==========================================
console.log('\n🔹 CADASTRANDO PESSOAS:');

// Pessoa 1 - Dados válidos
const pessoa1 = new Pessoa('João Silva', 'joao@email.com');
console.log('✅ Pessoa 1 criada:', pessoa1.getNome(), '-', pessoa1.getEmail());

// Pessoa 2 - Tentativa com email inválido
const pessoa2 = new Pessoa('Maria Santos', 'maria@invalido');
console.log('❌ Pessoa 2 (email inválido):', pessoa2.getNome(), '-', pessoa2.getEmail() || 'Não definido');

// Corrigindo o email da pessoa 2
pessoa2.setEmail('maria@empresa.com');
console.log('✅ Pessoa 2 corrigida:', pessoa2.getNome(), '-', pessoa2.getEmail());

// ==========================================
// 2. CADASTRO DE ALUNOS
// ==========================================
console.log('\n🔹 CADASTRANDO ALUNOS:');

// Aluno 1 - Dados válidos
const aluno1 = new Aluno('Carlos Souza', 'carlos@estudante.com', '20241234');
console.log('✅ Aluno 1:', aluno1.getNome(), '-', aluno1.getEmail(), '- Matrícula:', aluno1.getMatricula());

// Aluno 2 - Tentativa com matrícula inválida
const aluno2 = new Aluno('Ana Pereira', 'ana@escola.com', '123');
console.log('❌ Aluno 2 (matrícula inválida):', aluno2.getNome(), '- Matrícula:', aluno2.getMatricula() || 'Inválida');

// Corrigindo a matrícula
aluno2.setMatricula('20245678');
console.log('✅ Aluno 2 corrigido:', aluno2.getNome(), '- Matrícula:', aluno2.getMatricula());

// ==========================================
// 3. CADASTRO DE PROFESSORES
// ==========================================
console.log('\n🔹 CADASTRANDO PROFESSORES:');

// Professor 1 - Dados válidos (email .edu.br)
const prof1 = new Professor('Dra. Fernanda Lima', 'fernanda@universidade.edu.br', 'Matemática');
console.log('✅ Professor 1:', prof1.getNome(), '-', prof1.getEmail(), '- Disciplina:', prof1.getDisciplina());

// Professor 2 - Tentativa com email que não termina em .edu.br
const prof2 = new Professor('Dr. Roberto Alves', 'roberto@escola.com', 'Física');
console.log('❌ Professor 2 (email não permitido):', prof2.getNome(), '-', prof2.getEmail() || 'Não definido');

// Corrigindo o email do professor 2
prof2.setEmail('roberto@ifb.edu.br');
console.log('✅ Professor 2 corrigido:', prof2.getNome(), '-', prof2.getEmail());

// Professor 3 - Tentativa com email inválido no geral
const prof3 = new Professor('Dr. Carlos Mendes', 'carlos@invalido', 'Química');
prof3.setEmail('carlos@ifb.edu.br');
console.log('✅ Professor 3:', prof3.getNome(), '-', prof3.getEmail(), '- Disciplina:', prof3.getDisciplina());

// ==========================================
// 4. RELATÓRIO FINAL
// ==========================================
console.log('\n' + '='.repeat(50));
console.log('📊 RELATÓRIO FINAL DO SISTEMA');
console.log('='.repeat(50));

const pessoas = [pessoa1, pessoa2, aluno1, aluno2, prof1, prof2, prof3];

pessoas.forEach((p, index) => {
    console.log(`\n👤 Registro ${index + 1}:`);
    console.log(`   Nome: ${p.getNome()}`);
    console.log(`   Email: ${p.getEmail() || 'NÃO DEFINIDO'}`);
    
    // Verifica se é Aluno
    if (p instanceof Aluno) {
        console.log(`   Tipo: ALUNO`);
        console.log(`   Matrícula: ${p.getMatricula() || 'NÃO DEFINIDA'}`);
    }
    // Verifica se é Professor
    else if (p instanceof Professor) {
        console.log(`   Tipo: PROFESSOR`);
        console.log(`   Disciplina: ${p.getDisciplina() || 'NÃO DEFINIDA'}`);
    }
    // Senão é apenas Pessoa
    else {
        console.log(`   Tipo: PESSOA COMUM`);
    }
});

console.log('\n' + '='.repeat(50));
console.log('✅ TESTES FINALIZADOS');
console.log('='.repeat(50));