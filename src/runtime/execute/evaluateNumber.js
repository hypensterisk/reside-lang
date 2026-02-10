import values from '../../values'

export default function evaluateNumber(node) {
  const { value } = node
  return new values.Number(value)
}