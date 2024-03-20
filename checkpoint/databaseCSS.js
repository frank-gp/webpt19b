// https://chat.openai.com/c/ca7ed684-014c-4b13-8921-6b6f5e3d2312

// data_css.js

const preguntasCSS = [
  {
    id: 1,
    pregunta: "¿Qué significa CSS?",
    opciones: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    respuestaCorrecta: "Cascading Style Sheets",
  },
  {
    id: 2,
    pregunta: "¿Cuál es la propiedad CSS que se utiliza para cambiar el color del texto?",
    opciones: ["font-color", "color", "text-color", "font-style"],
    respuestaCorrecta: "color",
  },
  {
    id: 3,
    pregunta: "¿Cuál es la propiedad CSS que se utiliza para establecer el tamaño de fuente?",
    opciones: ["font-size", "text-size", "size", "font-style"],
    respuestaCorrecta: "font-size",
  },
  {
    id: 4,
    pregunta: "¿Qué propiedad CSS se utiliza para establecer el fondo de un elemento?",
    opciones: ["background-color", "background-image", "color-background", "bg-color"],
    respuestaCorrecta: "background-color",
  },
  {
    id: 5,
    pregunta: "¿Cuál es la propiedad CSS que se utiliza para centrar un elemento horizontalmente?",
    opciones: ["align", "center", "text-align", "horizontal-align"],
    respuestaCorrecta: "text-align",
  },
  {
    id: 6,
    pregunta: "¿Qué significa la sigla 'CSS'?",
    opciones: ["Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets", "Cute Style Sheets"],
    respuestaCorrecta: "Cascading Style Sheets",
  },
  {
    id: 7,
    pregunta: "¿Cuál es la propiedad CSS que se utiliza para establecer el margen izquierdo de un elemento?",
    opciones: ["margin-right", "margin-left", "margin", "padding-left"],
    respuestaCorrecta: "margin-left",
  },
  {
    id: 8,
    pregunta: "¿Qué propiedad CSS se utiliza para establecer el espacio entre letras en un texto?",
    opciones: ["letter-spacing", "word-spacing", "text-spacing", "font-spacing"],
    respuestaCorrecta: "letter-spacing",
  },
  {
    id: 9,
    pregunta: "¿Cuál es la propiedad CSS que se utiliza para ocultar un elemento visualmente?",
    opciones: ["visibility", "hidden", "display", "opacity"],
    respuestaCorrecta: "visibility",
  },
  {
    id: 10,
    pregunta: "¿Cuál es la propiedad CSS que se utiliza para establecer el estilo de las viñetas de una lista?",
    opciones: ["list-style-type", "list-type", "bullet-style", "list-style"],
    respuestaCorrecta: "list-style-type",
  },
  {
    id: 11,
    pregunta: "¿Cuál es la propiedad CSS que se utiliza para establecer el grosor del borde de un elemento?",
    opciones: ["border-thickness", "border-width", "border-style", "border"],
    respuestaCorrecta: "border-width",
  },
  {
    id: 12,
    pregunta: "¿Qué valor se utiliza en la propiedad 'display' para hacer que un elemento se comporte como una lista?",
    opciones: ["block", "inline", "inline-block", "list-item"],
    respuestaCorrecta: "list-item",
  },
  {
    id: 13,
    pregunta: "¿Cuál es la propiedad CSS que se utiliza para establecer el tamaño de un elemento en relación con el tamaño de su contenedor?",
    opciones: ["position", "top", "width", "max-width"],
    respuestaCorrecta: "width",
  },
  {
    id: 14,
    pregunta: "¿Qué propiedad CSS se utiliza para alinear elementos horizontalmente dentro de su contenedor?",
    opciones: ["vertical-align", "text-align", "align", "horizontal-align"],
    respuestaCorrecta: "text-align",
  },
  {
    id: 15,
    pregunta: "¿Cuál es la propiedad CSS que se utiliza para establecer la opacidad de un elemento?",
    opciones: ["transparency", "opacity", "visibility", "display"],
    respuestaCorrecta: "opacity",
  },
  {
    id: 16,
    pregunta: "¿Qué propiedad CSS se utiliza para cambiar el tamaño de la fuente de un elemento basado en la fuente del elemento primario?",
    opciones: ["font-size", "font-weight", "font", "font-family"],
    respuestaCorrecta: "font-size",
  },
  {
    id: 17,
    pregunta: "¿Cuál es la propiedad CSS que se utiliza para establecer el grosor, el estilo y el color del borde de un elemento en una sola declaración?",
    opciones: ["border-style", "border", "border-color", "border-width"],
    respuestaCorrecta: "border",
  },
  {
    id: 18,
    pregunta: "¿Qué propiedad CSS se utiliza para establecer el espacio alrededor de un elemento?",
    opciones: ["padding", "margin", "spacing", "border-spacing"],
    respuestaCorrecta: "padding",
  },
  {
    id: 19,
    pregunta: "¿Cuál es la propiedad CSS que se utiliza para establecer el tipo de letra de un elemento?",
    opciones: ["font-style", "font-family", "font", "typeface"],
    respuestaCorrecta: "font-family",
  },
  {
    id: 20,
    pregunta: "¿Qué propiedad CSS se utiliza para establecer el estilo del cursor en un elemento?",
    opciones: ["cursor", "pointer", "hover", "select"],
    respuestaCorrecta: "cursor",
  },
  {
    id: 21,
    pregunta: "¿Cuál es la propiedad CSS que se utiliza para establecer el color de fondo de un elemento?",
    opciones: ["background-color", "color", "background", "bg-color"],
    respuestaCorrecta: "background-color",
  },
  {
    id: 22,
    pregunta: "¿Qué valor se utiliza en la propiedad 'position' para posicionar un elemento de forma relativa a su posición normal?",
    opciones: ["fixed", "absolute", "relative", "static"],
    respuestaCorrecta: "relative",
  },
  {
    id: 23,
    pregunta: "¿Cuál es la propiedad CSS que se utiliza para establecer la alineación vertical de un elemento?",
    opciones: ["vertical-align", "text-align", "align", "horizontal-align"],
    respuestaCorrecta: "vertical-align",
  },
  {
    id: 24,
    pregunta: "¿Qué propiedad CSS se utiliza para establecer la altura de un elemento?",
    opciones: ["height", "width", "size", "tall"],
    respuestaCorrecta: "height",
  },
  {
    id: 25,
    pregunta: "¿Cuál es la propiedad CSS que se utiliza para establecer el estilo de la fuente en un elemento?",
    opciones: ["font-style", "font-variant", "font-weight", "font"],
    respuestaCorrecta: "font-style",
  },
  {
    id: 26,
    pregunta: "¿Qué propiedad CSS se utiliza para establecer el orden de apilamiento de un elemento?",
    opciones: ["stack", "z-index", "order", "layer"],
    respuestaCorrecta: "z-index",
  },
  {
    id: 27,
    pregunta: "¿Cuál es la propiedad CSS que se utiliza para establecer el tamaño mínimo de un elemento?",
    opciones: ["min-width", "width-min", "minimum-width", "width"],
    respuestaCorrecta: "min-width",
  },
  {
    id: 28,
    pregunta: "¿Qué propiedad CSS se utiliza para establecer la visibilidad de un elemento?",
    opciones: ["visible", "display", "visibility", "shown"],
    respuestaCorrecta: "visibility",
  },
  {
    id: 29,
    pregunta: "¿Cuál es la propiedad CSS que se utiliza para establecer la dirección del texto?",
    opciones: ["text-direction", "direction", "text-align", "align"],
    respuestaCorrecta: "direction",
  },
  {
    id: 30,
    pregunta: "¿Qué propiedad CSS se utiliza para establecer la transición de un elemento cuando cambia de estado?",
    opciones: ["animate", "transition", "transform", "change"],
    respuestaCorrecta: "transition",
  },
  {
    id: 31,
    pregunta: "¿Cuál es la propiedad CSS que se utiliza para establecer el espacio entre las líneas de texto?",
    opciones: ["line-spacing", "line-height", "text-spacing", "spacing"],
    respuestaCorrecta: "line-height",
  },
  {
    id: 32,
    pregunta: "¿Qué propiedad CSS se utiliza para establecer la opacidad de un fondo de elemento?",
    opciones: ["background-opacity", "opacity", "background-color", "transparency"],
    respuestaCorrecta: "opacity",
  },
  {
    id: 33,
    pregunta: "¿Cuál es la propiedad CSS que se utiliza para establecer el estilo del borde de un elemento?",
    opciones: ["border-style", "border-color", "border", "outline"],
    respuestaCorrecta: "border-style",
  },
  {
    id: 34,
    pregunta: "¿Qué propiedad CSS se utiliza para establecer la imagen de fondo de un elemento?",
    opciones: ["background-image", "image", "background-url", "bg-image"],
    respuestaCorrecta: "background-image",
  },
  {
    id: 35,
    pregunta: "¿Cuál es la propiedad CSS que se utiliza para establecer el ancho máximo de un elemento?",
    opciones: ["max-size", "max-width", "maximum-width", "width-max"],
    respuestaCorrecta: "max-width",
  },
  {
    id: 36,
    pregunta: "¿Qué propiedad CSS se utiliza para establecer el estilo de la línea bajo un texto?",
    opciones: ["text-line", "text-decoration", "underline", "line-decoration"],
    respuestaCorrecta: "text-decoration",
  },
  {
    id: 37,
    pregunta: "¿Cuál es la propiedad CSS que se utiliza para establecer el margen entre los bordes superior e inferior de un elemento?",
    opciones: ["margin-top", "margin-bottom", "margin", "spacing"],
    respuestaCorrecta: "margin",
  },
  {
    id: 38,
    pregunta: "¿Qué propiedad CSS se utiliza para establecer el estilo de fuente de un elemento cuando la fuente especificada no está disponible?",
    opciones: ["fallback-font", "font-style", "font-family", "font-default"],
    respuestaCorrecta: "fallback-font",
  },
  {
    id: 39,
    pregunta: "¿Cuál es la propiedad CSS que se utiliza para establecer la separación entre las celdas de una tabla?",
    opciones: ["table-cell-spacing", "cell-spacing", "table-spacing", "border-spacing"],
    respuestaCorrecta: "border-spacing",
  },
  {
    id: 40,
    pregunta: "¿Qué propiedad CSS se utiliza para establecer la orientación del texto dentro de un elemento?",
    opciones: ["text-orientation", "orientation", "text-align", "writing-mode"],
    respuestaCorrecta: "writing-mode",
  },
  {
    id: 41,
    pregunta: "¿Cuál es la propiedad CSS que se utiliza para establecer la distancia desde el borde de un elemento hasta el borde de su contenedor más cercano?",
    opciones: ["border-distance", "distance", "margin", "padding"],
    respuestaCorrecta: "margin",
  },
  {
    id: 42,
    pregunta: "¿Qué propiedad CSS se utiliza para establecer el ancho del borde del elemento?",
    opciones: ["border-thickness", "border-width", "border-style", "border"],
    respuestaCorrecta: "border-width",
  },
  {
    id: 43,
    pregunta: "¿Cuál es la propiedad CSS que se utiliza para establecer el radio de esquina de un elemento?",
    opciones: ["corner-radius", "border-radius", "edge-radius", "corner-style"],
    respuestaCorrecta: "border-radius",
  },
  {
    id: 44,
    pregunta: "¿Qué propiedad CSS se utiliza para establecer el color del texto subrayado en un elemento en estado de enlace no visitado?",
    opciones: ["link-underline-color", "underline-color", "text-decoration-color", "link-color"],
    respuestaCorrecta: "text-decoration-color",
  },
  {
    id: 45,
    pregunta: "¿Cuál es la propiedad CSS que se utiliza para establecer la posición de un elemento en relación con el borde superior de su contenedor?",
    opciones: ["top", "bottom", "position", "vertical-align"],
    respuestaCorrecta: "top",
  },
  {
    id: 46,
    pregunta: "¿Qué propiedad CSS se utiliza para establecer el estilo del borde a lo largo de la parte superior del elemento?",
    opciones: ["border-top", "border-style", "border", "top-border"],
    respuestaCorrecta: "border-top",
  },
  {
    id: 47,
    pregunta: "¿Cuál es la propiedad CSS que se utiliza para establecer el tamaño mínimo de un elemento en la dirección de bloque?",
    opciones: ["min-height", "minimum-height", "height", "block-size"],
    respuestaCorrecta: "min-height",
  },
  {
    id: 48,
    pregunta: "¿Qué propiedad CSS se utiliza para establecer el tamaño mínimo de un elemento en la dirección de la línea?",
    opciones: ["line-size", "min-width", "minimum-width", "width"],
    respuestaCorrecta: "min-width",
  },
  {
    id: 49,
    pregunta: "¿Cuál es la propiedad CSS que se utiliza para establecer la posición de un fondo de un elemento?",
    opciones: ["background-position", "position", "background", "bg-position"],
    respuestaCorrecta: "background-position",
  },
  {
    id: 50,
    pregunta: "¿Qué propiedad CSS se utiliza para establecer la opacidad de un borde de un elemento?",
    opciones: ["border-opacity", "opacity", "border-color", "border"],
    respuestaCorrecta: "border-opacity",
  },
];

module.exports = preguntasCSS;