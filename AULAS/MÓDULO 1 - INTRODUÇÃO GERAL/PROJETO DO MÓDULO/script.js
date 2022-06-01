var data = new Date();
var hora = data.getHours();


const titulo = document.querySelector('#titulo');
const navegador = document.querySelector('#navegador');
const imagem = document.querySelector('#imagem');

    if (hora < 6){
        navegador.innerHTML = "Boa noite!";

        titulo.innerHTML = "Boa noite!";

        imagem.innerHTML = `<div id='imagem'><img src="noite.jpg" alt="Noite"></div>`
    }
    else if (hora < 12) {

        navegador.innerHTML = "Bom dia!";

        titulo.innerHTML = "Bom dia!";

        imagem.innerHTML = `<div id='imagem'><img src="manha.webp" alt="Manhã" id = "img"></div>`

    } else if(hora < 18) {

        navegador.innerHTML = "Boa tarde!";

        titulo.innerHTML = "Boa tarde!";

        imagem.innerHTML = `<div id='imagem'><img src="tarde.webp" alt="Tarde" id = "img"></div>`

    } else if (hora <= 24) {

        navegador.innerHTML = "Boa noite!";

        titulo.innerHTML = "Boa noite!";

        imagem.innerHTML = `<div id='imagem'><img src="noite.jpg" alt="Noite" id = "img"></div>`

    } else {

        console.log("Não existe algo para falar nesse caso");

    }