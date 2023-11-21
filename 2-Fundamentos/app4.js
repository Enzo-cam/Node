//Testeo del orden de ejecucion y desarrollo al respecto del event loop.

// El code execution funciona con dos cosas
// El llamado a la funcion global de node, la cual se desempeña en el call stack y luego el Libuv
// Libuv es quien se encarga de ejecutar las funciones asíncronas
// Una vez terminada la lectura de la funcion asincrona, vuelve al callstack, se ejecuta y se elimina.
// Libuv funciona FirstInFirstOut, si es que ya estan completados

console.log('Inicio de programa');

// Aca vemos el primer callback
// Funcion que se manda como argumento a otra funcion
setTimeout( () => {
    console.log('Primer Timeout');
}, 3000 );

// Al poner este en 1 y el tercero en 0, este se imprimirá primero debido a que mientras esta espernado
// Esa diferencia de 1 milisegundo ya fue resuelta y debido a que este llamado entro primero, saldrá primero.
setTimeout( () => {
    console.log('Segundo Timeout'); 
}, 1 );


setTimeout( () => {
    console.log('Tercer Timeout');
}, 0 );


console.log('Fin de programa');