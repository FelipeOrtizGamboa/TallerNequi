const prompt = require('prompt-sync')();

let opcion;

do {
  console.log("BIENVENIDO A TU APP, SELECCIONA LA LA OPERACIÓN QUE DESEAS REALIZAR")
  console.log("*******************")
  console.log("(1) Ver saldo");
  console.log("(2) Enviar dinero");
  console.log("(3) Recargar");
  console.log("(4) Salir");
  opcion = Number(prompt("Ingresa la operación a realizar: "));
  if (opcion === 1) {
    console.log("Tu saldo es: *****");
  } else if (opcion === 2) {
    console.log("Ingrese la cantidad de dinero a enviar:");
  } else if (opcion === 3) {
    console.log("Ingrese la cantidad a recargar:");
  } else if (opcion === 4) {
    console.log("GRACIAS POR USAR LA APP");
  } else {
    console.log("Opción inválida");
  }
} while (opcion !== 4);