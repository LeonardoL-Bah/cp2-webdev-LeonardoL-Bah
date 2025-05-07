const { somar } = require('../src/somar');

test('soma com um parâmetro', () => {
  expect(somar(5)).toBe(5);
});

test('soma número e string número', () => {
  expect(somar(5, '3')).toBe(8);
});

test('soma string número e número', () => {
  expect(somar('10', 10)).toBe(20);
});

test('parâmetro inválido - a não é número', () => {
  expect(somar('abc', 5)).toBe('Parâmetro inválido');
});

test('parâmetro inválido - b não é número', () => {
  expect(somar(10, 'def')).toBe('Parâmetro inválido');
});

test('parâmetro inválido - ambos inválidos', () => {
  expect(somar('x', 'y')).toBe('Parâmetro inválido');
});
