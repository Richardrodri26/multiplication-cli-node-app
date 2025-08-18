import fs from "fs";

import { yarg } from './config/plugins/args.plugin';


const { b: base, l: limit, s: showTable } = yarg

let outputMessage: string = '';

const headerMessage = `
=========================
Tabla del ${base}
=========================\n
`

for (let i = 1; i < (limit ?? 11); i++) {
  outputMessage += `${i} x ${base} = ${i * base}\n`;
}
outputMessage = headerMessage + outputMessage;
if (showTable) {
  console.log(outputMessage);
}

const outputPath = `outputs`;

// grabar en el archivo de salida
// path: outputs/tabla-5.txt
fs.mkdirSync(outputPath, { recursive: true });
const outputFilePath: string = `${outputPath}/tabla-${base}.txt`;

fs.writeFileSync(outputFilePath, outputMessage);

console.log('Archivo de salida creado');
