//funções básicas dentro de array

let frutas = ["Maçã", "Uva", "Laranja", "Banana"];

console.log(frutas); // mostra o Array
console.log(frutas.length); //tamanho do Array
frutas.push("Kiwi"); //adicionar item ao Array

frutas.pop(); // deleta o último item
frutas.shift(); //deleta o primeiro item

console.log(frutas.join(' ')); // juntar, ele retorna os items do array nesse separador. Converte do array para String

frutas[frutas.length - 1] = "Pera"; // altera o último item

