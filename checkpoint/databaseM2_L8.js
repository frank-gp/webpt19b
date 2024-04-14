module.exports = [
  {
    id: 801,
    pregunta: "¿Qué es un servicio en el contexto de una aplicación?",
    opciones: [
      "Un segmento específico de lógica de negocio que brinda servicio a una funcionalidad particular de la aplicación",
      "Una interfaz de usuario que permite a los usuarios interactuar con la aplicación",
      "Un componente que gestiona la estructura y el diseño de la aplicación",
      "Un protocolo de comunicación utilizado para enviar y recibir datos entre el cliente y el servidor",
    ],
    respuestaCorrecta: "Un segmento específico de lógica de negocio que brinda servicio a una funcionalidad particular de la aplicación",
    categoria: "Módulo 2: L-08 Express 2",
    seccion: "08.01 Servicios",
  },
  {
    id: 802,
    pregunta: "¿Cuál es la principal diferencia entre los controladores y los servicios en una aplicación web?",
    opciones: [
      "Los controladores manejan solicitudes y respuestas específicas del servidor, mientras que los servicios se encargan de tareas más amplias y especializadas, como la autenticación y la gestión de bases de datos",
      "Los controladores y los servicios tienen la misma función en una aplicación web",
      "Los servicios son utilizados exclusivamente para la gestión de archivos estáticos en la aplicación",
    ],
    respuestaCorrecta:
      "Los controladores manejan solicitudes y respuestas específicas del servidor, mientras que los servicios se encargan de tareas más amplias y especializadas, como la autenticación y la gestión de bases de datos",
    categoria: "Módulo 2: L-08 Express 2",
    seccion: "08.01 Servicios",
  },
  {
    id: 803,
    pregunta: "¿Cuál es la función principal de los middlewares en una aplicación Express?",
    opciones: [
      "Realizar acciones específicas entre el flujo de una solicitud y su respuesta, teniendo acceso a los objetos req, res y next",
      "Definir las rutas principales de la aplicación",
      "Gestionar la autenticación de usuarios en la aplicación",
      "Establecer la configuración global del servidor Express",
    ],
    respuestaCorrecta: "Realizar acciones específicas entre el flujo de una solicitud y su respuesta, teniendo acceso a los objetos req, res y next",
    categoria: "Módulo 2: L-08 Express 2",
    seccion: "08.02 Middlewares",
  },
  {
    id: 804,
    pregunta: "¿Qué ventaja ofrecen los middlewares en una aplicación Express en términos de flexibilidad?",
    opciones: [
      "Los middlewares permiten realizar acciones globales antes de llegar a rutas específicas, lo que proporciona una mayor flexibilidad en la realización de tareas a lo largo de todo el flujo de la aplicación",
      "Los middlewares restringen la ejecución de acciones a rutas específicas, lo que limita la flexibilidad de la aplicación",
      "Los middlewares no tienen ventajas en términos de flexibilidad en una aplicación Express",
      "Los middlewares solo se pueden utilizar en rutas específicas, lo que limita su capacidad de adaptación a diferentes escenarios",
    ],
    respuestaCorrecta:
      "Los middlewares permiten realizar acciones globales antes de llegar a rutas específicas, lo que proporciona una mayor flexibilidad en la realización de tareas a lo largo de todo el flujo de la aplicación",
    categoria: "Módulo 2: L-08 Express 2",
    seccion: "08.02 Middlewares",
  },
  {
    id: 805,
    pregunta: "¿Cuándo se suelen utilizar los middlewares en una aplicación Express?",
    opciones: [
      "Cuando se desea agregar funcionalidades específicas, manipular datos de solicitud o respuesta, o realizar acciones antes o después de que la solicitud llegue a su destino",
      "Únicamente al principio de la aplicación, para establecer la configuración inicial del servidor",
      "Solo en rutas específicas de la aplicación",
    ],
    respuestaCorrecta:
      "Cuando se desea agregar funcionalidades específicas, manipular datos de solicitud o respuesta, o realizar acciones antes o después de que la solicitud llegue a su destino",
    categoria: "Módulo 2: L-08 Express 2",
    seccion: "08.02 Middlewares",
  },
  {
    id: 806,
    pregunta: "¿Cómo se pueden dividir los middlewares en una aplicación Express?",
    opciones: ["En pre-built (pre-construidos) y personalizados (customizados)", "En estáticos y dinámicos", "En síncronos y asíncronos"],
    respuestaCorrecta: "En pre-built (pre-construidos) y personalizados (customizados)",
    categoria: "Módulo 2: L-08 Express 2",
    seccion: "08.02 Middlewares",
  },
  {
    id: 807,
    pregunta: "¿Cuál es la función principal de las validaciones en cualquier sistema, incluyendo bases de datos y servidores?",
    opciones: [
      "Confirmar que la información tenga el formato y estructura correctos",
      "Gestionar las solicitudes HTTP en el servidor",
      "Controlar el acceso de los usuarios a las diferentes partes de la aplicación",
      "Establecer la configuración global del servidor Express",
    ],
    respuestaCorrecta: "Confirmar que la información tenga el formato y estructura correctos",
    categoria: "Módulo 2: L-08 Express 2",
    seccion: "08.03 Validaciones",
  },
  {
    id: 808,
    pregunta: "¿Cómo se pueden implementar las validaciones en Express?",
    opciones: [
      "Creando middlewares personalizados que verifiquen los datos de entrada antes de pasarlos a la lógica principal de la aplicación",
      "Incorporando validaciones directamente en las rutas de Express sin necesidad de middlewares",
      "Dejando las validaciones a cargo de la base de datos sin intervenir en el servidor Express",
    ],
    respuestaCorrecta: "Creando middlewares personalizados que verifiquen los datos de entrada antes de pasarlos a la lógica principal de la aplicación",
    categoria: "Módulo 2: L-08 Express 2",
    seccion: "08.03 Validaciones",
  },
];
