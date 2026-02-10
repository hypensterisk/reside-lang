import evaluateNumber from './evaluateNumber'

export default function execute(node) {
  switch (node.type) {
    case 'Number': return evaluateNumber(node)
  }
}