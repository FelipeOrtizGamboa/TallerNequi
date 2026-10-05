const prompt = require('prompt-sync')();

const movimientos = [150000, -20000, 35000, 70000, -100000, 15000];
let total = 0;
let cantidadRetiros = 0;

for (let i = 0; i < movimientos.length; i++) {
  total += movimientos[i]; 
  if(movimientos[i] < 0){
    cantidadRetiros++;
  }
}
console.log("Saldo Total: ", total)
console.log("Cantidad de Retiros: ", cantidadRetiros)

