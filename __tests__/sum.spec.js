const {sum} = require('../src/utils/sum');

test('sum of two number', () => {
  expect(sum(2, 2)).toBe(4);
  expect(sum(2, 9)).toBe(11);
  expect(sum(6, 3)).toBe(9);
  expect(sum(2, 42)).toBe(44);
  expect(sum(2, 87)).toBe(89);
});
