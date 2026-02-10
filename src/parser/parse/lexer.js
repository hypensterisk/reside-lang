import moo from 'moo'

const lexer = moo.compile({
  NUMBER: /(?:0|[1-9][0-9]*)(?:\.[0-9]*[1-9])?/
})

export default lexer