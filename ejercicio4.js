const prompt = require('prompt-sync')();

const movimientos = [
    {valor: 150000, tipo: "Ingreso"},
    {valor: -20000, tipo: "Retiro"},
    {valor: 35000, tipo: "Ingreso"},
    {valor: 0, tipo: "Ingreso"},
    {valor: 70000, tipo: "Ingreso"},
    {valor: -100000, tipo: "Pago comercio"},
    {valor: 15000, tipo: "Ingreso"},
    {valor: 0, tipo: "Ingreso"}];

for (let i = 0; i < movimientos.length; i++) {
    if(movimientos === 0){
        continue;
    }
    if(movimientos[i].tipo === "Pago comercio"){
        console.log("Pago a comercio en la posición: ", i);
        break;
    }
}    