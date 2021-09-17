# Curso Profesional de JS

### ¿Qué significa ser un profesional de JavaScript?

El camino para llegar a ser profesional es largo y duro, no es fácil. Todos necesitamos que nos guíen para saber qué hacer y qué no. Este camino es conocido como la ruta de pasar de Junior a Senior, este es un duro camino lleno de experiencia.

### ¿Qué forma a un profesional?

* Conocimiento del lenguaje.
* Conocimiento de entornos de programación.
* Mejores prácticas.
* Versado en código.
* Herramientas.
* Ética / Profesionalismo.
* Experiencia.

### El lenguaje: JavaScript
‌
Debemos tener muy claro cuales son los fundamentos de JavaScript antes de comenzar con esto. Existen features muy raros y hay que estudiarlos. Tenemos que saber cómo funcionan las cosas en JavaScript.
### No fundamentos
‌
Los **no fundamentos** representan las siguientes características del lenguaje:
* Promesas (nivel pro).
* Getters, setters: son formas de obtener valor de una variable sin tener que poner ``this.name``.
* Proxies: es un feature muy raro, pero que más adelante veremos a profundidad. Sirve para interceptar a una función antes de que se ejecute.
* Generadores: esto es raro, pero vamos a ver que sí es eficiente.

### ¿Cómo funciona?

Este lenguaje corre sobre un motor. JavaScript no contiene clases como otros lenguajes de programación, esto es algo que vuela mucho la cabeza, es muy difícil de entender. Otro feature muy cool que vamos a aprender es ``event loop``, es lo que permite que pueda correr muchos procesos a la vez.

### Entornos de programación

Cuando estamos desarrollando lo hacemos para la WEB, para un celular, para seguidores. Existen diferentes entornos que nos ofrecen APIS, tenemos que conocer todo esto. 

### Versado en código

Esto quiere decir que tenemos que leer mucho código, un lugar hermoso para ponernos a leer código es GitHub. Debemos leer mucho y hacerlo de forma muy constante.

### Mejores prácticas

No vamos a reinventar la rueda, hay muchas personas que ya han solucionado los problemas más comunes, tenemos que usar estas soluciones, a estas soluciones se les llama: patrones de diseño.

### Ética

Esta es la parte más importante de ser un profesional. Un buen profesional cumple con los siguientes valores:

* Es responsable.
* Entrega a tiempo sus trabajos.
* Sabe decir que no.
* No hace daño.

### Experiencia

La experiencia no es algo que se pueda enseñar, tenemos que encontrarla nosotros mismos en el camino a ser profesionales. Todo está en nosotros, tenemos que estudiar y practicar mucho.

# ¿Cómo llega un script al navegador?
El DOM es la representación que hace el navegador de un documento HTML.

El navegador interpreta el archivo HTML y cuando termina de transformarlo al DOM se dispara el evento ``DOMContentLoaded`` lo que significa que todo el documento está disponible para ser manipulado.

Todo script que carguemos en nuestra página tiene un llamado y una ejecución.

Tanto con ``async`` como ``defer`` podemos hacer llamados asíncronos, pero tiene sus diferencias:

* ``async``. Con async podemos hacer la petición de forma asíncrona y no vamos a detener la carga del DOM hasta que se haga la ejecución del código.
* ``defer``. La petición es igual, asíncrona como en el async pero va a deferir la ejecución del Javascript hasta el final de que se cargue todo el documento.
* **scripts embebidos**: el navegador carga línea a línea el HTML y cuando se encuentra un código entre scripts va a detener su ejecución hasta que haya procesado todo el script.

Hay que tener en cuenta que, cuando carga una página y se encuentra un script a ejecutar, toda la carga se detiene. Por eso se recomienda agregar tus scripts justo antes de cerrar el body para que todo el documento este disponible.

# Scope
El Scope o ámbito es lo que define el tiempo de vida de una variable, en que partes de nuestro código pueden ser usadas.

## Global Scope
Variables disponibles de forma global se usa la palabra ``var``, son accesibles por todos los scripts que se cargan en la página y se declaran fuera de una función o bloque. Aquí hay mucho riesgo de sobreescritura.

## Function Scope
Variables declaradas dentro de una función utilizando var sólo visibles dentro de ella misma (incluyendo los argumentos que se pasan a la función).

## Block Scope
Variables definidas dentro de un bloque, por ejemplo variables declaradas dentro un loop while o for. Se usa let y const para declarar este tipo de variables.

## Module Scope
Cuando se denota un script de tipo module con el atributo ``type="module"`` las variables son limitadas al archivo en el que están declaradas.

# Closure

El scope cuando lo juntamos con funciones podemos lograr algo que se llama clouseres o clausuras, para entender bien vemos un ejemplo:
```js
// Clouseres
// printColor
let color = 'green';
function printColor() {
  console.log(color);
}
```
Podemos observar que la variable ```color``` está en el scope global, para evitar eso lo que vamos a hacer es crear una función que se va a llamár autómaticamente
```js
// IIFE: immediately invoked function expression
(function () {
  let color = 'green';

  function printColor() {
    console.log(color);
  }

  printColor();
})();
```
Sacamos este codigó del entorno global, lo pasamos a uno de una función y entonces color no cruza al scope global. Cuando tenemos esta declaración y esta ejecución que se declara afuera de la función interna, estó es un Closures. Es la combinación del scope de una función y el scope donde fue definida, donde el scope de la función es la función IIFE la función principal, y adentro la función que fue definida dentro de ese scope que tiene acceso a lo que estaba afuera.

Clouseres nos va a permitir tener una funcionalidad o feature que el lenguaje no trae: variables privadas
```js
// Clousers Jasan Hernández.
// ¿Variables privadas?
const counter1 = {
  count: 3
}
// count está en el scope Global Window
console.log(counter1.count);
// Podemos modificar su valor si quisiéramos
counter1.count = 99;
console.log(counter1.count);

// Clouseres - creamos un function scope
function makeCounter(n) {
  // count ya no existe en window, ahora
  // solo pertenece a la función
  let count = n;
  return {
    increase: function () { count += 1; },
    decrease: function () { count -= 1},
    getCount: function () { return count; },
  }
}
let counter = makeCounter(7);
console.log('This count is:', counter.getCount());
console.log('This count is:', counter.increase());
console.log('This count is:', counter.decrease());
// No podemos cambiar el valor de count porque no 
// está en nuestro alcance.
// ERROR FATAL
counter.count = 99;
```
# This
This se refiere a un objeto. Ese objeto es el que actualmente está ejecutando un pedazo de código.

this es un concepto que tienen muchos lenguajes de programación, sobre todo aquellos que son orientados a objetos, quizás si conoces un poco de Java sabes que cuando escribes this en una clase, this se va a referir a la instancia de esa clase cuando creas ese objeto. En JavaScript esto también es cierto, pero también hay otros contextos de los cuales hay que conocer para saber en qué momentos this se comporta así y en qué otros momentos this tiene valores diferentes.
* Global Scope, como se comporta this con el global-scope.
```js
// this en el scope global
console.log(`this: ${this}`);

// this en el scope de una función
function whoIsThis() {
  return this;
}
console.log(whoIsThis());
```
Cuando llamamos a la función whoIsThis() directamente el motor de javascript le va asignar que this va a ser ``window``, ya que es un valor que se tiene que asignar por default, excepto si estamos usando javascript en un modo estricto. El 'strict mode', este strict mode que puedes encender manualmente solo escribiendo una cadena que diga "use strict", con estó comienza el modo estricto.
* This en el Scope de una Función strict mode

Ahora usando el modo strict mode dentro de la siguiente función que también retorna this nos imprime que ahora es undefined, y este es justo el comportamiento que sucede cuando usamos strict mode, strict mode nos ayuda a evitar algunos errores que le pueden pasar a cualquier otro programador, pero el motor de javascript va a tratar de ayudarnos y estos errores nos van a salir temprano durante la fase de desarrollo y no en producción, y un error es mejor tenerlo en desarrollo que en producción.
```js
// this en el scope de una función strict mode 
function whoIsThisStrictMode() {
  "use strict";
  return this;
}
// undefined
console.log(`whoIsThisStrictMode: ${whoIsThisStrictMode()}`);
```
* This en el contexto de un objeto

this se refiere al objeto que actualmente está ejecutando un pedazo de código, por lo tanto this va a ser todo este objeto. ejemplo:
```js
// this en el constexto de un objeto 
const person = {
  name: "Erika",
  saludar: function () {
    console.log(`hola soy ${this.name}`);
  }
}
console.log(person.saludar());
```
* This cuando sacamos una función de un objeto.
```js
const person = {
  name: "Alan",
  saludar: function () {
    console.log(`hola soy ${this.name}`);
  }
}
// this cuando sacamos una función de un objeto 
const accion = person.saludar;
accion();
```
Ahora nos aparece undefined porque ``accion`` no se está llamando dentro del contexto de un objeto, simplemente se está llamado directamente similar como lo hicimos arriba en las funciones directas, por lo tanto el mensaje se mostrará incompleto cuando se intenta usar this.
* This en el contexto de una clase

Las clases como tál no existen en javascript, al menos no son como las clases de java o de c++, pero resulta útil llamarles clases a estas funciones especiales que llamamos con new.

Todas las funciones tienen un valor de this, lo que sucede es que ese valor de this es un objeto vacío, en otras palabras, this comienza siendo estó ``this = {}``. No puedes asignar this directamente, pero si puedes asignar una propiedad de this.
```js
// This en el contexto de una Clase(Prototype);
function Person(name, lastName) {
  this.name = name;
  this.lastName = lastName;
}

Person.prototype.saludar = function () {
  console.log(`Me llamo ${this.name} ${this.lastName}`);
}

const Lalo = new Person('Lalo', 'Jami');
Lalo.saludar();
```
En el contexto de objetos que fueron instanciados de una clase, this se va a referir a la instancia de ese objeto, no se va ha referir a ``Person`` ni a ``Person.prototype.saludar``, sino que se va a referir a ``Lalo``, que es el objeto que está ejecutando a saludar.

Y cuando asignamos los valores de ``this.name = name`` lo estamos haciendo sobre la instancia, no sobre el objeto prototipal.
# Los métodos call, apply y bind
This no es un valor que podemos asignar directamente, no podemos escribir ``this = 'valor'``, pero sí existen unos métodos que son parte del prototipo de function call, apply, bind. Estos 3 métodos nos van a ayudar a establecer cuál es el this que va a ser el contexto de la llamada a una función .
* Establece this usando 'call'
```js
// Establece this usando 'call'
function saludar() {
  console.log(`Hola soy ${this.name} ${this.lastname}`)
}
```
Tenemos una función que no está en el contexto de un objeto ni de niguna clase, con la ayuda de call vamos a establecer cuál va a ser el this.
```js
function saludar() {
  console.log(`Hola soy ${this.name} ${this.lastname}`)
}
const richard = {
  name: 'Richard',
  lastname: 'Lopez'
}
saludar.call(richard)
```
Aquí lo que hicimos fue establecer el valor de this para la función saludar, pero a veces las funciones sí reciben argumentos.
* Establece this usando 'call' y pasar argumentos a la función.
```js
const richard = {
  name: 'Richard',
  lastname: 'Lopez'
}
function caminar(metros, direccion) {
  console.log(`${this.name} camina ${metos} metros hacia ${direccion}`);
}
caminar.call(richard, 400, 'norte');
```
Lo primero es establecer el contexto del this para ``caminar`` usando call(richard) pero además tenemos algunos argumentos. Cuando esto no sucede tenemos que pasar los argumentos además de pasar el contexto.
* Establece this usando 'apply' y pasar argumentos a la función.

**apply** hace la misma funcionalidad que call pero sus argumentos los pasamos de una forma ligeramente diferente, así que vamos a seguir usando el ejemplo de caminar y vamos usar apply que usa el mismo argumento que tiene call, que en este caso el this será richard. Pero, en lugar de pasar los argumentos separados por comas, vamos a pasarlos como parte de un arreglo y en ese arreglo van todos los argumentos que queramos.
```js
const richard = {
  name: 'Richard',
  lastname: 'Lopez'
}
function caminar(metros, direccion) {
  console.log(`${this.name} camina ${metos} metros hacia ${direccion}`);
}
caminar.apply(richard, [400, 'norte']);
// también podemos pasarle un arreglo
const valores = [200, 'sur'];
caminar.apply(richard, valores)
```
Es lo mismo, pero nos podemos enfrentar donde hay situaciones donde es más fácil usar el call y hay lugares donde es más fácil usar el apply. Sobre todo si son valores que son una lista de valores.

### Evitar confundir Apply y Call
Call = Commas 

Apply = Areglo
## Bind
``bind()`` es parte de este conjunto de: call, apply, bind. Sin embargo, bind no va a llamar la función automáticamente, sino que va a construir una nueva función, esta nueva función va a tener el this que le pasamos ya integrado y cuando llamemos a está nueva función se va a ejecutar.
```js
// Establecer una nueva función usando bind()
function saludar() {
  console.log(`Hola soy ${this.name} ${this.lastname}`)
}
const daniel = {
  name: "Daniel",
  lastname: "Sanchez"
}
const danielSaluda = saludar.bind(daniel);
danielSaluda();
```
* ¿Cómo le haríamos si necesitáramos pasar argumentos a esta función a la que estamos bindeando?
```js
function saludar() {
  console.log(`Hola soy ${this.name} ${this.lastname}`)
}
function caminar(metros, direccion) {
  console.log(`${this.name} camina ${metos} metros hacia ${direccion}`);
}
const daniel = {
  name: "Daniel",
  lastname: "Sanchez"
}
const danielSaluda = saludar.bind(daniel);
danielSaluda();

const danielCamina = caminar.bind(daniel);
danielCamina(1000, 'SurOeste');
```
Existe otra forma de pasar estos argumentos, y es muy interesante porque permite harcodear estos argumentos, y en lugar de escribirlos dentro de la nueva función los escribimos despues del this.
```js
const danielCamina = caminar.bind(daniel, 1000, 'SurOeste');
danielCamina();
```
Esto se vuelve más interesante porque podemos guardar argumentos parciales, es decir, poner argumentos en ambas funciones, tanto el funció que genera como a la llamada a la nueva función:
```js
const danielCamina = caminar.bind(daniel, 1000);
danielCamina('SurOeste');
```
Esta técnica se llama kurin, donde guardamos parcialmente algunos argumentos y luego llenamos los demás, es una ténica funcional que es muy poderosa y que te va a permitir hacer funciones reutilizables para contextos donde solo parcialmente está establecido un valor.
# Diferencias Apply, Call y Bind
Call y Apply van a establecer el this y va a llamar la función inmediatamente, bind va a crear una nueva función donde this estará guardado y luego tocará guardar y ejecutar esa nueva función.

Existen veces que tenemos objetos que se parecen a otros, por ejemplo: cuando usamos un *`getElementByClassName`* del DOM lo que nos regresa es un tipo de de objeto nodeList, no es un array, por lo tanto no tienen todos lo métodos que tiene el array como el ``forEach``

DOM:
```html
<body>
  <ul>
    <button class="call-to-action">Aprender</button>
    <button class="call-to-action">Aprender Más</button>
    <button class="call-to-action">¡Nunca pares de aprender!</button>
  </ul>
  <script src="call-apply-bind.js"></script>
</body>
```
Obteniendo los botones del Dom:
```js
// Cuando es útil uno de estós métodos 
const buttons = document.getElementsByClassName("call-to-action");
buttons.forEach(button => {
  button.onclick = () => alert('Nunca pares de aprender');
});

// No es una funcion forEach porque button es NodeList
```
No es una funcion forEach porque button es NodeList, es por eso que el código de arriba nos marcará un error.

Los nodeList se parecen a los arreglos, pero no del todo, lo que sí sabemos es que tienen una propiedad que se llama length y esta es suficiente para hacer alguna de las operaciones de arreglos.

Ahora lo que podemos hacer es lo siguiente:

Vamos a llamar al forEach a través del array, porque foreach es una propiedad del prototype que entonces le podemos cambiar el this usando call(), donde le pasamos el nuevo this y ejecutamos la función por cada elemento como si usaramos un forEach de un arreglo.
```js
// Cuándo es útil uno de estós métodos 
const buttons = document.getElementsByClassName("call-to-action");

// Obtenemos la función foreach de Un arreglo y le cambiamos this. para que haga referencia a buttons y de este modo recorrer el arreglo.
Array.prototype.forEach.call(buttons, button => {
  button.onclick = () => alert('Nunca pares de aprender');
})
```

