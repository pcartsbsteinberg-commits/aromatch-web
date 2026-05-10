const fs = require('fs');
const path = require('path');

const url = process.argv[2];
const outputFile = path.join(process.cwd(), 'CONTE_PROYECTO_AURA.md');

let content = fs.readFileSync(outputFile, 'utf-8');
const headerText = `# Proyecto: Aura de Kant\n\n**Producción:** [${url}](${url})\n\n`;

if (content.startsWith('# Proyecto: Aura de Kant')) {
  content = content.replace('# Proyecto: Aura de Kant\n\n', headerText);
} else {
  content = headerText + content;
}

fs.writeFileSync(outputFile, content);
console.log('Added URL to markdown.');
