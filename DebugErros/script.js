function validaArray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError("Envie os parâmetros");

        if (typeof arr !== 'object') throw new TypeError("O parâmentro Array precisa ser do tipo object");
     
        if (typeof num !== 'number') throw new TypeError("O parâmetro Num precisa ser do tipo number");
     
        if (arr.length !== num ) throw new RangeError("Tamanho do array inválido");

        return arr;
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError:" + e.message)
        } else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError:" + e.message)
        } else if (e instanceof RangeError) {
            console.log("Este erro é um RangeError:" + e.message)
        } else {
            console.log("Tipo de erro não esperado:" + e);
        }
    }
}

//Chamar função
console.log(validaArray());
//console.log(validaArray([],5));
//console.log(validaArray([],'a'));
//console.log(validaArray([1, 2, 3, 4, 5],5));