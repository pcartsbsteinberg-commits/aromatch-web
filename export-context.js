const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();
const outputFile = path.join(projectRoot, 'CONTE_PROYECTO_AURA.md');

const ignoreDirs = ['node_modules', '.next', '.git', 'v0-source', 'dist', 'build', 'public'];
const importantFiles = [
  'package.json',
  'next.config.ts',
  'next.config.js',
  'next.config.mjs',
  'tsconfig.json',
  'tailwind.config.ts',
  'tailwind.config.js',
  'postcss.config.mjs',
  'postcss.config.js',
  'rules.md'
];

let markdown = `# Proyecto: Aura de Kant\n\n`;
markdown += `## Estructura del Proyecto (tree)\n\`\`\`text\n`;

function getTree(dir, prefix = '') {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  items.forEach((item, index) => {
    if (ignoreDirs.includes(item.name)) return;
    const isLast = index === items.length - 1;
    const pointer = isLast ? '└── ' : '├── ';
    markdown += `${prefix}${pointer}${item.name}\n`;
    if (item.isDirectory()) {
      getTree(path.join(dir, item.name), prefix + (isLast ? '    ' : '│   '));
    }
  });
}

getTree(projectRoot);
markdown += `\`\`\`\n\n`;

markdown += `## Archivos Clave\n\n`;
importantFiles.forEach(file => {
  const fullPath = path.join(projectRoot, file);
  if (fs.existsSync(fullPath)) {
    markdown += `### ${file}\n\`\`\`javascript\n${fs.readFileSync(fullPath, 'utf-8')}\n\`\`\`\n\n`;
  }
});

markdown += `## Código Fuente (src/)\n\n`;
function getSrcFiles(dir) {
  if (!fs.existsSync(dir)) return;
  const items = fs.readdirSync(dir, { withFileTypes: true });
  items.forEach(item => {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      getSrcFiles(fullPath);
    } else if (/\.(ts|tsx|js|jsx|css|md)$/.test(item.name)) {
      const relPath = path.relative(projectRoot, fullPath);
      markdown += `### ${relPath}\n\`\`\`javascript\n${fs.readFileSync(fullPath, 'utf-8')}\n\`\`\`\n\n`;
    }
  });
}

getSrcFiles(path.join(projectRoot, 'src'));

fs.writeFileSync(outputFile, markdown);
console.log(`Contexto generado en ${outputFile}`);
