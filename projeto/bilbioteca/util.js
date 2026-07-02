// biblioteca/util.js

// para validar o e-mail temos()

function validarEmail(gmail){
    //verificação do email
    if (!email || !email.includes('@')){
        return false; // caso nao atenda o critério a validação falha 
    }
return email.endsWith('.com') ||email.endsWith('.edu.br');
}

//função para validar a matricula do aluno
function validarMatricula(matricula){
    //verifica se a matricula é um texto e remove os espaços em brancos (.trim()), 
    return typeof matricula === 'string' && matricula.trim().length >0;
}

//função que valida o cpf
function validarCPF(cpf){
    //verifica se e um texto e se contem 11 caracteres 
    return typeof cpf === 'string' && cpf.length === 11;
}


//para exportar esta função temos

module.exports = { validarEmail, validarMatricula, validarCPF};