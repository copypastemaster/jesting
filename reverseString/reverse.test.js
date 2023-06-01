const reverse = require('./reverse.js');

test('Should return a reverse string', () => {
  expect(reverse('Enoch')).toMatch('hconE');
  expect(reverse('enoch')).toMatch('hcone');
  expect(reverse('boss')).toMatch('ssob');
});
