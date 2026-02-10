import nearley from 'nearley'
import compiledGrammar from './grammar.ne'

const grammar = nearley.Grammar.fromCompiled(compiledGrammar)

export default function parse(sourceCode) {
  const parser = new nearley.Parser(grammar)
  parser.feed(sourceCode)
  return parser.results[0]
}