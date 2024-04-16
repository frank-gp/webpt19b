module.exports = [{
    "id": 1218,
    "pregunta": "¿Cuál es una de las principales responsabilidades del desarrollador en un proyecto?",
    "opciones": [
      "Mantener el código ordenado y legible sin importar la extensión de la aplicación.",
      "Asegurarse de que el proyecto tenga una gran cantidad de líneas de código.",
      "Utilizar la menor cantidad posible de comentarios en el código.",
      "Realizar cambios constantes en la estructura del proyecto."
    ],
    "respuestaCorrecta": "Mantener el código ordenado y legible sin importar la extensión de la aplicación.",
    "categoria": "M2. Backend avanzado",
    "seccion": "Backend avanzadoado"
},
{
    "id": 1219,
    "pregunta": "¿Qué es el proceso de modularización y división de responsabilidades en el desarrollo de software?",
    "opciones": [
      "La forma en la que se dividen las tareas entre los miembros del equipo de desarrollo.",
      "La forma en la que se organiza y se divide el código en carpetas y archivos independientes.",
      "El proceso de documentar el código de forma detallada.",
      "El proceso de depurar y corregir errores en el código."
    ],
    "respuestaCorrecta": "La forma en la que se organiza y se divide el código en carpetas y archivos independientes.",
    "categoria": "M2. Backend avanzado",
    "seccion": "Backend avanzadoado"
},
{
    "id": 1220,
    "pregunta": "¿Qué característica define a cada módulo y archivo en el contexto de modularización en el desarrollo de software?",
    "opciones": [
      "Cada módulo encapsula una parte de la aplicación y cada archivo tendrá múltiples responsabilidades.",
      "Cada módulo encapsula una parte de la aplicación y cada archivo tendrá una única responsabilidad bien definida.",
      "Cada módulo encapsula toda la aplicación y cada archivo tendrá una única responsabilidad bien definida.",
      "Cada módulo encapsula toda la aplicación y cada archivo tendrá múltiples responsabilidades."
    ],
    "respuestaCorrecta": "Cada módulo encapsula una parte de la aplicación y cada archivo tendrá una única responsabilidad bien definida.",
    "categoria": "M2. Backend avanzado",
    "seccion": "Backend avanzadoado"
},
{
    "id": 1222,
    "pregunta": "¿Qué significa la separación de preocupaciones en el desarrollo de software?",
    "opciones": [
      "Dividir el código en módulos que se ocupen de diferentes aspectos de la aplicación, como la lógica de negocio, acceso a datos, autenticación, manejo de errores, etcétera.",
      "Dividir el código en módulos que se ocupen de una única preocupación, como la lógica de negocio.",
      "Unificar todos los aspectos de la aplicación en un solo módulo.",
      "No preocuparse por la organización del código."
    ],
    "respuestaCorrecta": "Dividir el código en módulos que se ocupen de diferentes aspectos de la aplicación, como la lógica de negocio, acceso a datos, autenticación, manejo de errores, etcétera.",
    "categoria": "M2. Backend avanzado",
    "seccion": "Backend avanzadoadoSeparación de Preocupaciones"
},
{
    "id": 1224,
    "pregunta": "¿Qué permite la abstracción en el desarrollo de software?",
    "opciones": [
      "Interactuar con un módulo sin necesidad de entender todos los detalles de su implementación.",
      "Interactuar con un módulo solo si se comprenden todos los detalles de su implementación.",
      "Ocultar por completo la implementación de un módulo.",
      "Hacer que la implementación de un módulo sea visible para todos los demás módulos."
    ],
    "respuestaCorrecta": "Interactuar con un módulo sin necesidad de entender todos los detalles de su implementación.",
    "categoria": "M2. Backend avanzado",
    "seccion": "Backend avanzado"
},
{
    "id": 1225,
    "pregunta": "¿Qué característica tiene Express para manejar errores de manera predeterminada?",
    "opciones": [
      "Express cuenta con un middleware de manejo de errores predeterminado de manera explícita.",
      "Express no cuenta con ninguna función para manejar errores.",
      "Express cuenta con un middleware de manejo de errores predeterminado de manera implícita que captura los errores que ocurren dentro de las rutas y otros middlewares de la aplicación.",
      "Express requiere que se implemente un middleware de manejo de errores personalizado para cada aplicación."
    ],
    "respuestaCorrecta": "Express cuenta con un middleware de manejo de errores predeterminado de manera implícita que captura los errores que ocurren dentro de las rutas y otros middlewares de la aplicación.",
    "categoria": "M2. Backend avanzado",
    "seccion": "Backend avanzado"
},

{
    "id": 1226,
    "pregunta": "¿Qué significa el concepto de 'función de orden superior' en programación?",
    "opciones": [
      "Se refiere a funciones que se ejecutan antes que otras funciones.",
      "Se refiere a funciones que aceptan otras funciones como argumentos para usarlas en un bloque de lógica adicional.",
      "Se refiere a funciones que devuelven otras funciones como resultado.",
      "Se refiere a funciones que tienen un nivel de importancia superior en la estructura de un programa."
    ],
    "respuestaCorrecta": "Se refiere a funciones que aceptan otras funciones como argumentos para usarlas en un bloque de lógica adicional.",
    "categoria": "M2. Backend avanzado",
    "seccion": "Backend avanzado"
},
{
    "id": 1227,
    "pregunta": "¿Cuál es la idea general de crear una función de orden superior para manejar errores en Express?",
    "opciones": [
      "Manejar los errores de forma específica en cada handler de manera individual.",
      "Crear una función que se encargue de procesar los errores de forma genérica, permitiendo planificar el manejo de errores en una sola función en lugar de hacerlo en cada handler.",
      "Evitar el manejo de errores en Express y dejar que los errores se propaguen sin control.",
      "Utilizar una función para manejar los errores de forma externa a Express."
    ],
    "respuestaCorrecta": "Crear una función que se encargue de procesar los errores de forma genérica, permitiendo planificar el manejo de errores en una sola función en lugar de hacerlo en cada handler.",
    "categoria": "M2. Backend avanzado",
    "seccion": "Backend avanzado"
},
{
    "id": 1228,
    "pregunta": "¿Cuál es la estructura general de una función de orden superior para manejar errores en Express?",
    "opciones": [
      "Una función que recibe como argumento otra función síncrona y la ejecuta dentro del manejo de errores que definamos.",
      "Una función que recibe como argumento otra función asíncrona y la ejecuta dentro del manejo de errores que definamos.",
      "Una función que recibe como argumento un objeto de error y lo procesa de acuerdo a las especificaciones de Express.",
      "Una función que recibe como argumento un middleware de error y lo ejecuta en caso de producirse un error en la aplicación."
    ],
    "respuestaCorrecta": "Una función que recibe como argumento otra función asíncrona y la ejecuta dentro del manejo de errores que definamos.",
    "categoria": "M2. Backend avanzado",
    "seccion": "Backend avanzado"
},
{
    "id": 1229,
    "pregunta": "¿Cómo podemos asegurar que el status code de una respuesta coincida con la respuesta emitida al cliente en Express?",
    "opciones": [
      "Implementando una clase auxiliar que no permita personalizar los tipos de error.",
      "Implementando una clase auxiliar que nos permita definir tipos de error cuyas propiedades puedan ser personalizadas.",
      "Utilizando únicamente los status codes predefinidos por Express.",
      "No personalizando los tipos de error para mantener la simplicidad del código."
    ],
    "respuestaCorrecta": "Implementando una clase auxiliar que nos permita definir tipos de error cuyas propiedades puedan ser personalizadas.",
    "categoria": "M2. Backend avanzado",
    "seccion": "Backend avanzado"
},
{
    "id": 1230,
    "pregunta": "¿Qué se entiende por 'Utils & helpers' en el contexto del desarrollo de software?",
    "opciones": [
      "Funciones especializadas que se utilizan para operaciones complejas en un proyecto.",
      "Funciones o grupo de funciones que proporcionan utilidades auxiliares, realizando tareas comunes y a veces repetitivas para facilitar ciertas operaciones dentro de nuestros proyectos.",
      "Funciones que no son útiles y deben evitarse en un proyecto.",
      "Funciones que se utilizan para manipular errores en un proyecto."
    ],
    "respuestaCorrecta": "Funciones o grupo de funciones que proporcionan utilidades auxiliares, realizando tareas comunes y a veces repetitivas para facilitar ciertas operaciones dentro de nuestros proyectos.",
    "categoria": "M2. Backend avanzado",
    "seccion": "Backend avanzado"
},
{
    "id": 1231,
    "pregunta": "¿Cuál es el enfoque principal de los 'helpers' en una aplicación?",
    "opciones": [
      "Almacenar funciones principales para una tarea específica dentro de la aplicación.",
      "Almacenar funciones auxiliares para una tarea específica dentro de la aplicación.",
      "Almacenar funciones que no tienen relación con ninguna tarea específica dentro de la aplicación.",
      "Almacenar funciones que manejan errores en la aplicación."
    ],
    "respuestaCorrecta": "Almacenar funciones auxiliares para una tarea específica dentro de la aplicación.",
    "categoria": "M2. Backend avanzado",
    "seccion": "Backend avanzado"
},

{
    "id": 1233,
    "pregunta": "¿Qué caracteriza a los 'utils' en una aplicación?",
    "opciones": [
      "Trabajan con implementaciones muy específicas para una tarea particular dentro de la aplicación.",
      "Trabajan con implementaciones más genéricas.",
      "Son funciones principales que se utilizan en toda la aplicación.",
      "Son funciones especializadas para manejar errores en la aplicación."
    ],
    "respuestaCorrecta": "Trabajan con implementaciones más genéricas.",
    "categoria": "M2. Backend avanzado",
    "seccion": "Backend avanzado"
}

];