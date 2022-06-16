#!/usr/bin/env node
import remove from './index.js'
const chunks = []
process.stdin
  .on('data', chunk => { chunks.push(chunk) })
  .once('error', error => {
    process.stderr.write(error.toString())
    process.exit(1)
  })
  .once('end', () => {
    const buffer = Buffer.concat(chunks)
    process.stdout.write(remove(buffer.toString()))
  })
