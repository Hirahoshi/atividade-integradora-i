/// importando a bilbioteca pelo caminho relativo

const util = require('.../biblioteca/util');


class Pessoa{
    // encapsulamento
    #nome;
    #email;

    // constructor-- criando um objento em sua instância
    constructor(nome, email){
        this.setNome(nome);// atribui o nome de forma controlada
        this.setEmail(email); // atribui e-mail de passando pela validação
    }

    // método de  Setter para modificar um atributo privado#nome
    setNome(nome){
        this.#nome =nome;
    }
    // método getter para o nome: permite ler o valor do atributo privado #nome fora de sua classe
    getNome(){
        return this.#nome;
    }
    //metodo de stter para e-mail
    setEmail(email){
        //a classe delegavalidações para a bilbioteca 
        if (util.validarEmail(email)){ // diz que a bilbioteca é valido
            this.#email = email;
            return true;
        }
        return false;
    }
    //metodo gertter para email permite acessar de forma segura
    getEmail(){
        return this.#email;
    }
}

//exportando
module.exports = Pessoa;