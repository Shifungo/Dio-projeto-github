const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5]

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet];
}
function valores(arr){
    const mySet = []

    return [mySet];
}

console.log(valoresUnicos(meuArray))
console.log(valores(meuArray))