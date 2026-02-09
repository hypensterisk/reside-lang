#!/usr/bin/env node
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { cwd, exit } from 'node:process'

import { program } from 'commander'

program.argument('<source>').action(async (inputPath) => {
  const sourcePath = resolve(cwd(), inputPath)
  const sourceCode = await readFile(sourcePath, { encoding: 'utf8' })
}).parse()