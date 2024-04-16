module.exports = [{
    "id": 1234,
    "pregunta": "¿Qué es la 'memory heap' en el contexto de la programación?",
    "opciones": [
      "Es una región o espacio de memoria en tu PC en la que se asignan variables cuando las creas y se almacenan los datos creados durante la ejecución.",
      "Es una estructura de datos que almacena las funciones creadas durante la ejecución de un programa.",
      "Es un espacio de memoria reservado para almacenar información sobre los procesos en ejecución en tu PC.",
      "Es un tipo de memoria que almacena temporalmente los resultados de las operaciones aritméticas realizadas por un programa."
    ],
    "respuestaCorrecta": "Es una región o espacio de memoria en tu PC en la que se asignan variables cuando las creas y se almacenan los datos creados durante la ejecución.",
    "categoria": "M2 JavaScript Avanzado",
    "seccion": "Memory Heap"
},
{
    "id": 1235,
    "pregunta": "¿Qué es el 'call stack' en el contexto de la programación?",
    "opciones": [
      "Es el mecanismo que organiza la ejecución de las funciones en una aplicación, apilando los entornos en los que cada fragmento de tu código se ejecuta.",
      "Es una estructura de datos que almacena las funciones que han sido llamadas pero aún no han finalizado su ejecución.",
      "Es un registro que contiene información sobre las llamadas a funciones realizadas durante la ejecución de un programa.",
      "Es un espacio de memoria reservado para almacenar la dirección de retorno de las funciones en ejecución."
    ],
    "respuestaCorrecta": "Es el mecanismo que organiza la ejecución de las funciones en una aplicación, apilando los entornos en los que cada fragmento de tu código se ejecuta.",
    "categoria": "M2 JavaScript Avanzado",
    "seccion": "Call Stack"
},
{
    "id": 1236,
    "pregunta": "¿Qué sucede en el 'call stack' cuando se llama a una función en un programa?",
    "opciones": [
      "Se añade un nuevo contexto en la parte inferior de la pila que contiene toda la información sobre la función en curso.",
      "Se añade un nuevo contexto en la parte superior de la pila que contiene toda la información sobre la función en curso.",
      "Se elimina el contexto en la parte superior de la pila y se añade uno nuevo con la información sobre la función en curso.",
      "Se elimina el contexto en la parte superior de la pila y se añade uno nuevo con la información sobre la función en curso."
    ],
    "respuestaCorrecta": "Se añade un nuevo contexto en la parte superior de la pila que contiene toda la información sobre la función en curso.",
    "categoria": "M2 JavaScript Avanzado",
    "seccion": "Call Stack"
},
{
    "id": 1237,
    "pregunta": "¿Qué ocurre al completarse la ejecución de una función en el 'call stack'?",
    "opciones": [
      "Se elimina su contexto de la pila.",
      "Se mantiene su contexto en la pila pero se marca como finalizado.",
      "Se añade su contexto en la parte inferior de la pila para su posible reutilización en el futuro.",
      "Se añade su contexto en la parte superior de la pila para permitir la ejecución de funciones recursivas."
    ],
    "respuestaCorrecta": "Se elimina su contexto de la pila.",
    "categoria": "M2 JavaScript Avanzado",
    "seccion": "Call Stack"
},
{
    "id": 1239,
    "pregunta": "¿Qué es el contexto de ejecución global en JavaScript?",
    "opciones": [
      "Es el ámbito en el que está escrito el código dentro de una función específica.",
      "Es el ámbito en el que está escrito el código dentro de un bloque de código delimitado por llaves {}.",
      "Es el ámbito en el que está escrito el código fuera de cualquier función o bloque específico.",
      "Es el ámbito en el que están definidas las variables locales de una función."
    ],
    "respuestaCorrecta": "Es el ámbito en el que está escrito el código fuera de cualquier función o bloque específico.",
    "categoria": "M2 JavaScript Avanzado",
    "seccion": "Contexto de Ejecución Global"
},
{
    "id": 1240,
    "pregunta": "¿Qué es el contexto de ejecución local en JavaScript?",
    "opciones": [
      "Es el ámbito en el que está escrito el código dentro de una función específica.",
      "Es el ámbito en el que está escrito el código dentro de un bloque de código delimitado por llaves {}.",
      "Es el ámbito en el que está escrito el código fuera de cualquier función o bloque específico.",
      "Es el entorno en el que se ejecuta un bloque de código específico, generalmente dentro de una función o un bloque delimitado por llaves."
    ],
    "respuestaCorrecta": "Es el entorno en el que se ejecuta un bloque de código específico, generalmente dentro de una función o un bloque delimitado por llaves.",
    "categoria": "M2 JavaScript Avanzado",
    "seccion": "Contexto de Ejecución Local"
},
{
    "id": 1241,
    "pregunta": "¿Qué significa el ámbito o alcance léxico en JavaScript?",
    "opciones": [
      "Se refiere al contexto en el que se ejecuta una función o un bloque de código específico.",
      "Se refiere al contexto en el que se busca y se resuelve el valor de una variable.",
      "Se refiere al contexto en el que se crea una variable y se le asigna un valor.",
      "Se refiere al contexto en el que se definen las funciones y se establecen las variables."
    ],
    "respuestaCorrecta": "Se refiere al contexto en el que se busca y se resuelve el valor de una variable.",
    "categoria": "M2 JavaScript Avanzado",
    "seccion": "Ámbito Léxico"
},
{
    "id": 1242,
    "pregunta": "¿Qué es el proceso de hoisting en JavaScript?",
    "opciones": [
      "Es un comportamiento que consiste en mover las declaraciones de variables y funciones al final de su ámbito léxico antes de que el código comience a ejecutarse.",
      "Es un comportamiento que consiste en mover las declaraciones de variables y funciones al inicio de su ámbito léxico antes de que el código comience a ejecutarse.",
      "Es un comportamiento que consiste en reorganizar el código de una función para optimizar su ejecución.",
      "Es un comportamiento que consiste en ejecutar las funciones antes de que se declaren en el código."
    ],
    "respuestaCorrecta": "Es un comportamiento que consiste en mover las declaraciones de variables y funciones al inicio de su ámbito léxico antes de que el código comience a ejecutarse.",
    "categoria": "M2 JavaScript Avanzado",
    "seccion": "Hoisting"
},
{
    "id": 1243,
    "pregunta": "¿Qué son las closures en JavaScript?",
    "opciones": [
      "Son funciones que tienen acceso a variables definidas en su ámbito léxico, pero no pueden acceder a ellas una vez que la función ha terminado su ejecución.",
      "Son funciones que tienen acceso a variables definidas en su ámbito léxico, incluso después de haber terminado su ejecución.",
      "Son funciones que pueden acceder a variables definidas en su ámbito léxico, pero solo mientras la función esté en ejecución.",
      "Son funciones que tienen acceso a variables definidas en su ámbito léxico, pero solo pueden acceder a ellas en tiempo de compilación."
    ],
    "respuestaCorrecta": "Son funciones que tienen acceso a variables definidas en su ámbito léxico, incluso después de haber terminado su ejecución.",
    "categoria": "M2 JavaScript Avanzado",
    "seccion": "Closures"
},
{
    "id": 1244,
    "pregunta": "¿Cómo se crean las closures en JavaScript?",
    "opciones": [
      "Se crean cuando una función es declarada dentro de otra y la función interna hace referencia a variables de la externa.",
      "Se crean cuando una función es declarada con una sintaxis específica que indica que es una closure.",
      "Se crean cuando una función es declarada con la palabra clave 'closure' antes de su nombre.",
      "Se crean cuando una función es declarada con una variable que contiene el valor de otra función."
    ],
    "respuestaCorrecta": "Se crean cuando una función es declarada dentro de otra y la función interna hace referencia a variables de la externa.",
    "categoria": "M2 JavaScript Avanzado",
    "seccion": "Closures"
},
{
    "id": 1245,
    "pregunta": "¿Cómo se podria entender closure en JavaScript?",
    "opciones": [
      "Es la facilidad que tiene una función para acceder al ámbito léxico de otra función en tiempo de ejecución.",
      "Es la facilidad que tiene una función hija de acceder al ámbito léxico de su función padre que la define, en caso de necesitar utilizar esta información dentro de su propio contexto de ejecución.",
      "Es la habilidad de una función para modificar variables en el ámbito global.",
      "Es la capacidad de una función para ejecutarse de forma asíncrona."
    ],
    "respuestaCorrecta": "Es la facilidad que tiene una función hija de acceder al ámbito léxico de su función padre que la define, en caso de necesitar utilizar esta información dentro de su propio contexto de ejecución.",
    "categoria": "M2 JavaScript Avanzado",
    "seccion": "Closures"
}

];