
# Instruções

Aqui você encontrará as instruções para desenvolvimento da CP2 de WebDev.

## Passo 1: Clonar o repositório

1. Acesse o link do **GitHub Classroom** enviado em sala de aula.
2. Clique em **"Accept assignment"**.
3. Clique no botão **"Code"** e copie o link do repositório.
4. No seu computador, abra o terminal e digite:

```bash
git clone <link-do-seu-repositorio>
```

Substitua `<link-do-seu-repositorio>` pelo link copiado.

---
## Passo 2: Escrever o código dos exercícios

Os arquivos dos exercícios estão na pasta:

```
/src
```

Cada arquivo corresponde a um exercício (exemplo: `calcular.js`, `saudacao.js`). O enunciado foi inserido como comentário em cada arquivo.

Edite os arquivos dentro dessa pasta e salve.

---

## 📤 Passo 3: Enviar o trabalho

Depois de finalizar:

1. Salve todos os arquivos.
2. Adicione as alterações na staging area:

```bash
git add .
```

3. Faça o commit:

```bash
git commit -m "Entrega dos exercícios"
```

4. Envie para o GitHub:

```bash
git push
```

✅ Pronto! Seu trabalho foi enviado com sucesso.

---

# Caso queira rodar os testes durante a CP

## Passo 1: Instalar as dependências

Dentro da pasta do projeto, execute:

```bash
npm install
```

Isso vai instalar o **Jest** (ferramenta de testes).

⚠️ **Você precisa ter o Node.js e o npm instalados na máquina.**

---

## Passo 2: Rodar os testes

### Rodar **todos os testes de uma vez:**

No terminal, digite:

```bash
npm test
```

Isso irá verificar **todos os exercícios de uma vez automaticamente**.

---

### Rodar o teste de apenas **um arquivo específico** (por exemplo, `calcular.js`):

Use o comando:

```bash
npx jest calcular.test.js
```

Substitua `calcular.test.js` pelo nome do arquivo de teste que você quer rodar.

---


## Dicas importantes:

- ✅ Rode os testes sempre que fizer uma alteração para validar se está correto.
- ✅ Só será aceito o envio via **GitHub Classroom**.
- ✅ Confira no GitHub se o último commit foi enviado corretamente antes de dar o push.
