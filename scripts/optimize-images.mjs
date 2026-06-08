// One-off image optimizer: resizes project screenshots to max 1200px wide
// and writes WebP versions next to them. Run with: node scripts/optimize-images.mjs
import { readdir, stat } from 'node:fs/promises'
import { join, extname, basename } from 'node:path'
import sharp from 'sharp'

const dir = new URL('../public/projects/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')

const files = (await readdir(dir)).filter((f) => /\.(png|jpe?g)$/i.test(f))

for (const file of files) {
  const src = join(dir, file)
  const out = join(dir, basename(file, extname(file)) + '.webp')
  const before = (await stat(src)).size
  await sharp(src)
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(out)
  const after = (await stat(out)).size
  console.log(
    `${file} -> ${basename(out)}  ${(before / 1e6).toFixed(2)}MB -> ${(after / 1e3).toFixed(0)}KB`,
  )
}
console.log('Done.')
