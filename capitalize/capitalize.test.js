const capitalize = require('./capitalize.js');

test('First letter should be capitalize', () => {
  expect(capitalize('enoch')).toMatch('Enoch');
  expect(capitalize('kiko')).toMatch('Kiko');
  expect(capitalize('nevermore')).toMatch('Nevermore');
});
