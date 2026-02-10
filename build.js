import { readFile } from 'node:fs/promises'

import { build } from 'esbuild'
import nearley from 'nearley'
import compile from 'nearley/lib/compile.js'
import generate from 'nearley/lib/generate.js'
import bootstrapped from 'nearley/lib/nearley-language-bootstrapped.js'

build({
  entryPoints: ['src/bin/reside.js'],
  bundle: true,
  outfile: 'bin/reside.cjs',
  plugins: [nearleyPlugin()],
  format: 'cjs',
  platform: 'node',
})

function nearleyPlugin() {
  return {
    name: 'nearley',
    setup(build) {
      build.onLoad({ filter: /\.ne$/ }, async ({ path }) => {
        const grammarCode = await readFile(path, { encoding: 'utf8' })
        return {
          contents: compileGrammar(grammarCode),
          loader: 'js'
        }
      })
    }
  }
}

function compileGrammar(grammarCode) {
  const grammarParser = new nearley.Parser(bootstrapped)
  grammarParser.feed(grammarCode)
  const grammarAst = grammarParser.results[0]
  const grammarInfoObject = compile(grammarAst, {})
  const grammarJs = generate(grammarInfoObject, 'grammar')
  return grammarJs
}