// ## Saudação Personalizada **(2 pontos)**

// **Enunciado:**

// A função abaixo tenta retornar uma saudação personalizada para o usuário. O nome do usuário pode ser fornecido como parâmetro. Se o nome não for fornecido ou for `null` ou `undefined`, a saudação deve ser feita com "Visitante".

// Além disso, a saudação só deve ser exibida se o usuário estiver logado (`isLogged` for `true`). Se não estiver logado, a função não deve retornar nada.

// A função tem erros e comportamentos inesperados. Encontre e corrija os problemas usando **short-circuit evaluation** (avaliação de curto-circuito com `&&` ou `||`) e **nullish coalescing (`??`)**.

function saudacao(nome, isLogged) {
  if (typeof(nome) === null || undefined && isLogged === False){
    return "Olá Visitante";
  }
  if (nome === nome && isLogged === True){
    return "Olá" + nome
  }
}

// Testando a função
console.log(saudacao(null, true)); // Esperado: "Olá, Visitante!"
console.log(saudacao(undefined, true)); // Esperado: "Olá, Visitante!"
console.log(saudacao("", true)); // Esperado: "Olá, !"
console.log(saudacao("Maria", true)); // Esperado: "Olá, Maria!"
console.log(saudacao("João", false)); // Esperado: undefined


//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { saudacao };