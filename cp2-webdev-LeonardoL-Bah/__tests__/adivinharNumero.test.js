const { adivinharNumero } = require('../src/adivinharNumero');

test('acertou o número', () => {
  jest.spyOn(Math, 'random').mockReturnValue(0.4); // exemplo: se max=10, gera 4
  expect(adivinharNumero(10, 4)).toBe('Acertou!');
  Math.random.mockRestore();
});

test('errou o número', () => {
  jest.spyOn(Math, 'random').mockReturnValue(0.7); // exemplo: se max=10, gera 7
  expect(adivinharNumero(10, 3)).toBe('Errou! Tente novamente!');
  Math.random.mockRestore();
});
