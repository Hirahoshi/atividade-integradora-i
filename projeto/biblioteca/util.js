// biblioteca/util.js

/**
 * Valida se o email possui formato válido
 * Regras: deve conter @ e terminar com .com ou .edu.br
 */
function validarEmail(email) {
    if (typeof email !== 'string') return false;
    
    // Verifica se contém @
    if (!email.includes('@')) return false;
    
    // Verifica se termina com .com ou .edu.br
    const dominio = email.split('@')[1];
    if (!dominio) return false;
    
    return dominio.endsWith('.com') || dominio.endsWith('.edu.br');
}

/**
 * Valida se a matrícula é válida
 * Regra: deve ter exatamente 8 dígitos numéricos
 */
function validarMatricula(matricula) {
    if (typeof matricula !== 'string') return false;
    
    // Verifica se tem 8 caracteres e são todos números
    return /^\d{8}$/.test(matricula);
}

/**
 * Valida se o CPF é válido (formato básico)
 * Regra: deve ter 11 dígitos numéricos
 */
function validarCPF(cpf) {
    if (typeof cpf !== 'string') return false;
    
    // Remove pontos e traços para verificar apenas os números
    const cpfLimpo = cpf.replace(/[^\d]/g, '');
    
    // Verifica se tem 11 dígitos e são todos números
    return /^\d{11}$/.test(cpfLimpo);
}

module.exports = {
    validarEmail,
    validarMatricula,
    validarCPF
};