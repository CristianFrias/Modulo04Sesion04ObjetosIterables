// CONST OBJETO
const curso01 = {
    id: "0086",
    nombre: "Desarrollador Full Stack JavaScript",
    anio: 2024,
    alumnos: 28
}
// console.log(curso01);
// console.log(curso01.id, curso01.nombre);

// CONST ARREGLO
const animales01 = ["Perro", "Gato", "León", "Elefante", "Tigre"]
// console.log(animales01[2]);

// const id = curso01.id
// const nom = curso01.nombre
// const anio = curso01.anio
// const alum = curso01.alumnos
// console.log(`${id} - ${nom} - ${anio} - ${alum}`);

// EJEMPLO DE DESTRUCTURING EN OBJETOS
const {id, nombre, anio, alumnos:alum} = curso01
// console.log(`${id} - ${nombre} - ${anio} - ${alum}`);

// EJEMPLO DE DESTRUCTURING EN ARREGLOS
// console.log(animales01[2]);
const [primero, segundo, tercero, ...resto] = animales01
// console.log(primero);
// console.log(segundo);
// console.log(tercero);
// console.log(resto);


// OPERADOR DE PROPAGACIÓN EN LO QUE SON OBJETOS{}
// OPCIÓN O1 - CONVIERTE EL CURSO 01 EN LETRAS STRING Y DESPUES EN OBJETO, HACIENDO PERDER LA REFERENCIA CON JSON
// const curso02 = JSON.parse(JSON.stringify(curso01))

// OPCIÓN O2
const curso02 = {...curso01}
curso02.id = "0088"

// console.log("curso01", curso01);
// console.log("curso02", curso02);


// OPERADOR DE PROPAGACIÓN EN LO QUE SON ARREGLOS[]
const animales02 = [...animales01]
animales02.push("Oso")

// console.log(animales01);
// console.log(animales02);


// "MEZCLA" ENTRE DOS OBJETOS, EL ANIO SE SOBRESCRIBE TENIENDO 2025 Y SUMANDO MODULOS
const curso01Adicionales = {
    anio: 2025,
    modulos: 10
}

const cursoMezclado = {
    ...curso01,
    ...curso01Adicionales
}
// console.log("Curso 01:", curso01);
// console.log("Curso 01 Adicionales:", curso01Adicionales);
// console.log("Curso Mezclado", cursoMezclado);


// "MEZCLA" ENTRE DOS ARREGLOS, SE AGREGAN TODOS LOS VALORES PERO NO HACE DISTINCIÓN (PERRO SE VUELVE A ESCRIBIR)
const animales01Adicionales = ["Ratón", "Canguro", "Perro"]

const animalesMezclados = [
    ...animales01,
    ...animales01Adicionales
]
// console.log("Animales 01:", animales01);
// console.log("Animales 01 Adicionales:", animales01Adicionales);
// console.log("Animales Mezclados:", animalesMezclados);


// SETS EN UN ARREGLO
const objetoSet = new Set([5,8,9,1,2,1,2,3])
// console.log("objetoSet:", objetoSet);

// APLICANDO MÉTODOS SET
// ADD
objetoSet.add(4)
objetoSet.add(1)
// console.log("objetoSet.add:", objetoSet);

// DELETE
objetoSet.delete(4)
// console.log("objetoSet.delete:", objetoSet);

// SIZE, ES EL LENGHT DE UN ARREGLO
// console.log("objetoSet.size:", objetoSet.size);

// VALUES, VALORES ITERABLES
// console.log("objetoSet.values:", objetoSet.values());

// HAS, DEVUELVE TRUE O FALSE SI EXISTE O NO EL VALOR EN EL SET
// console.log("objetoSet.has(1):", objetoSet.has(1));
// console.log("objetoSet.has(15):", objetoSet.has(15));

// CLEAR, ELIMINA TODO DEL SET
objetoSet.clear()
// console.log("objetoSet.clear:", objetoSet);


// MAPS EN UN OBJETO
const objetoMap = new Map();

// SET
objetoMap.set("0303456", { nombre: "Cristián"})
objetoMap.set("0123456", { nombre: "Andrés"})
console.log("objetoMap.set:", objetoMap);

// GET
console.log("objetoMap.get:", objetoMap.get("0303456"));

// HAS, SE APLICA A LA LLAVE
console.log("objetoMap.has(0303456):", objetoMap.has("0303456"));
console.log("objetoMap.has(6543210):", objetoMap.has("6543210"));

// DELETE
objetoMap.delete("0123456")
console.log("objetoMap.delete(0123456):", objetoMap);

