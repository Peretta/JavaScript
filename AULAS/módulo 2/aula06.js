//retorno condicional

function maiorDeIdade(idade){
    if (idade >= 18){
        return true;
    }else{
        return false;
    }
}
let verificacao = maiorDeIdade(17);
console.log(verificacao)