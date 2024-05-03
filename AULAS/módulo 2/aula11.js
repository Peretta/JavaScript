let count = 0 // variável global
function add(){
    let count = 10;// uma variável local
    count++;
}
add();
add()

console.log(count) 

