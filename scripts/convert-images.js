import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const srcDir = path.resolve(process.cwd(), 'public');
const exts = ['.png', '.jpg', '.jpeg'];

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const res = path.resolve(dir, e.name);
    if (e.isDirectory()) await walk(res);
    else {
      const ext = path.extname(e.name).toLowerCase();
      if (exts.includes(ext)) await convertImage(res);
    }
  }
}

async function convertImage(file) {
  try {
    const dir = path.dirname(file);
    const base = path.basename(file, path.extname(file));

    const webpOut = path.join(dir, `${base}.webp`);
    const avifOut = path.join(dir, `${base}.avif`);

    // Skip if outputs already exist and are newer
    const statIn = await fs.stat(file);
    let skipWebp = false;
    let skipAvif = false;
    try {
      const statWebp = await fs.stat(webpOut);
      if (statWebp.mtimeMs >= statIn.mtimeMs) skipWebp = true;
    } catch {}
    try {
      const statAvif = await fs.stat(avifOut);
      if (statAvif.mtimeMs >= statIn.mtimeMs) skipAvif = true;
    } catch {}

    if (!skipWebp) {
      await sharp(file).webp({ quality: 80 }).toFile(webpOut);
      console.log('Created', webpOut);
    }
    if (!skipAvif) {
      await sharp(file).avif({ quality: 50 }).toFile(avifOut);
      console.log('Created', avifOut);
    }
  } catch (err) {
    console.error('Failed to convert', file, err.message);
  }
}

walk(srcDir).then(() => console.log('Done')).catch((e) => console.error(e));
