export class FizzBuzz {
  static generate (minNumber, maxNumber) {
    return this.evaluateNumbers(minNumber, maxNumber);
  }

  static evaluateNumbers (minNumber, maxNumber) {
    let result = ''
    while (minNumber <= maxNumber) {
      result += this.evaluateNumber(minNumber++)
    }
    return result
  }
  static evaluateNumber (number) {
    if (number % 15 === 0) return 'FizzBuzz'
    if (number % 3 === 0) return 'Fizz'
    if (number % 5 === 0) return 'Buzz'
    return number.toString()
  }
}

