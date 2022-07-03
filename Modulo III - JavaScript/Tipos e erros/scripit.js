function recebeArrayN(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError('envie os parametros');

        if (typeof arr !== 'object') throw new TypeError('array precisa ser object')

        if (typeof num !== 'number') throw new TypeError('numero precisa ser um numero..')

        if (arr.length !== num) throw new RangeError('tamanho invalido')

        return arr;
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log('esse erro é um referenceerror!')
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log('esse erro é um typeerror!')
            console.log(e.message)
        } else if (e instanceof RangeError) {
            console.log('esse erro é um rangeError!')
            console.log(e.message)
        } else {
            console.log('erro inesperado: ' + e)
        }

    }




}




console.log(recebeArrayN());