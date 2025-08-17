import fs from "fs";

let outputMessage: string = '';
const base = 5;

const headerMessage = `
=========================
Tabla del ${base}
=========================\n
`




for (let i = 1; i < 11; i++) {
  outputMessage += `${i} x ${base} = ${i * base}\n`;
}

outputMessage = headerMessage + outputMessage;
console.log(outputMessage);

const outputPath = `outputs`;

// grabar en el archivo de salida
// path: outputs/tabla-5.txt
fs.mkdirSync(outputPath, { recursive: true });
const outputFilePath: string = `${outputPath}/tabla-${base}.txt`;

fs.writeFileSync(outputFilePath, outputMessage);
