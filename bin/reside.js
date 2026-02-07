#!/usr/bin/env node
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { cwd, exit } from 'node:process'

import { program } from 'commander'

program.argument('<source>').action(async (inputPath) => {
  try {
    const sourcePath = resolve(cwd(), inputPath)
    const sourceCode = await readFile(sourcePath, { encoding: 'utf8' })
  } catch (error) {
    if (error?.code === 'ENOENT') {
      console.error(`Error: Cannot find source '${error.path}'`)
      exit(1)
    } else throw error
  }
}).parse()