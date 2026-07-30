# 📚 Sistema Acadêmico

Sistema de gerenciamento acadêmico desenvolvido em JavaScript com Programação Orientada a Objetos.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![OOP](https://img.shields.io/badge/OOP-Encapsulamento_Herança-00599C?style=for-the-badge)

---

## 📖 Sobre o Projeto

Este projeto é um **exercício integrador** que consolida os conceitos de:

- **Programação Orientada a Objetos** (Classes, Herança, Encapsulamento)
- **Modularização** (Divisão do código em módulos reutilizáveis)
- **Validação de Dados** (Utilização de funções em bibliotecas)
- **Reutilização de Código** (DRY - Don't Repeat Yourself)

O sistema gerencia o cadastro de **pessoas**, **alunos** e **professores** de uma instituição de ensino, validando todas as informações antes de armazená-las.

---

## 🗂️ Estrutura do Projeto

```
projeto/
│
├── biblioteca/
│   └── util.js                 # Funções de validação reutilizáveis
│
├── pessoas/
│   ├── Pessoa.js               # Classe base
│   ├── Aluno.js                # Herda de Pessoa
│   └── Professor.js            # Herda de Pessoa com sobrescrita
│
└── main.js                     # Arquivo de testes e demonstração
```

---

## 🧩 Funcionalidades

### 📌 Biblioteca de Validação (`util.js`)

| Função | Descrição | Regras |
|--------|-----------|--------|
| `validarEmail(email)` | Valida formato de e-mail | Deve conter `@` e terminar com `.com` ou `.edu.br` |
| `validarMatricula(matricula)` | Valida número de matrícula | Deve ter exatamente 8 dígitos numéricos |
| `validarCPF(cpf)` | Valida CPF | Deve ter 11 dígitos numéricos |

### 👤 Classe Pessoa

- Atributos privados: `#nome`, `#email`
- Métodos: `setNome()`, `getNome()`, `setEmail()`, `getEmail()`
- `setEmail()` utiliza a biblioteca para validação

### 🧑‍🎓 Classe Aluno (herda de Pessoa)

- Atributo privado adicional: `#matricula`
- Métodos: `setMatricula()`, `getMatricula()`
- Validação da matrícula via biblioteca

### 👨‍🏫 Classe Professor (herda de Pessoa)

- Atributo privado adicional: `#disciplina`
- Métodos: `setDisciplina()`, `getDisciplina()`
- **Sobrescrita:** `setEmail()` aceita apenas e-mails terminados em `.edu.br`

### 🧪 Testes (`main.js`)

- Cadastro de pessoas, alunos e professores
- Testes com dados válidos e inválidos
- Relatório final com todos os registros
- Função `mostrarDados()` para exibição padronizada

---

## 🚀 Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) versão 18 ou superior

### Passos

1. **Clone o repositório** (ou crie os arquivos manualmente)

```bash
git clone https://github.com/seu-usuario/sistema-academico.git
cd sistema-academico
```

2. **Estrutura os arquivos** conforme a árvore acima

3. **Execute o programa**

```bash
node main.js
```

### 📋 Exemplo de saída esperada

```
==================================================
📚 SISTEMA ACADÊMICO - TESTES
==================================================

🔹 CADASTRANDO PESSOAS:
✅ Pessoa 1 criada: João Silva - joao@email.com
❌ Pessoa 2 (email inválido): Maria Santos - Não definido
✅ Pessoa 2 corrigida: Maria Santos - maria@empresa.com

🔹 CADASTRANDO ALUNOS:
✅ Aluno 1: Carlos Souza - carlos@estudante.com - Matrícula: 20241234
❌ Aluno 2 (matrícula inválida): Ana Pereira - Matrícula: Inválida
✅ Aluno 2 corrigido: Ana Pereira - Matrícula: 20245678

🔹 CADASTRANDO PROFESSORES:
✅ Professor 1: Dra. Fernanda Lima - fernanda@universidade.edu.br - Disciplina: Matemática
❌ Professor 2 (email não permitido): Dr. Roberto Alves - Não definido
✅ Professor 2 corrigido: roberto@ifb.edu.br

==================================================
📊 RELATÓRIO FINAL DO SISTEMA
==================================================

👤 Registro 1:
   Nome: João Silva
   Email: joao@email.com
   Tipo: PESSOA COMUM

👤 Registro 3:
   Nome: Carlos Souza
   Email: carlos@estudante.com
   Tipo: ALUNO
   Matrícula: 20241234

👤 Registro 5:
   Nome: Dra. Fernanda Lima
   Email: fernanda@universidade.edu.br
   Tipo: PROFESSOR
   Disciplina: Matemática

==================================================
✅ TESTES FINALIZADOS
==================================================
```

---

## ⭐ Desafios Extras

### 🚀 Desafio 1 - Validação de E-mail Aprimorada

A função `validarEmail()` foi melhorada para aceitar apenas:
- E-mails que contenham `@`
- Domínios terminados em `.com` ou `.edu.br`
- Usuário e domínio não vazios

```javascript
function validarEmail(email) {
    if (typeof email !== 'string') return false;
    if (!email.includes('@')) return false;
    
    const partes = email.split('@');
    if (partes.length !== 2) return false;
    
    const usuario = partes[0];
    const dominio = partes[1];
    
    if (usuario.length === 0 || dominio.length === 0) return false;
    
    return dominio.endsWith('.com') || dominio.endsWith('.edu.br');
}
```

### 🚀 Desafio 2 - Função `mostrarDados()`

Função que exibe os dados de qualquer objeto (`Pessoa`, `Aluno` ou `Professor`) sem duplicar código:

```javascript
function mostrarDados(objeto) {
    console.log(`Nome: ${objeto.getNome()}`);
    console.log(`Email: ${objeto.getEmail()}`);
    
    if (objeto instanceof Aluno) {
        console.log(`Matrícula: ${objeto.getMatricula()}`);
    }
    
    if (objeto instanceof Professor) {
        console.log(`Disciplina: ${objeto.getDisciplina()}`);
    }
}
```

---

## 📌 Questões Teóricas

| Pergunta | Resposta |
|----------|----------|
| **Qual a diferença entre módulo e classe?** | Módulo organiza código em arquivos reutilizáveis; Classe é modelo para criar objetos. |
| **Por que utilizar encapsulamento?** | Para proteger dados internos e garantir que sejam modificados apenas por métodos autorizados. |
| **Qual a vantagem de reutilizar funções em uma biblioteca?** | Evita duplicação, facilita manutenção e padroniza validações. |
| **Para que serve `super`?** | Acessa métodos/construtor da classe pai (superclasse). |
| **Qual a diferença entre herança e sobrescrita?** | Herança: filha herda da pai. Sobrescrita: filha redefine método herdado. |
| **Por que a validação deve ocorrer no `setEmail()`?** | Para garantir que toda alteração passe pela validação, mantendo integridade. |
| **Quando usar `&&` e `\|\|`?** | `&&` para todas as condições verdadeiras; `\|\|` para pelo menos uma verdadeira. |

---

## 🛠️ Tecnologias Utilizadas

- **JavaScript ES6+** - Linguagem principal
- **Node.js** - Ambiente de execução
- **Módulos CommonJS** - `require()` / `module.exports`
- **Classes e Herança** - Orientação a objetos
- **Atributos Privados** - `#` para encapsulamento

---

## 📚 Conteúdos Abordados

- ✅ Variáveis e funções
- ✅ Módulos (require / module.exports)
- ✅ Classes e objetos
- ✅ Construtores
- ✅ Encapsulamento
- ✅ Getters e Setters
- ✅ Herança
- ✅ Sobrescrita de métodos
- ✅ Operadores de comparação e lógicos
- ✅ Reutilização de código

---

## 🤝 Contribuição

Este é um projeto educacional, mas sugestões são bem-vindas!

1. Faça um **Fork** do projeto
2. Crie uma **Branch** (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a Branch (`git push origin feature/nova-funcionalidade`)
5. Abra um **Pull Request**

---

## 📄 Licença

Este projeto está sob a licença **MIT** - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## ✨ Agradecimentos

Desenvolvido como parte do curso de **JavaScript e Orientação a Objetos** do **IFB - Instituto Federal de Brasília**.

---

<div align="center">

**Feito com 💙 para fins educacionais**

[⬆ Voltar ao topo](#-sistema-acadêmico)

</div>
