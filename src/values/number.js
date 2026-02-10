export default class Number {
  #value
  constructor(value) {
    this.#value = value
  }
  static fromString(string) {
    let value;
    if (Zero.pattern.test(string)) {
      value = Zero.fromString(string)
    } else if (Natural.pattern.test(string)) {
      value = Natural.fromString(string)
    } else if (Fraction.pattern.test(string)) {
      value = Fraction.fromString(string)
    }
    return new Number(value)
  }
}

class Zero {
  constructor() { }
  static pattern = /^0$/
  static fromString() {
    return new Zero()
  }
}

class Natural {
  #value
  constructor(value) {
    this.#value = value
  }
  static pattern = /^[1-9][0-9]*$/
  static fromString(string) {
    return new Natural(BigInt(string))
  }
}

class Fraction {
  #numerator
  #denominator
  constructor(numerator, denominator) {
    this.#numerator = numerator
    this.#denominator = denominator
  }
  static pattern = /^(?:0|[1-9][0-9]*)\.[0-9]*[1-9]$/
  static fromString(string) {
    const parts = string.split('.')
    const numerator = BigInt(parts.join(''))
    const length = parts.at(1).length
    const denominator = BigInt('1' + '0'.repeat(length))
    return new Fraction(numerator, denominator)
  }
}