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

    const funcional = document.getElementById('form-name').value;

    const deportivo = document.getElementById('form-species').value;

    const fuerza = document.getElementById('form-owner').value;

    const aerobico = document.getElementById('form-file');

    const gimnasio = document.getElementById('form-file');

    const personalizado = document.getElementById('form-file');

    const grupal= document.getElementById('form-file');

    const individual = document.getElementById('form-file');

    const tenis = document.getElementById('form-file');

    const formData = new FormData();

    formData.append('nombre', nombre);

    formData.append('especie', especie);

    formData.append('duenio', dueño);

    formData.append('file', file.files[0]);

    const response = await fetch('/api/pets', {

     method: 'POST',

     body: formData,

     headers: {

     },

    });


} 
