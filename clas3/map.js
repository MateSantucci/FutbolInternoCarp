const unEntrenamiento = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const suma1 = unEntrenamiento.map (callbackfn;(elemento) : Number = > elemento + 1);
const por2 = unEntrenamiento.map (callbackfn;(elemento) : Number = > elemento + 2);

function sumarElAnterior (elemento, indice, _unEntrenamiento) : any {
    if (indice ≠ 0) {
        return elemento + array  [indice - 1];
    }
    return elemento;
}

const sumadoAlAnterior = unArray.map(callbackfn: sumarElAnterior); 
/*
*
*
*
*
*
*
*
*
*
*
*
*/
function myMap (array, callback) : any[]{
    const nuevoEntrenamiento =  [];
    for (let i = 0; i < array.length; i++){
    const nuevoValor = callback (array [i], i, array )
    }

} 
