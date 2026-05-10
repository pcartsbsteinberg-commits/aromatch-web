import sharp from 'sharp';
import fs from 'fs';

async function processImage() {
  const inputPath = 'public/perfumes/decant-original.png';
  const outputPath = 'public/perfumes/decant-showcase.webp';

  console.log(`Loading image from ${inputPath}`);

  if (!fs.existsSync(inputPath)) {
    console.error(`File not found: ${inputPath}`);
    process.exit(1);
  }

  // Use sharp to read pixel data and remove the light grey/white background
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  console.log(`Image loaded: ${info.width}x${info.height}`);

  // Loop through pixels and remove pixels that are consistently light grey
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // Grey threshold (light grey background is around 220-240 RGB)
    // We keep darker colors (black atomizer, gold pattern) intact.
    if (r > 200 && g > 200 && b > 200 && Math.abs(r-g) < 20 && Math.abs(g-b) < 20) {
      data[i + 3] = 0; // Make transparent
    }
  }

  console.log('Processing complete, saving as WebP...');

  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .trim()
    .webp({ quality: 80, alphaQuality: 100 })
    .toFile(outputPath);

  console.log(`Saved optimized asset to ${outputPath}`);
}

processImage().catch(console.error);
