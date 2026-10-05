const usuarios = [
  { nombre: "Ana", movimientos: [50000, -10000, -5000] },
  { nombre: "Luis", movimientos: [-20000, 8000] },
  { nombre: "Sara", movimientos: [30000, -7000, -3000] }
];

for (let i = 0; i < usuarios.length; i++) {
  let totalUsuario = 0;

  for (let j = 0; j < usuarios[i].movimientos.length; j++) {
    totalUsuario += usuarios[i].movimientos[j];
  }

  console.log(usuarios[i].nombre, "tiene un total de movimientos de:", totalUsuario);
}