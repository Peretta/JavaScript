// eventos do clique

// onclick() || quando ocorrer um clique algo é executado;

let botao = document.querySelector("#botao");

botao.addEventListener("click", clicou);

botao.addEventListener("click", () => {
    alert("Clicou");
})

function clicou(){
    alert("clicou");
}
