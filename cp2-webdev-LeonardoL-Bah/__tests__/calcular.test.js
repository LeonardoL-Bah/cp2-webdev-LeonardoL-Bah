const { calcular } = require('../src/calcular');

test('soma dois números', () => {
  expect(calcular(2, 3, '+')).toBe(5);
});

test('subtrai dois números', () => {
  expect(calcular(5, 2, '-')).toBe(3);
});

test('multiplica dois números', () => {
  expect(calcular(4, 3, '*')).toBe(12);
});

test('divide dois números', () => {
  expect(calcular(10, 2, '/')).toBe(5);
});

test('erro: divisão por zero', () => {
  expect(calcular(10, 0, '/')).toBe('Erro: divisão por zero');
});

test('erro: operação inválida', () => {
  expect(calcular(10, 2, '%')).toBe('Erro: operação inválida');
});

test('erro: parâmetros inválidos', () => {
  expect(calcular('a', 2, '+')).toBe('Erro: parâmetros inválidos');
});