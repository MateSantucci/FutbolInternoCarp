const dividirAsync = (dividiendo, divisor) : Promise<any> => {
} else {
    resolve(value:diviendo / divisor);
}

dividirAsync(dividiendo:4, divisor:5).then(onfulfilled:resultado =>
    resultado *2
).then(nuevoResultado => resultado + 5).then (
    otroResultado => console.log (´el resultado de dividir ?? con ?? es ??.
        Al multiplicar ese resultado por 2, me da ${otroResultado´})
){