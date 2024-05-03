// métodos de iteração

let frutas = ["Maçã", "Uva", "Laranja", "Banana"];

//filter() - filtrar algo
// parâmetros: value, index, array
let bigFruts = frutas.filter((item) => {
    if (item.length > 4) {
        return true;
    }
});
let bigFruts2 = frutas.filter((item) => item.length > 4);

let ok = frutas.every((value) => value.length > 3);
let ok2 = frutas.some((value) => value.length > 3);

if (ok){
    console.log("Todos são maiores que 3");
}else{
    console.log("Não são todos");
}
if (ok2){
    console.log("Algum item é maior que 3");
}else{
    console.log("Nenhum é maior que 3");
}

if (frutas.includes("Uva")){
    console.log("Tem uva");
}else{
    console.log("Não tem uva...");
}