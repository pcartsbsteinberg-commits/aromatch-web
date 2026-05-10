import ffmpeg from 'fluent-ffmpeg';
import ffmpegStatic from 'ffmpeg-static';
import fs from 'fs';

const input = 'public/videos/fondoaura.mp4';
const output = 'public/videos/fondoaura_optimized.mp4';

ffmpeg.setFfmpegPath(ffmpegStatic);

console.log('Starting video optimization...');

ffmpeg(input)
  .outputOptions([
    '-vf', 'scale=-2:720', // Scale to 720p height, auto width
    '-an',                 // Remove audio
    '-c:v', 'libx264',     // Use H.264
    '-crf', '26',          // Constant Rate Factor 26 for good compression
    '-preset', 'slower',   // Slower preset for better compression ratio at same CRF
  ])
  .on('end', () => {
    console.log('Video optimization finished successfully.');
    fs.renameSync(output, input); // Overwrite original
    console.log('Original video overwritten.');
    
    // Check size
    const stats = fs.statSync(input);
    const inMB = stats.size / (1024 * 1024);
    console.log(`New size: ${inMB.toFixed(2)} MB`);
  })
  .on('error', (err) => {
    console.error('Error optimizing video:', err);
  })
  .save(output);
