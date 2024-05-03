//condicional ternário

let isMember = true;

let shipping =( isMember ? 2 : 10);

console.log(isMember ? "MEMBRO" : "Não é membro");
console.log("Frete: ", shipping);

let age = 90;
let isAdult = ((age >= 18) ? 'SIM' : "NÃO")