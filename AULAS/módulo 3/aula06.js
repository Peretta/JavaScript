let elemento = document.querySelector("#botao");

elemento.addEventListener("click", () => {
    const div = document.querySelector("div");
    
    console.log(div) // ver se o elemento foi selecionado
    console.log(div.children) // retorna os elementos imediados (filhos)

    //const ul = teste.children[0];
    const ul = div.querySelector("ul"); 
    
    ul.children[0].append("(alterado)"); // adiciona o conteúdo ao que já tenho. Funciona apenas com texto

    let newLi = document.createElement("li"); // cria element
    newLi.innerHTML = "Item adicionado"; // adiciona texto
    ul.appendChild(newLi); // adiciona ao html 
    //adiciona ao final

    ul.prepend(newLi); //adiciona no começo


    // Diferença do inner para o append
    // O inner substitui o conteúdo, enquanto o append adiciona.
})