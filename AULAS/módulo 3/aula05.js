// manipular elementos

let elemento = document.querySelector("#botao");

elemento.addEventListener("click", () => {
    const div = document.querySelector("div");
    
    console.log(div) // ver se o elemento foi selecionado
    console.log(div.children) // retorna os elementos imediados (filhos)

    //const ul = teste.children[0];
    const ul = div.querySelector("ul"); 
    
    ul.innerHTML = "<li> Item alterado </ul>"; // ALTERAR o valor do que está dentro do elemento
    ul.innerHTML += "<li> Item alterado </ul>"; // ADICIONAR AO valor que está dentro do elemento

    ul.innerText = "Texto"; // apenas texto

    ul.outerHTML = ""; //leva em conta todo até mesmo o elemento que esta sendo selecionado

})