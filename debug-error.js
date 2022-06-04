function verificaArray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError('Os parâmetros não foram enviados!');

        if (typeof arr !== 'object')
            throw new TypeError('O array não é do tipo object!');

        if (typeof num !== 'number')
            throw new TypeError('O array não é do tipo number!');

        if (arr.length !== num) throw new RangeError('O tamanho do array inválido!');

        return arr;
    } catch (e) {
        if (e instanceof RangeError) {
            console.log('RangeError!');
            console.log(e.message);
        } else if (e instanceof ReferenceError) {
            console.log('ReferenceError!');
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log('TypeError!');
            console.log(e.message);
        }
        else {
            console.log('Tipo de erro não esperado' + e);
        }
    }
}

console.log(verificaArray([1, 2, 3, , 5, 4], 4));