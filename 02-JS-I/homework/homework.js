// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'hola';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 15;

// Crea una variable booleana:
const nuevoBool = false;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  var saludar = str;
  return saludar;
}

devolverString("hola")

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var resultado = x + y;
  return resultado;
}
suma(13, 15);
function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var resultadoResta = x - y;
  return resultadoResta;
}
resta(14, 5);


function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var resultadoMultiplica = x * y;
  return resultadoMultiplica;
}
multiplica(24, 5);

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var resultadoDivide = x / y;
  return resultadoDivide;
}

divide(45, 5);

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x == y ) {
    return true;
  } else return false;
}
sonIguales("jhon","jhon");

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:

if (str1.length === str2.length) {
  return true
} else {
  return false
}
}

tienenMismaLongitud("hi", "there");

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num < 90) {
    return true;
  }else return false;
}

menosQueNoventa(45);

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num > 50) {
    return true;
  }else return false;
}

mayorQueCincuenta(68);

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var resultadoResto = x % y;
  return resultadoResto;
}

obtenerResto(45, 5);

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if ((num % 2) == 0) {
    return true;
  }else return false;
}

esPar(8);

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if ((num % 2) !== 0) {
    return true;
  } else return false;
}

esImpar(7);

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var resultadoAlcuadrado = num ** 2;
  return resultadoAlcuadrado;
}

elevarAlCuadrado(5);

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  var resultadoAlcubo = num ** 3;
  return resultadoAlcubo;
}

elevarAlCubo(4);

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  var resultadoElevar = Math.pow(num, exponent);
  return resultadoElevar;
}

elevar(3, 3);

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var resultadoRedondeado = Math.round(num);
  return resultadoRedondeado;
}

redondearNumero(5.6);

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  var resultadoUp = Math.ceil(num);
  return resultadoUp;
}

redondearHaciaArriba(6.333);

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  var resultadoRandom = Math.random();
  return resultadoRandom;
}

numeroRandom(1);

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero > 0) {
    return "Es positivo";
  } else if (numero < 0){
    return "Es negativo";
  }else return false; 
}

esPositivo(0);

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  var Exclamacion = str + "!";
  return Exclamacion;
}

agregarSimboloExclamacion("hola");

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var nombreCompleto = nombre + " " + apellido;
  return nombreCompleto;
}

combinarNombres("jhon", "correa");

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var saludo = "Hola" + " " +  nombre + "!";
  return saludo;
  
}

obtenerSaludo("jhon");

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  return alto * ancho;
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  return lado * 4;
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  return (base * altura) / 2;
}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  var Dolar = 1.20;
  var cambio = euro * Dolar;
  return cambio ;
}

deEuroAdolar(120);


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  switch (letra) {
    case "a":
      return "Es vocal"
      break;
    case "e":
      return "Es vocal"
      break;
    case "i":
      return "Es vocal"
      break;
    case "o":
      return "Es vocal"
      break;
    case "u":
      return "Es vocal"
      break;
    default:
      return "Dato incorrecto"
      break;
  }

}
console.log(esVocal("a")); 


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
