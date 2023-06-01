const sumTest = require('./script.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sumTest(2, 2)).toBe(4);
});
