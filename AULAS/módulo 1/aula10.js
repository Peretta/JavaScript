/** 
 * Diferença entre let, var e const
 * 
 * O let permite alterar o valor da variável em qualquer momento, é uma variável local.
 * O var também permite isso, é uma variável global.
 * O const não permite alterar o valor da variável, ele é constante
*/

let nome = "Vini"
console.log(nome)
nome = "João"
console.log(nome)
var idade = 12
console.log(idade)
idade = 19
console.log(idade)
const gravidade = 9.81