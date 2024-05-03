let usuario = "admin";
let senha = "123";

function validar(usuario, senha){
    if ((usuario === 'admin')&&(senha ==="123")){
        return true;
    }else{
        return false;
    }
}
let validacao = validar(usuario, senha);
if (validacao){
    console.log("Acesso permitido");
}else{
    console.log("Acesso negado");
}