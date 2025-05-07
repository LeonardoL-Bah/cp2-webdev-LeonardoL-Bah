const { saudacao } = require('../src/saudacao');

test('visitante com null', () => {
  expect(saudacao(null, true)).toBe('Olá, Visitante!');
});

test('visitante com undefined', () => {
  expect(saudacao(undefined, true)).toBe('Olá, Visitante!');
});

test('nome vazio', () => {
  expect(saudacao('', true)).toBe('Olá, !');
});

test('nome fornecido', () => {
  expect(saudacao('Maria', true)).toBe('Olá, Maria!');
});

test('não logado', () => {
  expect(saudacao('João', false)).toBe(false);
});
