// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function calcular(n1, n2, op) {
  // TODO: implementar função//
  if (op === "+"){
    let resultado = "n1" + "n2";
  }
  if (op === "-") {
    let resultado = "n1" - "n2";
  }
  if (op === "*") {
    let resultado = "n1" * "n2";
  }
  if (op === "/") {
    let resultado = "n1" / "n2";
  }
  if (op !== "+", "-", "/", "*"){
    return "Erro: Operador Inválido";
  }
  if (typeof(n1) !== Number && typeof(n2) !== Number){
    return "Erro:Parâmetros Invalidos";
  }
  if(op === "/" && n1 === 0 && n2 === 0){
    return "Erro:Operação Inválida";
  }
  return resultado;
}


//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };