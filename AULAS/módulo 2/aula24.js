// ordenação de arrays

let frutas = ["Maçã", "Uva", "Laranja", "Banana"];

frutas.sort();

console.log(frutas); // ordem alfabética

frutas.sort(); // ordena A-Z
frutas.reverse(); // inverte o vetor

console.log(frutas); // ordem descrescente

let carros = [
    {brand: 'fiat', year:2024},
    {brand: 'ferrari', year:2022},
    {brand: 'bmw', year:2023}
]

//lógica
carros.sort((a, b) => {
    if (a.year > b.year){
        return 1;
    }
    else if(a.year < b.year){
        return -1;
    }else{
        return 0;
    }
});
carros.sort((a,b) => {
    return a.year - b.year;
})
carros.sort((a,b) => a.year - b.year)
