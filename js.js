////////////////////////////////////////////////////////////////////////////////
// 1.Variables
console.log(`
/////////////////////////
// 1.Variables         //
/////////////////////////`);

// Crea un cuadro de diálogo (alert) que muestre lo siguiente “JavaScript funcionando correctamente”
// alert("JavaScript funcionando correctamente");

// Comenta el código que muestra el cuadro de diálogo
// (Ver arriba)

// Crear variable tipo let de nombre variableSinValor declarada sin valor
let variableSinValor;
console.log("variableSinValor:", variableSinValor);

// Crear 2 variables tipo let de nombres booleano1 y booleano2 con valores booleanos
let booleano1 = true;
let booleano2 = false;
console.log("Variables booleanas:", booleano1, booleano2);

// Crear variable tipo const de nombre PI declarada con valor 3.14
const PI = Math.PI;
console.log("PI (π):", PI);

// Crear variable tipo const de nombre TAU declarada con valor 2 veces PI
const TAU = 2 * PI;
console.log("TAU (τ):", TAU);

// Crear variable tipo const de nombre miNombre declarada con valor tu nombre
const miNombre = "Xavimat";
console.log("miNombre:", miNombre);

// Crear variable tipo const de nombre miNumeroFav declarada con valor numérico
const miNumeroFav = 17;
console.log("miNumeroFav:", miNumeroFav);

// Crea una variable de tipo booleano
let variableDeTipoBooleano;  // CREO VARIABLE (no puedo *definir su tipo* en JS)
variableDeTipoBooleano = true;  // Ahora es booleana, pero podría dejar de serlo
console.log("variableDeTipoBooleano:", variableDeTipoBooleano);

// Muestra por consola la longitud de la variable miNombre
console.log("Longitud de la variable miNombre:", miNombre.length);

// Muestra por consola el tipo de dato de la variable miNumeroFav
console.log("typeof miNumeroFav:", typeof miNumeroFav);

// Muestra un console.log que diga ‘Mi nombre es Euralio y mi numero favorito es 7” concatenado variables declaradas más arriba.
// LAS VARIABLES DECLARADAS MÁS ARRIBA ERAN CONSTANTES, NO PUEDO CAMBIAR SU TEXTO:
// miNombre = "Euralio";    // Error
// miNumeroFav = 7;         // Error
console.log('Mi nombre es ' + miNombre + ' y mi numero favorito es ' + miNumeroFav);
// console.log(`Mi nombre es ${miNombre} y mi numero favorito es ${miNumeroFav}`);

// Muestra por consola “Seré un crack en JavaScript al terminar el bootcamp” en mayúsculas.
console.log("Frase en mayúsculas:", 'Seré un crack en JavaScript al terminar el bootcamp'.toUpperCase());

// Muestra por consola solo los primeros 5 caracteres de la siguiente variable = ‘Hola soy un crack”
const laSiguienteVariable = 'Hola soy un crack';
console.log("Primeros 5 caracteres:", laSiguienteVariable.substring(0, 5));

// Convierte la variable miNumeroFav en una string y luego muestra por consola el tipo de dato que es dicha variable
const miNumeroFavComoString = miNumeroFav.toString();
console.log("Typeof convertida en string:", typeof miNumeroFavComoString);

// Crea una variable, concaténala utilizando template literal, guarda el template literal en otra variable y sacala por consola.
const unaVariable = 'no sé qué poner aquí';
const otraVariable  = `He concatenado con 'template literal': ${unaVariable}`;
console.log("Concatenado con template literal:", otraVariable);

// Muestra por consola la variable PI hasta los 2 primeros decimales
console.log("PI (π) con dos decimales:", PI.toFixed(2));


////////////////////////////////////////////////////////////////////////////////
// 2.Arrays
console.log(`
/////////////////////////
// 2.Arrays            //
/////////////////////////`);

// Crear variable de nombre arrayVacio cuyo valor sea un array vacío
const arrayVacio = [];
console.log("arrayVacío:", arrayVacio);

// Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("arrayNumeros:", arrayNumeros);

// Crear variable de nombre arrayNumeros2 declarada con un array de números del 0 al 15 (0, 1, 2...)
const arrayNumeros2 = [...Array(16).keys()];
console.log("arrayNumeros2:", arrayNumeros2);

// Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)
const arrayNumerosPares = [...Array(10).keys()].filter((n)=> n % 2 == 0);
console.log("arrayNumerosPares:", arrayNumerosPares);

// Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)
// const arrayNumerosNegCeroNegativo = [...Array(10).keys()].map((n) => -n);
const arrayNumerosNeg = [...Array(10).keys()].map((n) => n > 0 ? -n : 0);
console.log("arrayNumerosNeg:", arrayNumerosNeg);

// Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'
const holaMundo = "Hola Mundo".split(' ');
// ¿Quizá era mejor así?:
// const holaMundo = ["Hola", "Mundo"];
console.log("holaMundo:", holaMundo);

// Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'
let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];
console.log("loGuardoTodo:", loGuardoTodo);

// Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
const arrayDeArrays = [
    [756, 'nombre'],
    [225, 'apellido'],
    [298, 'direccion']
];
console.log("arrayDeArrays:", arrayDeArrays);

// Muestra por consola la longitud del array “loGuardoTodo”
console.log("loGuardoTodo.length:", loGuardoTodo.length);

// Crea un nuevo elemento y añadelo al final del array “loGuardoTodo” y muestralo por consola
const unNuevoElemento = 'un nuevo elemento';
loGuardoTodo.push(unNuevoElemento);
console.log("unNuevoElemento:", unNuevoElemento);
console.log("loGuardoTodo.at(-1):", loGuardoTodo.at(-1));
console.log("loGuardoTodo:", loGuardoTodo);

// Ordena de mayor a menor la variable arrayNumeros y muestrala por consola
arrayNumeros.sort((a,b)=>b-a);
console.log("arrayNumeros:", arrayNumeros);
console.log("La misma array, en forma de tabla:");
console.table(arrayNumeros);

// Ordena de menor a mayor la variable arrayNumeros2 y muestrala por consola
// ESTA ARRAY YA ESTABA ORDENADA DE MENOR A MAYOR, NO SE NOTAN CAMBIOS
arrayNumeros2.sort((a,b)=>a-b);
console.log("arrayNumeros2:", arrayNumeros2);
console.log("La misma array, en forma de tabla:");
console.table(arrayNumeros2);

// Muestra por consola la propiedad ‘que’ de la variable loGuardoTodo
// NO HAY 'PROPIEDAD' 'que', EXISTE EL VALOR 'que' EN CIERTA POSICIÓN
console.log("No hay propiedad llamada 'que',", loGuardoTodo.que);
console.log("Sí hay un valor 'que' en segunda posición:", loGuardoTodo[1]);

// Añade la propiedad ‘Euralio’ en la array loGuardoTodo y muestrala por consola
loGuardoTodo.push('Euralio');
console.log("loGuardoTodo con 'Euralio' añadido:", loGuardoTodo);


////////////////////////////////////////////////////////////////////////////////
// 3.Objetos
console.log(`
/////////////////////////
// 3.Objetos           //
/////////////////////////`);

// Crea un objeto de nombre Coche que tenga las propiedades: marca, modelo y matrícula con sus respectivos valores
const Coche = {
    marca: 'Ford',
    modelo: 'Fiesta',
    matricula: 'ABC123',
};
console.log("Coche:", Coche);
console.table(Coche);

// Crea un objeto de nombre Casa que tenga las propiedades: codPostal, calle, portal y piso con sus respectivos valores
const Casa = {
    codPostal: '03012',
    calle: 'Euralio',
    portal: '3',
    piso: '5',
}
console.log("Casa:", Casa);
console.table(Casa);

// Crea un objeto de nombre FullStackDeveloper que tenga las propiedades: array lenguajes(ej. ‘javascript’,’php’), array proyectos(ej. ‘mi página personal’,etc)
const FullStackDeveloper = {
    lenguajes: ['javascript', 'php', 'html', 'css'],
    proyectos: ['mi página personal', 'etc'],
};
console.log("FullStackDeveloper:", FullStackDeveloper);
console.table(FullStackDeveloper);

// Crea un objeto de nombre Perro que tenga las propiedades: nombre, raza, color y edad con sus respectivos valores
const Perro = {
    nombre: 'Nombre del perro',
    raza: 'Raza del perro',
    color: 'Color del perro',
    edad: 4,
};
console.log("Perro:", Perro);
console.table(Perro);

// Crea un objeto de nombre Noticia que tenga las propiedades: titular y cuerpo con sus respectivos valores
const Noticia  =  {
    titular: 'Titular de la noticia',
    cuerpo: 'Cuerpo de la noticia',
};
console.log("Noticia:", Noticia);
console.table(Noticia);

// Crea un objeto de nombre Persona que tenga las propiedades: nombre, apellidos y edad con sus respectivos valores
const Persona = {
    nombre: 'Euralio',
    apellidos: 'Martínez Pérez',
    edad: 34,
};
console.log("Persona:", Persona);
console.table(Persona);

// Muestra por consola el nombre de la variable Persona
// Técnicamente, "el nombre de la variable Persona" es 'Persona'.
// El "valor de la propiedad 'nombre', en la variable 'Persona', es otra cosa."
console.log("Nombre de la variable 'Persona': 'Persona'.")
console.log("Valor de la propiedad 'nombre' de la variable Persona:", Persona.nombre);

// Muestra por consola el lenguaje javascript de la variable FullStackDeveloper
console.log("lenguaje javascript de la variable FullStackDeveloper:", FullStackDeveloper.lenguajes[0]);

// Crea un objeto de nombre Portatil que tenga la propiedad marca, accede a esta propiedad con .marca y muestrala por consola
const Portatil = {
    marca: 'HP',
};
console.log("Propiedad 'marca' de Portatil:", Portatil.marca);

// Obtén el valor de la propiedad marca del objeto anteriormente creado (Portatil) con ["marca"] y muestrala por consola
console.log('obtengoElValor de ["marca"]:', Portatil["marca"]);

// Crea un objeto de nombre Concierto con una propiedad llamada grupos que es un array, obtén el valor de la propiedad y muestrala por consola
const Concierto = {
    grupos: ['Los Chunguitos'],
}
console.log("Concierto:", Concierto);
console.log("Propiedad 'grupos' de 'Concierto':", Concierto.grupos);

// Crea un objeto de nombre Led, con las propiedades: rojo, verde y azul, obtén el valor de las propiedades guardándolo en la variable array RGB[Rojo, Verde, Azul] y muestra este array por consola
const Led = {
    rojo: 20,
    verde: 40,
    azul: 70,
};
console.log("Led:", Led);
console.table(Led);
const RGB = [Led.rojo, Led.verde, Led.azul];
console.log("RGB:", RGB);

// Crea un objeto de nombre O_Error con la propiedad código, obtén el valor de la propiedad y muestrala por consola
const O_Error = {
    "código": "Cierto código con acento en la propiedad",
    codigo: "Cierto código sin acento en la propiedad",
};
console.log("O_Error.codigo:", O_Error.codigo);
console.log('O_Error["código"]:', O_Error["código"]);

// Crea un objeto de nombre Grupo con la propiedad integrantes (array),obtén el valor de la propiedad guardándolo en la variable integrantes y muestrala por consola
const Grupo = {
    integrantes: ['Fulanita', 'Fulanito'],
};
const integrantes = Grupo.integrantes;
console.log("integrantes:", integrantes);

// Crea un objeto de nombre Impresora con la propiedad objeto tinta{rojo, verde, azul}, obtén el valor de la propiedad guardándolo en la variable nivelesTinta y muestrala por consola
const Impresora = {
    tinta: {
        rojo: 100,
        verde: 100,
        azul: 100,
    }
};
const nivelesTinta = Impresora.tinta;
console.log("nivelesTinta:", nivelesTinta);

// Crea un objeto de nombre Movil con la propiedad especificaciones obtén el valor de la propiedad con ["especificaciones"] guardándolo en la variable especificaciones y muestrala por consola
const Movil = {
    especificaciones: "cosas interesantes aquí"
};
const especificaciones = Movil["especificaciones"];
console.log("especificaciones:", especificaciones);

// Dado el objeto de nombre Portatil con la propiedad marca, modifica el valor de la propiedad marca por el valor “MSI”, consolea el resultado
Portatil.marca = "MSI";
console.log("Portatil.marca:", Portatil.marca);

// Dado el objeto de nombre Concierto añade el valor Guns N' Roses a la propiedad grupos, consolea el resultado
Concierto.grupos.push("Guns N' Roses");
console.log("Concierto:", Concierto);

// Dado el objeto de nombre Concierto, crea la propiedad fecha y después modifica el valor de la propiedad por el valor new Date() (fecha de hoy), consolea el resultado
Concierto.fecha = '0000-00-00';
Concierto.fecha = new Date();
console.log("Concierto con fecha:", Concierto);

// Dado el objeto de nombre Grupo modifica el valor de la propiedad integrantes quitandole un integrante, onsolea el número de integrantes actual (ojo! el número, no los nombres de los integrantes)
Grupo.integrantes.pop();
console.log("número de integrantes actual:", Grupo.integrantes.length);

////////////////////////////////////////////////////////////////////////////////
// Entregables

// Subir el ejercicio a un repositorio en github
// Dejar el enlace del repositorio adjuntado en Classroom
