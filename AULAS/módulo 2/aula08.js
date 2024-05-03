function calcularImovel(metragem, quartos){
    switch(quartos){
        case 1:
            return metragem*1;
        case 2:
            return metragem*1.2;
        case 3:
            return metragem*1.5;
    }
}

let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa ${preco}`);