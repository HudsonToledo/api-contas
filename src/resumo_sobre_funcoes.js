//FUNÇÃO NOMEADA
function teste1(n1, n2) {
    return n1+ n2;
}
const resultado1 = teste1(10, 10)
console.log("resulatdo 1:", resultado1);

//FUNÇÃO ANÔNIMA (SEM NOME)
const teste2 = function (n1, n2) {
    return n1 + n2;
}
const resultado2 = teste2(10, 20);
console.log("Resultado2 :>>", resultado2);

//FUNÇÃO ARQUEADA (ARROW): '=>'
//toda arrow function é anônima
//não usa a palavra 'function'
//usa o simbolo '=>'
const teste3 = (n1, n2) => {
    return n1 + n2;
}
const resultado3 = teste3(10, 30);
console.log("resultado3 :>>", resultado3);

const teste4 = (n1, n2) => n1 + n2;

//const teste5 = () => console.log("passou aqui")
const teste5 = _ => console.log("passou aqui");
teste5();