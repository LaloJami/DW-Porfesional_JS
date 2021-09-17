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
Variables disponibles de forma global se usa la palabra var, son accesibles por todos los scripts que se cargan en la página y se declaran fuera de una función o bloque. Aquí hay mucho riesgo de sobreescritura.

## Function Scope
Variables declaradas dentro de una función utilizando var sólo visibles dentro de ella misma (incluyendo los argumentos que se pasan a la función).

## Block Scope
Variables definidas dentro de un bloque, por ejemplo variables declaradas dentro un loop while o for. Se usa let y const para declarar este tipo de variables.

## Module Scope
Cuando se denota un script de tipo module con el atributo type="module las variables son limitadas al archivo en el que están declaradas.