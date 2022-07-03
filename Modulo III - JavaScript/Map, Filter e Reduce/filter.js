function filtraPares(arr){
    return arr.filter(callback)
}

function callback(item){
    return item % 2 === 0
}

const meuArray = [100, 102, 1202, 3251, 2514, 7, 8, 9, 6]

console.log(filtraPares(meuArray))