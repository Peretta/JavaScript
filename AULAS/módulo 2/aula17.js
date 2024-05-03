//acessando e alterando objetos

let personagem = {
    nome: 'Vinicius',
    idade: 19,
    pais: 'Brasil',
    olhos: ['azul', 'preto'],
    caracteristicas: {
        magia: 5,
        forca:10,
        stamina:20
    }
}

personagem.nome = 'Pedro';
personagem.caracteristicas.forca += 5;
console.log(`Força = ${personagem.caracteristicas.forca}`)

personagem.olhos.push('verde');
console.log(personagem.olhos)

let pessoa ={
    nome: 'Vini',
    idade: '19',
    carros: [
        {modelo: 'fiat', color: 'preto'},
        {modelo: 'ferrari', color: 'branco'}
    ]
}
console.log(pessoa.carros[0].color);
