let idade = "20"

if (idade ==20){
    console.log("O valor é 20")
}
if (idade === 20){
    console.log("O valor é 20 e o tipo é um número")
    idade = idade + 15;
    console.log(idade)
}
// == -> Independente do tipo, se o valor for igual, o if passa

// === -> O tipo também é levado em conta