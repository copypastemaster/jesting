const calc = require('./calc.js');

let calcu = calc();

test('All functionalities should work.', () => {
  expect(calcu.add(2, 3)).toBe(5);
  expect(calcu.subtract(2, 3)).toBe(-1);
  expect(calcu.divide(2, 3)).toBe(0.6666666666666666);
  expect(calcu.multiply(2, 3)).toBe(6);
});
