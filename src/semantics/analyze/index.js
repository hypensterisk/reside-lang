import validateNumber from './validateNumber'

export default function analyze(ast) {
  switch (ast.type) {
    case 'Number': return validateNumber(ast)
  }
}