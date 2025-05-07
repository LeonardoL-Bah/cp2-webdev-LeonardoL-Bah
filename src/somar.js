// ## 8. Função de Soma com Erros **(1 ponto)**

// **Enunciado:**
// A função abaixo tenta somar dois números, mas está sem nenhuma validação. Encontre e corrija os problemas para que a função funcione corretamente. Considere que o **parâmetro b pode ser opcional** e que, se não for fornecido, **deve ser considerado como 0**. Além disso, **a função não deve retornar valores de tipos inesperados (como NaN ou undefined)**, e deve tratar casos em que os **parâmetros não são números**, retornando a mensagem "Parâmetro inválido".

function somar(a, b) {
  if (typeof(a) !== Number || typeof(b) !== Number || typeof(a,b) === null){
    return "Parâmetro Inválido"
  }
  let resultado = a + b;
  return resultado;
}

  
  // Testando a função
  console.log(somar(5));         // Esperado: 5
  console.log(somar(5, "3"));    // Esperado: 8
  console.log(somar("10", 10));  // Esperado: 20
  console.log(somar("abc", 5));  // Esperado: "Parâmetro inválido"
  console.log(somar(null, 5));   // Esperado: "Parâmetro inválido"

  module.exports = { somar };
