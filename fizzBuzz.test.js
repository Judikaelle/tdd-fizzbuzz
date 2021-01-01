const { FizzBuzz } = require('./fizzBuzz')

describe('fizzBuzz', () => {

  it('should return 1 if number is 1', () => {
    expect('1').toEqual(FizzBuzz.generate(1, 1))
  })

  it('should return 2 if number is 2', () => {
    expect('2').toEqual(FizzBuzz.generate(2, 2))
  })
  it('should return "Fizz" if number is 3', () => {
    expect('Fizz').toEqual(FizzBuzz.generate(3, 3))
  })

  it('should return "Fizz" if number is 6', () => {
    expect('Fizz').toEqual(FizzBuzz.generate(6, 6))
  })

  it('should return "Buzz" if number is 5', () => {
    expect('Buzz').toEqual(FizzBuzz.generate(5, 5))
  })
  it('should return "Buzz" if number is 10', () => {
    expect('Buzz').toEqual(FizzBuzz.generate(10, 10))
  })
  it('should return "FizzBuzz" if number is 15', () => {
    expect('FizzBuzz').toEqual(FizzBuzz.generate(15, 15))
  })

  it('should return "FizzBuzz" if number is 30', () => {
    expect('FizzBuzz').toEqual(FizzBuzz.generate(30, 30))
  })

  it('should return "12" if number are 1 and 2', () => {
    expect('12').toEqual(FizzBuzz.generate(1, 2))
  })

  it('should return "12Fizz" if number are 1 to 3', () => {
    expect('12Fizz').toEqual(FizzBuzz.generate(1, 3))
  })

  it('should return "12Fizz4Buzz" if number are 1 to 5', () => {
    expect('12Fizz4Buzz').toEqual(FizzBuzz.generate(1, 5))
  })

  it('should return "12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz" if number are 1 to 15', () => {
    expect('12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz').toEqual(FizzBuzz.generate(1, 15))
  })
})
