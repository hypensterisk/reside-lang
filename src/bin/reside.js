#!/usr/bin/env node
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { cwd } from 'node:process'

import { program } from 'commander'

import { parse } from '../parser'

program.argument('<source>').action(async (inputPath) => {
  const sourcePath = resolve(cwd(), inputPath)
  const sourceCode = await readFile(sourcePath, { encoding: 'utf8' })
  const ast = parse(sourceCode)
}).parse()