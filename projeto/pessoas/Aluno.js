//importando a classe base pessoa
const Pessoa = require('./Pessoa');
//importando a biblioteca para validar a matricula
const util = require('../biblioteca/util');

// a palavra chave EXTENDS significa que  Aluno herda(é filha )d a classe pessoa
class Aluno extends Pessoa{
    //atrivuto privado especifico e exclusico da classe aluno
    #matricula;

    constructor(nome, email, matricula){
        //"super()" invoca o constructor da classe mãe (Pessoa)
        super (nome, email);

        // inicializaremos o atrivubto especifico de Aluno
        this.setMatricula(matricula);
    }
    //setter para matricula com sua respctica validaçõa
    setMatricula(matricula){
        if(util.validarMatricula(matricula)){
            this.#matricula = matricula; // muda o valor apenas se for uma matricula válida
            return true;
        }
        return false;
    }

    //getter para obter a matrícula do aluno
    getMatricula(){
        return this.#matricula;
    }
}

//exportando
module.exports = Aluno;