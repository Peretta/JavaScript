let pessoa = {
    nome: 'Vinicius',
    sobrenome: 'Peretta',
    idade: 90,
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    },
    agir: () => {
        return `Bla Bla Bla`;
    }
}
console.log(pessoa.nomeCompleto());