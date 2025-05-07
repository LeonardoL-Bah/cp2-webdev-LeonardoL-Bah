const { verificarPalavra } = require('../src/verificarPalavra');

test('frase curta', () => {
  expect(verificarPalavra('abc', 'a')).toBe('A frase é muito curta');
});

test('contém palavra (case insensitive)', () => {
  expect(verificarPalavra('   JavaScript   ', 'script')).toBe('A frase contém a palavra de busca');
});

test('não contém palavra', () => {
  expect(verificarPalavra('Olá mundo', 'javascript')).toBe('A frase não contém a palavra de busca');
});
