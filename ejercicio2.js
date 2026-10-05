const prompt = require('prompt-sync')();

const pinCorrecto = 6645;
let pin = Number(prompt("Ingresa tu PIN: "));
let intento = 0;

while(pin!=pinCorrecto){
    pin = Number(prompt("El PIN es incorrecto, ingresa tu PIN: "));
    intento ++
}

console.log("Bienvenido a la app")