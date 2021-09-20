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
# Prototype
Si hay un tema que hace que a todos los desarrolladores de javascript nos explote la cabeza de lo difícil que es, es este: Prototype es un concepto casi único de javascript que es parte de como normalmente manejamos lenguajes y objetos en lenguajes de programación, las clases son como un plano en Java, lo escribimos y luego instanciamos objetos, si queremos crear una clase que hereda de otra clase y volvemos a instanciar otros objetos, pero en javascript todos son objetos.

* Ejemplo de objeto comú y corriente:
```js
// Un objeto común y corriente
const zelda = {
  name: "Zelda"
}
zelda.saludar = function () {
  console.log(`Hola soy ${this.name}`);
}
zelda.saludar();

const link = {
  name: "Link"
}
link.saludar = function () {
  console.log(`Hola soy ${this.name}`);
}
link.saludar();
```
Esto es algo ineficiente, estamos creando una función por cada uno de los 2 objetos y además los objetos son similares y los tenemos que escribir a mano.
* Escribiendo una función que haga más eficiente a nuestro objeto.
```js
// Seamos un poco más eficientes
function Hero(name) {
  const hero = {
    name: name,
  }
  hero.saludar = function () {
    console.log(`Hola soy ${this.name}`);
  }

  return hero;
}
const zelda = Hero('Zelda');
zelda.saludar();

const link = Hero("Link");
link.saludar();
```
Aquí hay un poco de ineficiencia, ya que esta función saludar la estamos definiendo cada vez llamamos a Hero.

Podemos ser un poco más eficientes y tener un método que tenga la colección de métodos para los Heros
* Aun podemos mejorar más y evitar tener que crear la misma función cada vez

Lo logramos creando un objeto externo llamado heroMethods, el cual tiene una función saludar como propiedad, la cual solo se está definiedo una sola vez. Y a nuestro objeto hero en su método saludar solo le pasamos la referencia de el objeto externo heroMethods.saludar
```js
// Aun podemos mejorar más y evitar tener que crear la misma función cada vez
const heroMethods = {
  saludar: function () {
    console.log(`Me llamó ${this.name}`);
  }
}
function Hero(name) {
  const hero = {
    name: name,
  }
  hero.saludar = heroMethods.saludar;

  return hero;
}
const zelda = Hero('Zelda');
zelda.saludar();

const link = Hero("Link");
link.saludar();
```
## Object create
Recibe un objeto y lo que hace es crear un nuevo objeto, como lo dice su nombre
```js
const nuevoObjeto = Object.create({});
```
Este nuevo objeto va a contener todas las propiedades que este objeto tiene definido, esto la da algo parecido a 'super poderes'. Usando el ejemplo de prototypes quedaría de la siguiente manera:
```js
// Object create
const heroMethods = {
  saludar: function () {
    console.log(`Soy un super heroe ${this.name}`);
  }
}
function Hero(name) {
  const hero = Object.create(heroMethods);
  hero.name = name;

  return hero;
}
const zelda = Hero('Zelda');
zelda.saludar();

const link = Hero("Link");
link.saludar();
```

Analícemos lo que esta haciendo object create, porque va más allá de copiar propiedades de un objeto a uno nuevo. Si nostros ejecutamos al objeto zelda y a heroMethods, nos aparecerán 2 objetos tal cual como los habíamos definido.

Si intentamos crear un nuevo objeto directo desde la consola del navegador pasará algo interesante.
```js
zelda
heroMethods
const newHero = Object.create(heroMethods);
```
Cuando nosotros creamos un nuevo objeto con ``Object.create`` nuestro objeto aparentemente se mostrará vacío, pero si nosotros intentamos ingresar a una propiedad del objeto sí aparecerá definido. Esto es gracias a un objeto que sí se nos imprimió, el cual aparece dentro del nuevo objeto con un color azul desvanecido el cual se llama proto.

Nostros accedemos a newHero.saludar sin estar definido dentro del objeto mismo, esto sucede gracias a la herencia prototipal. Por ahora basta con que entendamos que todo lo que estaba en heroMethods pasó al proto de newHero

Modificaremos el object Hero agregando la función saludar de heroMethods porque la propiedad saludar le debería pertenecer a Hero, ya que es una función que esta ocupando el objeto. El lugar para hacer esto que se nos recomienda es hacerlo dentro de su método prototype, inicialmente prototype es un objeto vacío. Pero como es un objeto le podemos añadir nuevas propiedades

```js
// Métodos de Hero dentro de Hero
function Hero(name) {
  const hero = Object.create(Hero.prototype);
  hero.name = name;
  return hero;
}

Hero.prototype.saludar = function () {
  console.log(`Soy una super heroina ${this.name}`);
}

const zelda = Hero('Zelda');
zelda.saludar();

const link = Hero("Link");
link.saludar();
```
* new es un atajo (azúcar sintáctica) para llevar Hero.prototype al objeto

Seguro has usado un keyword que se llamá new. Desde ahora te advierto que new es un atajo lo que le llamamos azúcar sintáctica, es decir, es algo que le añadimos al lenguaje para facilitar algunos procesos, pero son cosas que ya podemos hacer y justo tiene que ver con Object.create.

Primero comenzamos añadiendo new cada vez que queremos instanciar un nuevo objeto.
```js
const zelda = new Hero('Zelda');
zelda.saludar();
```
new es lo mismo que hacer esto:
```js
function Hero(name) {
  const hero = Object.create(Hero.prototype);
  hero.name = name;
  return hero;
}
const zelda = new Hero('Zelda');
zelda.saludar();
```
Cada vez que usamos new este atajo de Object.create ocurre autómaticamente:
```js
function Hero(name) {
  // Object.create Ocurre automáticamente cada vez que utilizamos new y no necesitamos ponerlo
  // const hero = Object.create(Hero.prototype);
  this = Object.create(Hero.prototype);
  hero.name = name;
  return this;
}
const zelda = new Hero('Zelda');
zelda.saludar();
```
La regla que usa new cuando hace el Object.create es que siempre va a sacar el prototype de lo que sea el constructor, si después de new dice hero ``new Hero``

Lo que hará será un ``Hero.prototype``, no existe otro. Y en lugar de guardarlo en hero sirve imaginarnos que lo va a guardar en this. Este this se va a inicializar, no lo haremos nosotros directamente, lo está haciendo el lenguaje, entonces sí se vale y en lugar de decir ``hero.name`` hacemos: ``this.name``. Siempre la clase o función clase lo que hará siempre será retornarnos this implícitamente.

Lo que acabamos de hacer es: tienes un objeto simple, donde nos las inventamos para crear nuevos objetos, y fuimos arreglando algunas ineficiencias hasta llegar a Object.create y new, que solo es sugar-sintaxs para Object.create. Esto es lo que ocurre cada vez que construimos un constructor en una función o cuando escribimos Hero.prototype.

Hoy en día hay nuevas formas de hacerlo, usando el keyword ``class`` internamente, definimos los métodos, definimos un constructor, todo esto es también sugar-syntax que vale la pena y es muy importante entender cómo funciona nativamente para ver cómo es que nuestro lenguaje se está comportando.

# Herencia Prototipal
Por default los objetos en JavaScript tienen como prototipo a Object, que es el punto de partida de todos los objetos, es el prototipo padre. Object es la raíz de todo, por lo tanto tiene un prototipo padre undefined.

Cuando se llama a una función o variable que no se encuentra en el mismo objeto que la llamó, se busca en toda la prototype chain hasta encontrarla o regresar undefined.

La función ``hasOwnProperty`` sirve para verificar si una propiedad es parte del objeto o si viene heredada desde su prototype chain.
```js
function Hero(name) {
  this.name = name;
}

Hero.prototype.saludar = function () {
  console.log(`Hola, soy ${this.name}`);
}

const zelda = new Hero('Zelda');

// Propiedades de la instancia
console.log(`New: ${zelda.name} `);
// Propiedades de la "clase".
console.log(`saludar: ${zelda.saludar} `);

// Propiedades heredadas de ej: toString
console.log('toString: ', zelda.toString);

// hasOwnProperty (de dónde sale toString o esto?)
console.log('zelda.hasOwnProperty("name"): ', zelda.hasOwnProperty('name'));
console.log('zelda.hasOwnProperty("saludar"): ', zelda.hasOwnProperty('saludar'));
```
Proto proto es el lugar donde cayeron todas las propiedades que estaban en Hero.prototype, si seguimos por ahí, hay otro proto que viene desde Object y aquí está hasOwnProperty y toString.

Nosotros podemos escribrir ``zelda._proto_`` y va funcionar, pero esa propiedad proto es algo que puede variar, no es algo que está especificado en el lenguaje. Es un detalle de implementación que ponen los browsers o node o cualquier otro entorno. La forma correcta o sugerida es utilizando ``Object.getPrototypeOf(zelda)``, el cual nos va a regresar ese prototipo.

si comparamos:
```js
const prototypeOfZelda = Object.getPrototypeOf(zelda);
prototypeOfZelda === Hero.prototype;
// true
```
Este objeto es idéntico al que está a prototypeOfZelda, no solo porque tiene el mismo contenido sino porque es el mismo objeto. Cuando utilizamos ``===`` es porque estamos comparando la referencia en memoria es decir: el mismo lugar en memoria. Si esto es cierto nosotros podemos hacer lo siguiente:
```js
const prototypeOfZelda = Object.getPrototypeOf(zelda);
prototypeOfZelda === Hero.prototype;
// true
Hero.prototype.fight = function () {console.log("FIGHT")}
zelda.fight();
// Ejecuta el menssage
```
Es una referencia desde zelda hasta prototype, el lenguaje lo está encadenando, porque si vamos a zelda.hasOwnProperty("fight"); es false porque no le pertenece, le pertence al prototype.

Lo que hace el lenguaje para encontrarlo es preguntar: -- ¿zelda.fight existe? -- No existe -- Okay, vamos a buscarlo en su proto -- ¿zelda.proto.fight existe? -- Sí -- Ejecutamos!!

Object es el punto de partida de todos los objetos en javascript, esto incluye las funciones que también son objetos en javascript
# ¿Cómo funciona Javascript?
¿Qué pasa cuando llega un script al navegador?

Comienza un proceso ejecutado por el motor de javascript que va a tomar ese código y lo va analizar y lo va a deconstruir y reconstruir, despues ejecuta y luego lo optimiza.

Acerca de la web...

La web no siempre ha sido igual y cuando llegó javascript llegó con Netscape. En ese entonces lo que hacíaamos eran cosas muy simples donde abriamos un cajon donde el usuario ingresaba información y luego el programa lo leía y lo seguíaa ejecutando, pero eran cosas muy simples, en javascript lo que hacíamos es que íbamos leyendo línea por línea y lo íbamos interpretando un paso a la vez, y eso sigue siendo cierto pero de una manera totalmente nueva, y esta nueva manera llegó con Google Chrome.

Google, una compañía con productos sumamente complejos como Google Maps, necesitaba un navegador que pudiera ejecutar las cosas más eficientemente y por eso reinventó cómo funcionaban los Motores de Javascript. En resumen, esto es lo que hacen:
* Reciben un código fuente, lo analizan y lo deconstruyen en el AST(Abstract Syntax Tree). Este AST lo toma un interpretador y lo convierte en bytecode, que es lo que se va a ejecutar, el programa va a empezar ejecutando bytecode y eventualmente va a tener suficiente información para ejecutar machine code que es el mismo código pero automizado.

1. Recibe código fuente,
2. Parsea código y produce Abstract Syntax Tree(AST)
3. Se compila a bytecode y se ejecuta.
4. Se optimiza a machine code y se remplaza el código base.
Mirando un grafo con este orden usando V8.
![grafo](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LlTyKe9xd6RJ6x5f2-z%2F-LoBMLhD1_J2PtZzvrDo%2F-LoBMsLB7cpFBtb-EZ9L%2FScreenshot_11.png?alt=media&token=bc179ac3-ae0f-4c89-b10c-b1fae0986f80)
Javascript source code pasa por el parser donde obtenemos el AST, después el AST se lo damos al interpretador que va a producir bytecode, ahí es donde comienza a ejecutarse nuestro programa. Bytecode es un lenguaje de menor nivel pero va a permitir que se ejecute más rápido, mientras se va ejecutando hay un proceso que se llama el profiling data que va a estar analizando la ejecución, va a encontrar los puntos donde el programa se puede optimizar y eventualemente va a producir el machine code, esto hace el optimizing compiler el compilador de optimizaciones y despues tenemos el Optimized code.

Hay veces en que estas asunciones fallan, ahí deoptimize(deoptimizamos) el código.
## Analizador y Abstract Syntax Tree
Parser: un parser va a tomar tu código fuente y lo va a leer, pero lo que tú estás escribiendo no es la que la computadora entiende así tal cual como lo escribiste. Primero lo tiene que descomponer y esa descomposición o esos pedazos que van a salir se llamán tokens. Tokens identifican que let es una palabra clave o new es una palabra clave, que el símbolo de + es un operador y que lo que está a un lado y al otro o quizás son número u otro tipo de variable; y una vez que tenemos esos tokens es cuando vamos a hacer el AST(Abstract Syntax Tree).
## Fallo en el Parset
Qué pasa si el parser está analizando tu programa y de momento hay algo que no hace sentido, justo es cuando ocurre un syntax error

Un **SyntaxError** es lanzado cuando el motor de javascript se encuentra con parte de código que no forma parte de la sintaxis del lenguaje al momento de analizar código.

El proceso de parsing es muy importante que se haga bien.

Google dice:
* Parsing es 15% - 20% del proceso de ejecución.
* La mayoría del Javascript en una página nunca se ejecuta.
* Esto hace que bundling y code splitting sea muy importante!

La tercer parte significa que el código lo tenemos que empaquetar de una forma eficiente donde hay unos archivos de código separados lógicamente y que solamente vamos a cargar cuando sea necesario, esta es una modalidad que se está volviendo muy frecuentemente en aplicaciones de una sola página Single Pages Apps.
## Eager Parsing (Parser de V8):
Cuando sea hace este parsing vamos a encontrar todos los errores de sintaxis en el código que se está analizando y vamos a crear el AST. Que siemplemente es un árbol o arquitectura en forma de árbol que representa tu programa, y además va ha construir los scopes. En este momento vamos a saber qué variables se pueden leer en qué partes del código
* Encuentrar errores de sintaxis
* Crea el AST
* Construye Scopes
## Lazy Parsing
Cuando hacemos esto (parsing) estamos retrazando alguna parte del código, porque no hace falta analizarla y puede esperar. Esto tiene una ventaja y es que es el doble de rápido, por lo tanto, si las cosas tardaban 20%, si logramos que ocurra mucho lazy parsing podemos retrazar ese análisis, una consecuencia es que el AST no se construye y los Scopes se construyen parcialmente.
* Doble de rápido que el eager parser
* No crea el AST
* Construye los scopes parcialmente.
## Tokens
Accediendo al siguiente enlce podemos ver con ejemplos la manera en cómo una sentencia de javascript se transpila a un token. [url](https://esprima.org/demo/parse.html#) o ingresando a [esprima](https://esprima.org/)

Parser produces the (beautiful) syntax tree

```js
// Life, Universe, and Everything
var answer = "hola";
```
```js
[
    {
        "type": "Keyword",
        "value": "var"
    },
    {
        "type": "Identifier",
        "value": "answer"
    },
    {
        "type": "Punctuator",
        "value": "="
    },
    {
        "type": "String",
        "value": "\"hola\""
    },
    {
        "type": "Punctuator",
        "value": ";"
    }
]
```
## Abstract Syntax Tree
El AST es un gráfo (estructura en forma de árbol) donde vamos a tener una raíz que será nuestro programa y lo vamos a ir descomponiendo en partes, todo esto lo vamos a poder hacer siguiendo los tokens que produce el parser. Esto se usa en muchísimos sitios, no solo para ejecutar un programa javascript, también lo usamos para transformar código de una forma a otra, que es como lo que hace babel o priged

Se usa en:

* Javascript Engine
* Bundlers: Webpack, Rollup, Parcel
* Transpilers: Babel
* Linters: ESLint, Prettify
* Type Checkers: TypeScript, Flow
* Syntax Highlighters

Demo de AST
```js
let foo = "bar";
```
![grafo](https://raw.githubusercontent.com/JasanHdz/javascript-professional/master/assets/demoast.jpg)

También puede construir tu propio ejemplo en [AST Explorer](https://astexplorer.net/)

# Abstract Syntax Tree en Práctica
Usemos el AST para crear una regla para ESLint, que analiza estéticamente nuestro código para ver si encuentra errores, o si hay que leventar warnings porque estamos violando alguna regla de estilo, o simplemente nuestro código está violando la sintaxis del lenguaje. Muchas de estas reglas ya vienen con ESLint pero también podemos desarrollar nuevas, para hacer eso vamos a utilizar una herramienta que se llama AST Explorer. En este explorer tenemos que asegurarnos que la configuración es la correcta, si aquí no dice babel-eslint vamos a seleccionarla y vamos a ver cómo vamos a transformar el código. En este caso lo vamos a procesar y vamos usar la última versión de ESLint.

En la parte de abajo del lado izquierdo vamos a escribir esa regla, y en la parte de abajo del lado derecho vamos a ver cómo esa regla está funcionando.

La regla la vamos a definir dentro de una función y el nombre de esa función va a ser el nombre del nodo que queremos corregir. Si vamos al AST vemos que esta parte del código trabaja con declaraciones de variables. Cuando hay una declaración la queremos entender y si encontramos que el nombre está en lowerCase, que lo que hace es guardar un número, lo queremos corregir, así que vamos a corregir esto y copiaremos en este caso el nombre del nodo "VariableDeclaration", esta función es la que va a recibir un nodo.

Código al que queremos establecer reglas:
```js
const pi = 3.1415;
const halft_pi = 1.356;

// Variables constantes
// Variables que guarden un número 

// El nombre de la variable tiene que estar en UPPER CASE
```
Reglas que establecemos para el código usando ESLint
```js
export default function(context) {
  return {
  	VariableDeclaration(node) {
    	// Tipo de variable const
      if(node.kind === "const") {
      	const declaration = node.declarations[0];
        // asegurarnos que el valor es un número  
        if(typeof declaration.init.value === "number") {
        	if(declaration.id.name !== declaration.id.name.toUpperCase()) {
            	context.report({
                	node: declaration.id,
                  	message: "El nombre de la constante debe estar en Mayúsculas",
                  	fix: function(fixer) {
                    	return fixer.replaceText(declaration.id, declaration.id.name.toUpperCase());
                    }
                })
            }
        }
      }
    }
  };
};
```
# Como funciona el Javascript Engine
Despues de que el parser hizo su trabajo y nos dio el AST continúa el interpretador, el compilador para obtener código optimizado.

* Recibe código fuente
* Parsea el código y produce un Abstract Syntax Tree(AST)
* Se compila a bytecode
* Se optimiza a machine code y se remplaza el código base.

Cuando el bytecode se está ejecutando hay un observador, un programa que observa el bytecode y va a estar tomando notas, cuando tiene suficientes notas es capaz de tomar decisiones para optimizar tu código y así obtener código optimizado, si alguna de estas observaciones en el futuro resulta ser falsa y que todavía no se cumple, no pasa nada, tu código va a regresar a una versión ya optmizada donde va a seguir corriendo, aunque no tan rápido.
## Bytecode vs Machine Code
El bytecode es algo parecido a assembly y assembly es un lenguaje de muy bajo nivel pero que aún se puede escribir, son palabras clave que le dicen al procesador que hacer. Es similar a Assembly, excepto que en lugar de operar sobre un procesador va a operar sobre algo que se llama la virtual machine, que es un programa que ejecuta bytecode.

El Machine Code es lo más bajo nivel, ni tú ni yo queremos escribir machine code a mano porque se trata básicamente de ceros y de unos, es código binario, pero los procesadores si lo necesitan así, es el código que les va a llegar a ellos y va a volar y es muy rápido porque el machine code no hay que traducirlo, ya está traducido.

Cuando el motor de Javascript V8, que es el que ocupa chrome y node, produce este código va a crearlo a machine code. Ya el bytecode que corre la máquina virtual no se va a ocupar.

El profiler es un programa que está en medio del bytecode y el optimizador, este programa lo que hace es que toma una observación de la ejecución del bytecode y, cuando ve que las funciones se están llamando igual una vez tras otra y todas la llamadas son iguales, puede hacer unas optimizaciones, ejemplo:

```js
function add(a, b) {
  return a + b;
}

for (let i = 0; i < 1000; i++) {
  add(i, i);
}
```
Cuando el código se haya ejecutado (ejemplo, 50 veces), el código va a empezar a ponerse caliente, luego 100 iteraciones más y sera más caliente y así sucesivamente hasta que está súper caliente y está listo para ser optimizado. En términos del V8 le llamos **hot function** (función caliente). Esto significa que el optimizador de código ya está listo para optimizar esa parte, está seguro que la ejecución siempre es similar, recibe numeros, regresa numeros, entonces podemos optimizarla a **machine code**.

Que pasa si, por la razón que sea, ya no estamos pasando 2 números como argumento, ahora estamos pasando 2 números y 1 cadena, el resultado sería el número 1 más el string todo pegado. Pero esto va a confundir al optimizador y lo regresará a bytecode, y lo que pasa es que se va a desoptimizar el código. Tú puedes seguir programando, no pasará nada, pero esto demuestra un poco de ineficiencia. Por esto es bueno que las funciones se llamen igual, si le pasamos objetos que tengan una forma diferente o argumentos de tipos diferentes, o no se va a poder optimizar tu función, o se va a desoptimizar, pero esto es así.

Los motores de Javascript funcionan ligeramente diferente, cada browser tiene su propia implementación aunque todos siguen una estructura parecida, el que acabamos de analizar fue V8.

## SpiderMonkey vs V8
SpiderMonkey tiene 2 capas de optimización, Chakra también y recibe información de profiler y de varios lugares. JavascriptCore tiene 3 capas de optimización. ¿Esto significa que Safari es más rápido que Chrome? No necesariamente, en el desarrollo de programas o de ingeniería siempre se trata trades, intercambio de costo-beneficio. Esto quizás no sea perfecto, pero luego saldra mejor, y en javascriptCore puede ser que nuestro programa tarde un poquito más en comenzar, pero una vez que se inicialice, el profiler comienza a actuar, optimiza poco y luego otro poco, así sucesivamente.

Mientras que en Chrome nuestro programa empieza a ejecutarse rápido y quizás toma un poco más de tiempo en que se optmize pero así es como funcionan los motores de javascript.
## Event Loop
Si lo tuviéramos que describir en una oración: El eventLoop es lo que hace que javascript parezca ser multihilo cuando realmente es un solo hilo. Entonces ¿cómo rayos es que podemos hacer scroll, click, cargar un imagen, hacer una petición, miles de cosas haciendo eso una sola vez?

Tenemos que saber que Javascript se organiza usando 2 estructuras de datos, es el Stack y el Heap.
El stack es una estructura de datos que lleva rastro de dónde está el programa, si un programa comienza con una función ``main()``, a su vez llama a ``renderList()`` y ``renderList()`` llama a ``getMovies()``, es Stack se vería algo así.
![Stack memory](https://raw.githubusercontent.com/JasanHdz/javascript-professional/master/assets/stackheap.png)

También tenemos el memory heap, el memory heap es una estructura desorganizada, en el stack hay un orden, una función dentro de una función, una dentro de otra, el memory Heap es completamente aleatoria y ahí es donde se guarda la información de las variables, el scope, etc.

El stack comenzará vacío, pero vamos a hacer una operación que se llama un push y vamos a poner como si ponemos un plato. Entonces en ese contenedor que solo está abierto para arriba hay un plato, si vovemos a hacer un push pusimos otro plato encima, hacemos push, otro plato encima; ahora, ¿qué pasa si tú quisieras quitar el plato que estaba hasta abajo? No puedes, porque no hay forma de sacarlo por enfrente, ni por debajo, solamente por arriba; por lo tanto tienes que sacar el plato que está hasta arriba, para sacar otro plato, otro y otro y por fin sacar el plato de hasta abajo.

Esa operación de sacar se llama pop, si hacemos pop sale getMovies, si volvemos a hacer pop sale renderList, y si volvemos a hacer pop sale main y el obtenemos el stack vacío.

![stack](https://raw.githubusercontent.com/JasanHdz/javascript-professional/master/assets/stack.png)
El stack es donde están nuestras funciones, es el registro de cómo está operando nuestro programa, apunta a variables como el scope.
![Stak part 2](https://raw.githubusercontent.com/JasanHdz/javascript-professional/master/assets/scope.png)
Es donde dice: Estas cosas en esta función tienen acceso al entorno global, esto tiene acceso al scope de la función, esto tiene acceso al scope de un bloque y nos guarda esa información.

Entonces si tenemos un programa como este:
![programa](https://raw.githubusercontent.com/JasanHdz/javascript-professional/master/assets/stackstart.png)
![programapart 2](https://raw.githubusercontent.com/JasanHdz/javascript-professional/master/assets/stackmain.png)
![programapart 3](https://raw.githubusercontent.com/JasanHdz/javascript-professional/master/assets/stackhello.png)
![programapart 4](https://raw.githubusercontent.com/JasanHdz/javascript-professional/master/assets/stackconsole.png)
Y así sucesivamente van agregando y quitando ejecuciones en el orden correspondiete.
## EventLoop con Asincronía
Cuando se ejecuta una función asíncrona, como por ejemplo un ``setTimeout()``, lo reconoce pero no lo ejecuta, sigue con su proceso normal y luego aparece otra vez para ejecutar la función que ejecutaría un ``setTimeout()``.

Parece raro, pero esta es la asincronía, cosas que van a pasar eventualmente, pues eventualmente pasarán, pero aún no les toca.
![programapart async 1](https://raw.githubusercontent.com/JasanHdz/javascript-professional/master/assets/stackasyncrono.png)
![programapart async 2](https://raw.githubusercontent.com/JasanHdz/javascript-professional/master/assets/stackasyncronosettimeout.png)
![programapart async 3](https://raw.githubusercontent.com/JasanHdz/javascript-professional/master/assets/stackasyncronoconsole.png)
![programapart async 4](https://raw.githubusercontent.com/JasanHdz/javascript-professional/master/assets/stackasyncronofin.png)
![programapart async 5](https://raw.githubusercontent.com/JasanHdz/javascript-professional/master/assets/stackasyncronoclean.png)
![programapart async 6](https://raw.githubusercontent.com/JasanHdz/javascript-professional/master/assets/stacksettimeout.png)
![programapart async 7](https://raw.githubusercontent.com/JasanHdz/javascript-professional/master/assets/stackasyncronoclean.png)
## Task Queue
¿Cómo funciona esto?

Para poder entenderlo tenemos que hablar sobre Queue: es una estructura de datos igual que el stack, donde lo primero que entra es lo último que sale. En el Queue lo primero que entra es lo primero que sale, es como ir al banco y hacemos una fila, el que llegó primero es al que van a atender primero

Teniendo en cuenta esto vamos a hablar sobre la cola de tareas.

Cuando teníamos el setTimeout() encolamos una tarea que ibamos a hacer en 1000 milisegundos.

![el 0](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LlTyKe9xd6RJ6x5f2-z%2F-LoI7BKq8iGAhi-e5tzh%2F-LoI8ECasfDh5yGe9mqQ%2FScreenshot_24.png?alt=media&token=8ce5a515-85e6-4cbc-b17b-7dc4cb85705b)
![el 0.5](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LlTyKe9xd6RJ6x5f2-z%2F-LoI7BKq8iGAhi-e5tzh%2F-LoI8HXWCsyohjVZW0h9%2FScreenshot_25.png?alt=media&token=014e4ffe-5596-4549-9d6f-e1436111da3d)
![el 1](https://raw.githubusercontent.com/JasanHdz/javascript-professional/master/assets/eventloop.png)
![el 2](https://raw.githubusercontent.com/JasanHdz/javascript-professional/master/assets/eventloopstack.png)
¿Qué pasa si el stack no está vacío?
![el 3](https://raw.githubusercontent.com/JasanHdz/javascript-professional/master/assets/eventloopstackloadtwo.png)
![el 4](https://raw.githubusercontent.com/JasanHdz/javascript-professional/master/assets/eventloopstackloadtwotask.png)
![el 5](https://raw.githubusercontent.com/JasanHdz/javascript-professional/master/assets/eventloopstackloadtwotaskall.png)
![el 6](https://raw.githubusercontent.com/JasanHdz/javascript-professional/master/assets/eventloopstackiii.png)
![el 7](https://raw.githubusercontent.com/JasanHdz/javascript-professional/master/assets/eventloopstackfintwo.png)
## Event Loop con Promesas
Las promesas son algo que eventualmente va a pasar, se puede resolver una promesa o se puede rechazar pero lo importante es que eventualmente van a retornar algo, esto es asíncrono, entonces llevamos este programa de nombre moreAsync.

![elp 1](https://raw.githubusercontent.com/JasanHdz/javascript-professional/master/assets/promiseeventloop.png)
Resulta que las promesas van en otra cola, la cola de microtareas Microtask Queue. Las microtareas son de mayor proridad y simpre van primero sobre el scheduled task.
![elp 2](https://raw.githubusercontent.com/JasanHdz/javascript-professional/master/assets/microtask.png)
![elp 3](https://raw.githubusercontent.com/JasanHdz/javascript-professional/master/assets/microtaskespera.png)
![elp 4](https://raw.githubusercontent.com/JasanHdz/javascript-professional/master/assets/microtaskpromise.png)
![elp 5](https://raw.githubusercontent.com/JasanHdz/javascript-professional/master/assets/microtaskpromise2.png)
![elp 6](https://raw.githubusercontent.com/JasanHdz/javascript-professional/master/assets/microtaskpromisefin.png)
# Promesas

Ya vimos cómo el eventLoop procesa las promesas, ahora vamos a volver a las promesas, pero esta vez vamos a ver cómo funciona el patrón de .then .Lo vamos a convertir a async await y también vamos a aprender diferentes patrones cuando escribimos funciones que nos regresan una promesa, todo esto para facilitar el desarrollo de nuestras apps. Todo esto lo vamos a hacer con una API que es libre, se llamá [themoviedb](https://developers.themoviedb.org/3/getting-started/authentication).

```js
// The Movie Database API: https://developers.themoviedb.org/3/getting-started/introduction
const apiKey = 'b89fc45c2067cbd33560270639722eae';

function getMovie(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
  return fetch(url).then(response => response.json());
}

async function getPopularMovies() {
  const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return fetch(url)
    .then(response => response.json())
    .then(data => data.results);
}

async function getTopMoviesIds(n = 3) {
  return getPopularMovies().then(popularMovies => {
    popularMovies.slice(0, n).map(movie => movie.id);
  })
}
```
# Getters y Setters
Uno de los features modernos que trae javascript son getters y setters, son funciones que podemos utilizar dentro de objetos que nos permiten tener propiedades virtuales, es decir, no es una propiedad que existe directamente en el objeto, pero a través de un getter o setter podemos correr una fución que va a calcular estos valores o va a mostrar una valor para establecer este nuevo valor.

Los getters los vamos a escribir usando el keyword get seguido de la propiedad virtual
```js
let person = {
  name:'Lalo',
  last_name:'Jami',
  age:25,
  languages:['js','css','python'],
  get skills(){
    return this.languages
  }
}

console.log(person.skills)
```
En este caso estoy retornando el valor de languages atraves de un getter llamado skills, pero para ver mejor su uso, mira este ejemplo:
```js
let person = {
  name:'Lalo',
  last_name:'Jami',
  age:25,
  languages:['js','css','python'],
  get fullName(){
    return `${this.name} ${this.last_name}`
  }
}

console.log(person.fullName)
```
En este caso estoy retornando el nombre completo (fullName), como una propiedad del objeto person. El fullName también lo podría traer a través de un método de la siguiente forma:
```js
let person = {
  name:'Lalo',
  last_name:'Jami',
  age:25,
  languages:['js','css','python'],
  fullName: function(){
    return `${this.name} ${this.last_name}`
  }
}

console.log(person.fullName())
```
Sin embargo, a traves del getter la semantica es mucho màs transparente y mantiene mejor la integridad de la data.

Setter
```js
let person = {
  name:'Lalo',
  last_name:'Jami',
  age:25,
  languages:[],
  set skills(){
    this.languages = skills
  }
}

person.skills = ['js','css','python']
console.log(person.languages)
```
En resumen los getters y setters nos permiten tener el control sobre las propiedades que podemos almacenar o recuperar.
# Proxy
Igual que los getters y setters, el proxy es uno de los features más recientes del lenguaje. También igual que los getters y setters, podemos intersectar algunas llamadas a un objeto. Sin embargo, más alla de get y set, podemos intersectar muchísimas otras cosas. Si vamos a la documentación de Proxy en MDN vamos a encontrar una sección que dice Methods of the handler object (métodos del objeto manejador). Aquí vamos a encontrar a get y set, decimos que son trampas. Cuando hay una llamada, la llamada va a caer en estas trampas si las tenemos definidas. En la trampa de get y de set también hay trampas para ver el getPrototypeOf, handler.apply, handler.constructor, etc.

Esto nos va a permitir que antes de que la llamada llegue al objeto al que tiene que llegar podemos manipularla. Hay una idea que se me hace muy interesante y muy divertida, es un feature que tienen algunos programas como por ejemplo git. Si vamos a la consola y escribimos mal el comando, no se ejecutara la instrucción, pero nos devolverá una sugerencia a lo que escribimos, o en dado caso de no tener una sugerencia, nos dará una lista de posibles comandos.

Vamos a hacer esto mismo, pero en Javascript, que será interceptar las llamadas si la propiedad que está buscando el usuario no existe en un objeto. Vamos a ver cuáles son las que sí existen para sugerir una.

Para este ejemplo nos vamos a apoyar de una librería que se llama [fast-levenshtein](https://www.jsdelivr.com/package/npm/fast-levenshtein). Leveshtein es un algoritmo que va a encontrar la distancia entre 2 cadenas. Es decir, si tenemos 2 cadenas y se diferencian por 1 sola letra la distancia sería de 1; si se diferencian por 2 campos, sería una distancia de 2.
```js
// target es mi objeto a supervisar (sus propiedades pueden ser objetos, array, funciones, u otro proxy)
const target = {
  red: 'Rojo',
  green: 'Verde',
  blue: 'Azul'
}
// handler es un objeto con funciones (trampa) que definen las acciones a seguir cuando se accede al objeto supervisado
const handler = {
  get(obj, prop) {
    if (prop in obj) {
      // si la propiedad existe, pues retornamos su valor
      return obj[prop]
    }

    // Si llega hasta aqui, vamos a ver si podemos retornar una sugerencia
    const suggetion = Object.keys(obj).find(key => {
      // creo un objeto con todas mis claves del objeto supervisado, y retorno aquella (nombre) 
      // que su distancia sea <= 3 tomando como base la propiedad invocada
      return Levenshtein.get(key, prop) <= 3 
    })

    
    if (suggetion) {
      console.log(`${prop} no se encontró. ¿Quisiste decir ${suggetion}?`);
    }

    return obj[prop];
  }
}
const p = new Proxy(target, handler);

p.red; // "Rojo"
p.green; // "Verder"
p.reed //reee no se encontró. ¿Quisiste decir red?
p.geen //geen no se encontró. ¿Quisiste decir green?
```
# Generadores
Los generadores sons funciones especiales, podemos iniciar su ejecución y detenerla a mitad, nuestro programa continúa por otro sitio y luego podemos regresar a esta función generador y continuar su ejecución donde la dejamos. Lo que está muy interesante es que los generadores, cuando los detenemos, se recuerdan de su contexto, de cuáles eran las variables que tenían en su scope. Veámos un ejemplo de cómo son las funciones.
```js
function* simpleGenerator() {
  console.log("GENERATOR START");
  console.log("GENERATOR END");
}

const gen = simpleGenerator();
```
Los generadores que se crean traen una función que se llama ``next()``, es una forma de decirle al generador "continúa tu ejecucíon", porque ahora esta suspendido. Si hacemos ``next()``, escribirá el generador en consola. Pero también regresa un objeto con los valores [value: undefine, y done: true], este es el valor de retorno del generador. Cuando ``done`` es ``true`` quiere decir que el generador terminó su ejecución.

Para obtener value definido podemos utilizar un keyword que se llama yield y si ejecutamos ``next()`` el yield cortará la ejecución y ahi terminará la ejecución, y si queremos volver a ejecutar las instrucciones pendientes tenemos que volver a lanzar a ``next()``.

```js
function* simpleGenerator() {
  console.log("GENERATOR START");
  yield;
  console.log("GENERATOR END");
}

const gen = simpleGenerator();
gen.next()
// GENERATOR START
gen.next();
// GENERATOR END
```
Algó muy interesantes es que cuando hacemos yield podemos regresar un valor
```js
function* simpleGenerator() {
  console.log("GENERATOR START");
  yield 1; // {value: 1, done: false}
  yield 2; // {value: 2, done: false}
  yield 3; // {value: 3, done: false}
  console.log("GENERATOR END");
}

const gen = simpleGenerator();
gen.next()
// GENERATOR START
gen.next();
// GENERATOR END
```
Generadores inifitos
```js
// Podemos hacer generadores infinitos
function* idMaker() {
  let id = 1;
  while (true) {
    yield id;
    id += 1;
  }
}
```
Cuando llamamos a next() también podemos pasar valores que la función recibe.
```js
function* idMakerWithReset() {
  let id = 1;
  let reset;
  while (true) {
    reset = yield id;
    if (reset) {
      id = 1;
    } else {
      id += 1;
    }
  }
}
```
Los generadores se prestan para crear funciones eficientes en memoria. Vamos a escribir la secuencia fibonacci, una función que imprima la secuencia, que lo que hace es sumar los dos números anteriores para generar uno nuevo.
```js
// Ahora hagamos un ejemplo un poco más complejo: la secuencia fibonacci
function* fibonacci() {
  let a = 1, b = 1;
  while (true) {
    const nextNumber = a + b;
    a = b;
    b = nextNumber;
    yield nextNumber;
  }
}
```
Los generadores son funciones especiales cuya ejecución podemos comenzar y detener a mitad de vuelo, y cuando queramos continuarla podemos llamar a next(). Podemos pasarle un valor al generador si hace falta y su ejecución va a continuar siempre recordándose del scope en el que estaba.

# Cómo cancelar peticiones Fetch

La peticiones AJAX permitieron en su tiempo hacer peticiones asíncronas al servidor sin tener que detener la carga de la página. Hoy en día se utiliza la función ``fetch()`` para esto.

Con ``fetch()`` tenemos algo llamado ``AbortController()`` que nos permite enviar una señal a una petición en plena ejecución para detenerla.

``AbortController()`` nos va a dar 2 controllers para poder detener una ejecución, en este caso va a ser la del ``fetch()``, la cual es una clase que trae el Motor de javascript, la cual tenemos que instanciarla.
```html
<html>
  <head>
    <title>Abort Fetch</title>
  </head>
  <body>
    <a href="/ejercicios/">Go back</a>
    <p><em>Abre la consola</em></p>
    <img id="huge-image" height="400" />
    <button id="load">Load HUGE Image</button>
    <button id="stop" disabled>Stop Fetching</button>
    <script src="abort-fetch.js"></script>
  </body>
</html>
```
```js
const url = 'https://images.pexels.com/photos/974470/nature-stars-milky-way-galaxy-974470.jpeg?q=100';
// Elementos del DOM imagen y 2 botones
const img = document.getElementById('huge-image');
const loadButton = document.getElementById('load');
const stopButton = document.getElementById('stop');
let controller;

// Función que habilita o desabilita un boton
function startLoading() {
  loadButton.disabled = true;
  // Camnbia el texto de su contenido
  loadButton.innerText = 'Loading...';
  stopButton.disabled = false;
}
// Funcíon que desabilita el botón de carga
function stopLoading() {
  loadButton.disabled = false;
  loadButton.innerText = 'Load HUGE Image';
  stopButton.disabled = true;
}

loadButton.onclick = async function() {
  // Se ejecuta startLoading que lo único que hace es cambiar la apariencia del botón
  // Para que se vea que está cargando
  startLoading();

  // Declaramos la variable antes para después tener acceso a ella
  // en el botón de cancelar petición fetch
  controller = new AbortController();
  try {
    // Hacemos la petición asíncrona a la URL usando Async await
    // Vamos a añadirle un objeto de configuración al fetch
    // Este objeto de configuración le vamos a pasar un objeto que se llama la señal
    // La señal va a venir del abort controller
    const response = await fetch(url, { signal: controller.signal });
    // Vamos a obtener el binario de la imagen con blob img en forma binaria
    const blob = await response.blob();
    // Convertimos el blob binario a una URL, el navegador se encarga de asignar el blob una url
    const imgUrl = URL.createObjectURL(blob);
    // Ahora el src se lo asignamos a la url de la imagen
    img.src = imgUrl;
  } catch (error) {
    console.log(error.message);
  }

  // Cuando la función asíncrona falle vamos a cambiar el boton a stop
  stopLoading();
};

stopButton.onclick = function() {
  // Si deseamos detener tenemos que llamar al abort controller.container
  // El abort envía una señal al fetch y hace que la petición se cancele
  controller.abort();

  stopLoading();
};
```


Un sitio tiene un carrusel de imágenes que no debería avanzar a la siguiente diapositiva a no ser que el usuario esté viendo la página.
 
Una aplicación que muestra un panel de información y no se quiere que se actualice la información del servidor cuando la página no está visible.
 
Una página quiere detectar cuando se está precargando para poder mantener un recuento preciso de las vistas de página.
 
Un sitio desea desactivar los sonidos cuando el dispositivo está en modo de espera (el usuario presiona el botón de encendido para apagar la pantalla).

# Intersection Observer API
La API Observador de Intersección provee una vía para, de forma asíncrona, observar cambios en la intersección de un elemento con un elemento ancestro o con el viewport del documento de nivel superior.

La información sobre intersección es necesaria por muchas razones, tales como:

Lazy-loading de imágenes u otro contenido a medida que la página se desplaza. Implementación de “scroll infinito” de sitios web, donde más y más contenido se carga y muestra a medida que usted hace scroll, de forma que el usuario no tiene que pasar páginas. Informes de visualizaciones de anuncios para calcular ingresos por publicidad. Decidir si deben realizarse tareas o procesos de animación basados en si el usuario verá o no el resultado.

## Creando un Intersection Observer
Crear el Intersection Observer llamando a su constructor y pasándole una función callback() para que se ejecute cuando un nivel (threshold) sea cruzado en una u otra dirección:
```js
var options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0
}

var observer = new IntersectionObserver(callback, options);
```
Un threshold de 1.0 significa que cuando el 100% del elemento target está visible dentro del elemento especificado por la opción root, la función callback es invocada.

## Opciones de Intersection observer
El objeto options pasado al constructor [IntersectionObserver()](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver) le deja controlar las circunstancias bajo las cuales la función callback del observer es invocada. Tiene los siguientes campos:

root

El elemento que es usado como viewport para comprobar la visibilidad de elemento target debe ser un elemento ascendiente del target. Por defecto se toma el viewport del navegador si no se especifica o si se especifica como null.

rootMargin

Margen alrededor del elemeto root. Puede tener valores similares a los de CSS [margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin) property, e.g. "10px 20px 30px 40px" (top, right, bottom, left). Los valores pueden ser porcentajes. Este conjunto de valores sirve para aumentar o encoger cada lado del cuadro delimitador del elemento root antes de calcular las intersecciones. Por defecto son todos cero.

threshold

Es un número o un array de números que indican a que porcentaje de visibilidad del elemento target, la función callback del observer debería ser ejecutada. Si usted quiere que se detecte cuando la visibilidad pasa la marca del 50%, debería usar un valor de 0.5. Si quiere ejecutar la función callback cada vez que la visibilidad pase otro 25%, usted debería especificar el array [0, 0.25, 0.5, 0.75, 1]. El valor por defecto es 0 (lo que significa que tan pronto como un píxel sea visible, la función callback será ejecutada). Un valor de 1.0 significa que el umbral no se considera pasado hasta que todos los pixels son visibles.

## Determinando un elemento para ser observado

Una vez usted ha creado el observer, necesita darle un elemento target para observar:

```js
var target = document.querySelector('#listItem');
observer.observe(target);
```
Cuando el elemento target encuentra un threshold especificado por el IntersectionObserver, la función callback es invocada. La función callback recibe una lista de objetos [IntersectionObserverEntry](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry) y el observer:
```js
var callback = function(entries, observer) { 
  entries.forEach(entry => {
    // Cada entry describe un cambio en la intersección para
    // un elemento observado
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};
```

Asegúrese de que su función callback se ejecute sobre el hilo principal. Debería operar tan rápidamente como sea posible; si alguna cosa necesita tiempo extra para ser realizada, use [Window.requestIdleCallback()](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback).

También, note que si especifica la opción root, el elemento target debe ser un descendiente del elemento root.

## Creación de Plugin para IntersectionObserver de nuestro videoplayer
```js
class AutoPause {
  constructor() {
    this.threshold = 0.25;
    this.handlerIntersection = this.handlerIntersection.bind(this)
  }
  run(player) {
    this.player = player;
    // const observer = new IntersectionObserver(handler, config)
    const observer = new IntersectionObserver(this.handlerIntersection, {
      // threshold: umbral define que porciento del elemento tiene que tener interseccion
      threshold: this.threshold
    })

    observer.observe(this.player.media) 
  }
  // Cuando intersectionObserver llame a handlerIntersection le va a pasar una lista de entries
  // los entries son todos los objetos que estamos observando 
  handlerIntersection(entries) {
    const entry = entries[0];
    console.log(entry);

    const isVisible = entry.intersectionRatio >= this.threshold

    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}
export default AutoPause;
```
## Visibility Change
El visibilityChange forma parte del API del DOM llamado Page Visibility y nos deja saber si el elemento es visible, pude ser usado para ejecutar una acción cuando cambiamos de pestaña. Así podemos ahorrar batería y mejorar la UX.

El documento DOM ahora tiene un elemento que podemos escuchar.
```js
document.addEventListener('visibilitychange', () => {
  console.log(document.visibilityState);
})
```
Usando este evento nosotros podemos salirnos del navegador, también podemos cambiar de pestaña y el DOM lo sabrá. Usemos esto en nuestro plugin para que cuando cambiemos de tab el video se detenga. En el método run() es cuando los plugins se echan a correr, aquí es un buen momento para conectarnos a este evento y que cuando suceda tomar acción.
```js
run(player) {
    this.player = player;
    // const observer = new IntersectionObserver(handler, config)
    const observer = new IntersectionObserver(this.handlerIntersection, {
      // threshold: umbral define que porciento del elemento tiene que tener interseccion
      threshold: this.threshold
    })

    observer.observe(this.player.media) 
    // Ejecutamos el evento VisiblityChange y ejecutamos una función
    document.addEventListener('visibilitychange', this.handleVisibilityChange)
  }
  handleVisibilityChange() {
    const isVisible = document.visibilityState === "visible";
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
```
El evento visibilityChange es un evento muy simple pero muy útil, nos deja saber si el tab es el que está hasta el frente, el tab que el usuario está viendo. Si cambiamos de tab nos permite cambiar acción, no solo nos permite ver un video, también pudiera ser cambiar el título de la pestaña, y así decirle al DOM que haga otras acciones que pueden ahorrar batería o mejorar el rendimiento de nuestras aplicaciones.
# Service worker
Una de las nuevas tendencias en el desarrollo web, son las PWA o progressive web apps, dentro de las varias cosas que ofrecen está que tu app funcione **offline**, esto lo hacemos posible usando los services workers, services workers es una capa que va a vivir entre el navegador y el internet. Lo que van a hacer es algo parecido a los Proxys. Van a interceptar peticiones, en este caso las peticiones vamos a tener la oportunidad de agarrar la petición, buscar la respuesta, pero antes de regresarla al browser, la vamos a guardar en caché

**¿Qué pasa una vez que lo tenemos en caché?**

La proxima vez que ocurra una petición, en lugar de tener que ir a internet, ya tenemos la respuesta; así que nadamás la regresamos. Imagínate un usuario que va dentro del metro, se mete en un túnel y pierde conectividad, va a seguir utilizando tu aplicación porque usando service workers va a funcionar offline.

Vamos a añadírselo a nuestro VideoPlayer.

1. Primero vamos a crear una condición. Esta condición nos va a servir si el navegador del usuario le da apoyo a los services workers. Como es un feature reciente, no todos los navegadores tienen service workers.
```js
if ('serviceworkers' in navigator) 
```
2. Después, dentro del service workets vamos a registrar un archivo, este archivo va a ser el service worker tal cual, pero es posible que dentro del registro ocurra un error, asi que es importante ver ese error.
```js
  navigator.serviceWorker.register('/sw.js')
    .catch(error => {
      console.log(error.message);
  })
```
3. En el nivel más alto del proyecto vamos a escribir el archivo del services worker. Aquí es donde vamos a escribir el código.

Los services workers se instalan, el navegador lo va a instalar en la computadora del usuario, no es lo mismo que una aplicación, pero sí va a vivir dentro del navegador. Entonces cada vez que nostros hagamos cambios hay que volver a instalarlos, esto va suceder cuando el usuario esté usando la aplicación en producción. Pero cuando estamos en desarrollo queremos que esto suceda rápido, no con la lentitud que pueda suceder en producción. Para hacerlo hay que activar updated on reload en las devtools

4. Vamos a escribir el código del service worker
```js
// Self hace refencia al service worker es como this a los objetos
self.addEventListener('install', event => {
  // Creamos un precache con una lista de recursos que queremos que mantenga en cache
  event.waitUntil(precache());
})

// Cuando ocurra una petición queremos a ir al cache para ver si encontramos la respuesta
self.addEventListener('fetch', event => {
  // Extraemos la petición
  const request = event.request;
  // Solo queremos hacer algo con las peticiones que son GET
  if (request.method !== "GET")
    return;
  
  // actualizar el cache
  event.waitUntil(updateCache(cache))

  
  // Buscamos en el cache
  // event tiene otra función que se llamá responder con responseWith
  // vamos a responder con una respuesta cacheada
  event.respondWith(cachedResponse(request))
})

// Escribimos la función del precache
async function precache() {
  // Para trabajar con cache tenemos que trabajar con una parte
  // de la api del dom que se llamá caches, y lo que hay que hacer es abrir un cache en especifico
  // Creamos una instancia de cache que le va a pertenecer o se va a llamar v1,
  // podemos ponerle como queramos porque apenas estamos haciendo una instancia,
  // este cache regresa una promesa, por lo cual hay que esperarla
  const cache = await caches.open("v1");

  // Una vez tenemos la instancia de cache queremos añadir varios recursos
  // añadirmos todos nuestro recursos, los cuales son todos lo archivos que hemos escrito
  // Tenemos que regresarlo porque devuelve una promesa
  return cache.addAll([
    // Es muy importante asignarne este request
    '/',
    'index.html',
    'styles.css',
    'MediaPlayer.js',
    'index.js',
    'plugins/AutoPause.js',
    'plugins/AutoPlay.js',
    'buckbunny.mp4'
  ]);


}

// vamos a pasarle el request
async function cachedResponse(request) {
// Comenzamos abriendo el cache 
  const cache = await caches.open("v1");
  // debemos checar si en el cache tenemos la contestanción al request
  // Para hacer eso vamos a guardalo en el response
  // Estamos preguntando al cache
  // ¿Ya tienes una copia que le corresponse al request?
  const response = await cache.match(request)
  // Como es posible que este response sea undefine, tenemos que contestar con lo que nos de la red
  return response || fetch(request);

}

async function updateCache(request) {
  const cache = await caches.open("v1");
  const response = await fetch(request);
  return cache.put(request, response)
}
```

# typeScript

TypeScript es un superset de JavaScript que añade tipos a nuestras variables ayudando así a la detección de errores de forma temprana y mejorando el autocompletado.

Los navegadores no entienden TypeScript así que lo vamos a transpilar a JavaScript usando Parcel.

``yarn add parcel-bundler --dev``

Agregamos un par de configuraciones a nuestro packages.json
```js
"scripts": {
    "start": "parcel index.html player-video/index.html player-video/**/*.html"
  },
  "browserslist": [
    "last 1 Chrome version"
  ]
```
TypeScript es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases. [Anders Hejlsberg](https://es.wikipedia.org/wiki/Anders_Hejlsberg), diseñador de C# y creador de Delphi y Turbo Pascal, ha trabajado en el desarrollo de TypeScript.1​ TypeScript puede ser usado para desarrollar aplicaciones JavaScript que se ejecutarán en el lado del cliente o del servidor (Node.js).

TypeScript extiende la sintaxis de JavaScript, por tanto cualquier código JavaScript existente debería funcionar sin problemas. Está pensado para grandes proyectos, los cuales a través de un compilador de TypeScript se traducen a código JavaScript original.

## Tipos básicos en Typescript
* boolean. Valor verdadero o falso.
* number. Números.
* string. Cadenas de texto.
* string[]. Arreglo del tipo cadena de texto.
* Array. Arreglo multi-tipo, acepta cadenas de texto o números.
* enum. Es un tipo especial llamado enumeración.
* any. Cualquier tipo.
* object. Del tipo objeto.
```js
// TypeScript por Jasan Hernández
// Boolean
let muted: boolean = true;
muted = false;

// Numbers
let numerador: number = 42;
let denomindador: number = 6;
let resultado = numerador / denomindador;

// String
let nombre: string = "Jasan";
let saludo: string = `Me llamo ${nombre}`;

// Arreglos
let people: string[] = [];
people = ["Isabel", "Nicole", "Raúl"];
// people.push(34);

// Arreglos de Strings and numbers:
let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push("Ricardo");
peopleAndNumbers.push(345);

// Enum
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Amarillo",
}
let colorFavorito: Color = Color.Azul;
console.log(`Mi color favorito es: ${colorFavorito}`);

// Any
let comodin: any  = "Joker";
comodin = { type: "WildCard" }

// Object 
let someObject: object = { type: "WildCard" };
```
## Funciones en Typescript
En Javascript las funciones toman argumentos y pudieran regresar algun valor. En Typescript podemos ser explícitos de cómo deben ser esos argumentos y también podemos proveer información de cuál es valor que debe regresar la función.

Typescript va a evitar que cometamos errores que le puedan pasar a cualquiera, typescript es programación pareja, escribes y tu pareja te va diciendo: "ahí tienes un error".
```js
// Funciones
function add(a: number, b: number): number {
  return a + b;
}
const sum = add(4, 25)

function createAdder(a: number): (number) => number {
  return function (b: number) {
    return a + b;
  }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firtsName: string, lastName?: string): string {
  return `${firtsName} ${lastName}`;
}
const jasan = fullName('Jasan');

function fullValue(firtsName: string = "Pepe", lastName: string = "Smith"): string {
  return `${firtsName} ${lastName}`;
}
const person = fullValue();
```
## Interfaces en Typescript
Las interfaces nos permiten declarar la forma que tiene un objeto, esto puede ser útil porque nos ayuda en autocompletado y evitar cometer algunos errores.

```js
enum Color {
  Rojo = "Rojo",
  Verde = "Verde"
};

interface Rectangulo {
  height: number,
  width: number
  color?: Color
}

let rect: Rectangulo = {
  height: 4,
  width: 3,
  // color: Color.Verde
}

function area(r: Rectangulo) {
  return r.height * r.width;
}

const areaReact = area(rect);
rect.toString = function () {
  return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
}

console.log(rect.toString());
```
Las interfaces definen la forma exacta que debe tener un objeto, no podemos añadir propiedades de más ni de menos. En caso de que una propiedad sea opcional la tenemos que marcar como opcional

## Clases en Typescript
JavaScript tradicional utiliza funciones y herencia basada en prototipos para construir componentes reutilizables, pero esto puede resultar un poco incómodo para los programadores más cómodos con un enfoque orientado a objetos, donde las clases heredan la funcionalidad y los objetos se crean a partir de estas clases. A partir de ECMAScript 2015, también conocido como ECMAScript 6, los programadores de JavaScript podrán construir sus aplicaciones utilizando este enfoque basado en clases orientado a objetos. En TypeScript, permitimos que los desarrolladores usen estas técnicas ahora y las compilen en JavaScript que funcione en todos los principales navegadores y plataformas, sin tener que esperar a la próxima versión de JavaScript.

Echemos un vistazo a un ejemplo simple basado en clases:
```js
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return"Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
```
La sintaxis debería resultarle familiar si ha usado C # o Java anteriormente. Declaramos una nueva clase Greeter. Esta clase tiene tres miembros: una propiedad llamada greeting, un constructor y un método greet.

Notarás que en la clase cuando nos referimos a uno de los miembros de la clase que anteponemos this.. Esto denota que es un acceso de miembro.

En la última línea construimos una instancia de la Greeterclase usando new. Esto llama al constructor que definimos anteriormente, creando un nuevo objeto con la Greeterforma y ejecutando el constructor para inicializarlo.
## Herencia Typescript
En TypeScript podemos usar patrones comunes orientados a objetos. Uno de los patrones más fundamentales en la programación basada en clases es poder extender las clases existentes para crear otras nuevas usando la herencia.

Echemos un vistazo a un ejemplo:
```js
class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
```
Este ejemplo muestra la característica de herencia más básica: las clases heredan propiedades y métodos de las clases base. Aquí, Doghay una clase derivada que deriva de la clase Animalbase usando la extendspalabra clave. Las clases derivadas a menudo se denominan subclases , y las clases base a menudo se denominan superclases .

Debido a que Dogextiende la funcionalidad desde Animal, pudimos crear una instancia de Dogque podría ambos bark()y move().

# Modificadores de Acceso en Typescript
## Público por defecto
En nuestros ejemplos, hemos podido acceder libremente a los miembros que declaramos en todos nuestros programas. Si está familiarizado con las clases en otros idiomas, puede haber notado en los ejemplos anteriores que no hemos tenido que usar la palabrapublic para lograr esto; por ejemplo, C # requiere que cada miembro este explícitamente etiquetado publiccomo visible. En TypeScript, cada miembro es publicpor defecto.

Aún puede marcar un miembro publicexplícitamente. Podríamos haber escrito la Animalclase de la sección anterior de la siguiente manera:
```js
class Animal {
    public name: string;
    publicconstructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
```
## Private
Cuando se marca un miembro private, no se puede acceder desde fuera de su clase que lo contiene. Por ejemplo:
```js
class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

new Animal("Cat").name; // Error: 'name' is private;
```
TypeScript es un sistema de tipo estructural. Cuando comparamos dos tipos diferentes, independientemente de su procedencia, si los tipos de todos los miembros son compatibles, entonces decimos que los tipos mismos son compatibles.

Sin embargo, al comparar tipos que tienen private y protectedmiembros, tratamos estos tipos de manera diferente. Para que dos tipos se consideren compatibles, si uno de ellos tiene un privatemiembro, el otro debe tener un privatemiembro que se originó en la misma declaración. Lo mismo se aplica a los protectedmiembros.

Veamos un ejemplo para ver mejor cómo se desarrolla esto en la práctica:
```js
class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
animal = employee; // Error: 'Animal' and 'Employee' are not compatible
```
En este ejemplo, tenemos una Animaly una Rhino, con Rhinoser una subclase de Animal. También tenemos una nueva clase Employee que se ve idéntica Animalen términos de forma. Creamos algunas instancias de estas clases y luego tratamos de asignarlas entre sí para ver qué sucederá. Porque Animal y Rhino comparten el private lado de su forma desde la misma declaración de private name: string in Animal, son compatibles. Sin embargo, este no es el caso Employee. Cuando intentamos asignar de a Employee a Animal, obtenemos un error de que estos tipos no son compatibles. Aunque Employee también tiene un private miembro llamado name, no es el que declaramos en Animal .
## Protected
El protected modificador actúa de manera muy similar al private modificador con la excepción de que los miembros declarados protected también pueden accederse dentro de las clases derivadas. Por ejemplo:
```js
class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return`Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // error
```
Tenga en cuenta que si bien no podemos usarlo nam edesde fuera Person, aún podemos usarlo desde un método de instancia de Employee porque Employee deriva de Person .

Un constructor también puede estar marcado protected. Esto significa que la clase no se puede instanciar fuera de su clase que contiene, sino que se puede extender. Por ejemplo:
```js
class Person {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; }
}

// Employee can extend Person
class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return`Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
let john = new Person("John"); // Error: The 'Person' constructor is protected
```
# Convertir Proyecto a Typescript
Quick fix es algo que vas a poder usar si usas typescript y Visual Studio Code. VSC ya trae un plugin que habilita todas estas funcionalidades de a gratis, esa es una buenas convinaciones en el desarrollo de js. vscode y typescript.
## Refactorización
La [refactorización del código fuente](https://en.wikipedia.org/wiki/Code_refactoring) puede mejorar la calidad y la facilidad de mantenimiento de su proyecto al reestructurar su código sin modificar el comportamiento del tiempo de ejecución. Visual Studio Code admite operaciones de refactorización (refactorizaciones) como el Método deextracción y la [Variable de extracción](https://refactoring.com/catalog/extractVariable.html) para mejorar su base de código desde su editor.

La refactorización de código es el proceso de reestructurar el código de computadora existente, cambiar la [factorización](https://en.wikipedia.org/wiki/Decomposition_(computer_science)), sin cambiar su comportamiento externo. La refactorización está destinada a mejorar los atributos [no funcionales](https://en.wikipedia.org/wiki/Non-functional_requirement) del [software](https://en.wikipedia.org/wiki/Software). Las ventajas incluyen [legibilidad](https://en.wikipedia.org/wiki/Readability) mejorada del código y complejidad reducida ; Estos pueden mejorar el [mantenimiento del código fuente](https://en.wikipedia.org/wiki/Maintainability) y crear una arquitectura interna más expresiva o un modelo de objeto para mejorar la [extensibilidad](https://en.wikipedia.org/wiki/Extensibility).

