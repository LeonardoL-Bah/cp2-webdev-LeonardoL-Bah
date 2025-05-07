const { calcularIMC } = require('../src/calcularIMC');

test('abaixo do peso', () => {
  expect(calcularIMC(50, 1.8)).toBe('Abaixo do peso');
});

test('peso normal', () => {
  expect(calcularIMC(68, 1.7)).toBe('Peso normal');
});

test('sobrepeso', () => {
  expect(calcularIMC(80, 1.7)).toBe('Sobrepeso');
});

test('obesidade', () => {
  expect(calcularIMC(100, 1.7)).toBe('Obesidade');
});

test('erro: altura zero', () => {
  expect(calcularIMC(70, 0)).toBe('Erro');
});

test('erro: parâmetros inválidos', () => {
  expect(calcularIMC('abc', 1.7)).toBe('Erro');
});
