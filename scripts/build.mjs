import fs from 'node:fs/promises'
import path from 'node:path'
import { spawn } from 'node:child_process'

const root = path.resolve(import.meta.dirname, '..')
const manifest = JSON.parse(await fs.readFile(path.join(root, 'manifest.json'), 'utf8'))
const output = path.join(root, 'dist', `sound-effects-${manifest.version}.cnrp`)
const cli = path.join(root, 'node_modules', '@cyrene2008', 'cyrene-name-roller', 'bin', 'cnrp.mjs')

await new Promise((resolve, reject) => {
  const child = spawn(process.execPath, [cli, 'pack', root, '--out', output], { stdio: 'inherit', shell: false })
  child.on('error', reject)
  child.on('exit', code => code === 0 ? resolve() : reject(new Error(`cnrp exited with ${code}`)))
})
