
import { scoreChecker } from './Index'


describe('The best score', () => {
  it('should return a top score response if the value is 10 out of 10, for example', () => {
    expect(scoreChecker(10, 10)).toBe("You scored 10 - That's amazing, you got them all correct");
  })
})

describe('The mid score', () => {
  it('should return a mid score response if the value is 5 out of 10, for example', () => {
    expect(scoreChecker(5, 10)).toBe("You scored 5 - A fair response, well done");
  })
})

describe('The low score', () => {
  it('should return a low score response if the value is 1 out of 10, for example', () => {
    expect(scoreChecker(1, 10)).toBe("You scored 1 - You could of done better there, why not try again.");
  })
})

describe('error', () => {
  it('It should throw an error message if the score is over the amount of questions', () => {
    expect(scoreChecker(100, 10)).toBe("Sorry, somthing went wrong");
  })
})

describe('null values', () => {
  it('Should show a missing data message if one of the past values are missing', () => {
    expect(scoreChecker(null, null)).toBe("Sorry we are missing some of your data");
  })
})


