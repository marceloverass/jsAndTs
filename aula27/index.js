// OPERADOR TERNARIO
// (condiçao) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUsuario = 9999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuário Comum";

const corUsuario = null;
const corPadrao = corUsuario || 'black';

console.log(nivelUsuario, corPadrao);