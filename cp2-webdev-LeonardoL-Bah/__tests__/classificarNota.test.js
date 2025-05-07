const { classificarNota } = require('../src/classificarNota');

test('aprovado', () => {
  expect(classificarNota(7)).toBe('Aprovado');
});

test('reprovado', () => {
  expect(classificarNota(5)).toBe('Reprovado');
});

test('nota inválida: número acima de 10', () => {
  expect(classificarNota(11)).toBe('Nota inválida');
});

test('nota inválida: número abaixo de 0', () => {
  expect(classificarNota(-1)).toBe('Nota inválida');
});

test('nota inválida: não numérico', () => {
  expect(classificarNota('abc')).toBe('Nota inválida');
});
