var nome = "Vinicius";

//HOISTING, a variável enviada para o escopo geral do JS. É uma variável Global!
// Transferida para o escopo geral, ou seja tem acesso a ela em qualquer área do sistema

console.log( window.nome );

if(nome == "Vinicius") {
    var idade = 90;
    let casa = 10;
    console.log("(DENTRO DO IF)A casa do Vinicius é a : "+casa);
}
console.log("A idade do Vinicius é: "+idade);
console.log("(FORA DO IF)A casa do Vinicius é a : "+casa);
let nomecompleto = "Vinicius";

let nomecompletos = "Vinicius";
//let nomecompletos = "Vinicius";
nomecompletos = "Viniciusss";

//Disponível apenas naquele escopo específico de código
// Não é possível acessar em outro local ou em no window
// Evita gasto desnecessário de memória! Evitar de confudir variáveis, pois só é usada no escopo específico!
// Não pode ser redeclarar, apenas pode ter o valor trocado

console.log( window.nomecompleto );

const nomes = "Vinicius"

// é uma, variável de valor contante

// não pode modificar o valor da variável constante.

// Há exceções para arrays e objetos.

const algo = {
    nome: 'Vinicius',
    sobrenome: 'Peretta'
}
cons


