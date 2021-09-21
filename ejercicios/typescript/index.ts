// console.log("Hello, typescript")

// function add(a: number, b: number) {
//     return a + b;
// }

// const sum = add(2, 3)

// Boolean
// let muted: boolean = true;
// muted = false;

// // Numeros
// let age = 6;
// let numerador: number = 42;
// let denominador: number = age;
// let resultado = numerador / denominador;

// // String
// let nombre: string = 'Lalo';
// let saludo = 'Me llamo ' + nombre;

// // Arreglos
// let people: string[] = [];
// people = ["Ali", "Karen", "Luis"];
// people.push('45')


// let peopleAndNumbers: Array< string | number> = [];
// peopleAndNumbers.push("Pedro")
// peopleAndNumbers.push(456)

// //Enum

// enum Color {
//     Rojo = "Rojo",
//     Verde = 'Verde',
//     Azul = 'Azul',
//     Amarillo = 'Amarillo',
// }

// let colorFavorito: Color = Color.Verde
// console.log(`Mi color favorito es ${colorFavorito}`)
// // Any
// let comodin: any = 'Joker'
// comodin = { type: "WildCard"};

// // Object
// let someObject: Object = { type: "WildCard"};
// function add(a:number, b:number) {
//     return a+b;
// }
// const suma = add(4, 7);

// function createAdder (a: number): (number)=> number {
//     return function (b: number) {
//         return b + a;
//     }
// }
// const addFour = createAdder(4);
// const fourPlusSix = addFour(6)

// function fullName(firstName:string, lastName:string = "Jami") {
//     return `${firstName} ${lastName}`;
// }
// const Lalo = fullName('Eduardo')
// console.log(Lalo)

//interfaces
enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
}

interface Rectangulo {
    ancho: number, 
    alto: number,
    color?: Color,
}
let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.Rojo,
}
function area(r:Rectangulo) {
    return r.alto + r.ancho;
}
const areaRect = area(rect);
console.log(areaRect);

console.log(rect.toString())

rect.toString = function () {
    return this.color ? `un rectangulo ${this.color}`: `un rectangulo`;
}

console.log(rect.toString())