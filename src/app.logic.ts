import { mkdirSync, writeFileSync } from "fs";

import { yarg } from "./plugins/args.plugin";

const { b: base, l: limit, s: showTable } = yarg;
let outputMessage = "";

for (let i = 1; i <= limit; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}

if (showTable) {
  console.log("================================");
  console.log(`Tabla del ${base}`);
  console.log("================================");
  console.log(outputMessage);
}

// Escribiendo un archivo de texto con los resultados
const outputPath = "output";

mkdirSync(outputPath, { recursive: true });
writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log('File created!')
