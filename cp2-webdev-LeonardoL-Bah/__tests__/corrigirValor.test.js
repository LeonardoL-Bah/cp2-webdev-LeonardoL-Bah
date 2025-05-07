const { corrigirValor } = require('../src/corrigirValor');

test('valor válido string número', () => {
  expect(corrigirValor('42')).toBe(42);
});

test('valor válido número', () => {
  expect(corrigirValor(42)).toBe(42);
});

test('valor inválido string texto', () => {
  expect(corrigirValor('abc')).toBe('Valor inválido');
});
