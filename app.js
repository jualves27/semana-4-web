// BLOCO 1 – ARRAYS E MÉTODOS (map, filter, reduce, forEach)

console.log("--- BLOCO 1 ---");

// 1. Array 'nomes', forEach e map
const nomes = ["Ana", "Carlos", "Beatriz"]; //

// forEach para imprimir "Olá, NOME!"
nomes.forEach(nome => console.log(`Olá, ${nome}!`)); //

// map para criar novo array com nomes em maiúsculas
const nomesMaiusculas = nomes.map(nome => nome.toUpperCase()); //

// 2. Array 'precos', filter (> 20) e reduce (soma)
const precos = [10, 25, 40, 5, 60]; //

const precosAcimaDe20 = precos.filter(preco => preco > 20); //
console.log("Preços acima de 20:", precosAcimaDe20);

const somaPrecos = precos.reduce((total, preco) => total + preco, 0); //
console.log("Soma de todos os preços:", somaPrecos);

// 3. Array de objetos 'produtos'
const produtos = [
  { nome: "Caderno", preco: 15 }, //
  { nome: "Mochila", preco: 120 },
  { nome: "Caneta", preco: 5 },
  { nome: "Livro", preco: 45 }
];

// map para extrair os nomes
const nomesProdutos = produtos.map(prod => prod.nome); //
console.log("Nomes dos produtos:", nomesProdutos);

// filter para produtos com preço menor que 50
const produtosBaratos = produtos.filter(prod => prod.preco < 50); //
console.log("Produtos com preço < 50:", produtosBaratos);

// reduce para somar todos os preços
const totalProdutos = produtos.reduce((total, prod) => total + prod.preco, 0); //
console.log("Soma total dos produtos:", totalProdutos);

// forEach para imprimir "Nome: R$ preco"
produtos.forEach(prod => console.log(`${prod.nome}: R$ ${prod.preco}`)); //


// BLOCO 2 – MANIPULAÇÃO DO DOM


console.log("\n--- BLOCO 2 ---");

const lista = document.getElementById("lista");

// 1. Criação de <li> com createElement ("Terceiro item") e adição à #lista com append
const novoLi = document.createElement("li"); //
novoLi.textContent = "Terceiro item"; //
lista.append(novoLi); //

// 2. classList.add("destaque") e classList.contains("destaque")
novoLi.classList.add("destaque"); //
console.log("Possui a classe 'destaque'?:", novoLi.classList.contains("destaque")); //

// 3. Array 'tarefas', forEach, classe 'feito' no primeiro item e quantidade total
const tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"]; //

tarefas.forEach(tarefaTexto => {
  const li = document.createElement("li"); //
  li.textContent = tarefaTexto;
  lista.append(li);
});

// Aplicação da classe 'feito' ao primeiro <li> da lista
const primeiroLi = lista.querySelector("li");
if (primeiroLi) {
  primeiroLi.classList.add("feito"); //
}

// Impressão da quantidade total de itens da lista
const totalItens = document.querySelectorAll("li").length; //
console.log("Quantidade total de itens na lista:", totalItens);



// BLOCO 3 – EVENTOS E EVENT DELEGATION
/
console.log("\n--- BLOCO 3 ---");

const botao = document.getElementById("botao");
const campoNome = document.getElementById("nome");
const formulario = document.getElementById("formulario");
const campoTarefa = document.getElementById("tarefa");

// 1. Listener 'click' ao #botao
botao.addEventListener("click", () => {
  console.log("Clicou!"); //
});

// 2. Listener 'mouseover' ao #botao
botao.addEventListener("mouseover", () => {
  botao.textContent = "Pode clicar!"; //
});

// 3. Listener 'keyup' ao campo #nome
campoNome.addEventListener("keyup", (e) => {
  console.log("Valor atual do nome:", e.target.value); //
});

// 4. Event Delegation na #lista
// Adiciona 3 <li> iniciais para teste da delegação
["Item A", "Item B", "Item C"].forEach(texto => {
  const li = document.createElement("li");
  li.textContent = texto; //
  lista.append(li);
});

// Listener ÚNICO de click na #lista
lista.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") { //
    e.target.classList.toggle("feito"); // Alterna a classe 'feito'
    console.log("Item clicado:", e.target.textContent); // Imprime o texto
  }
});

// Teste da delegação com novo <li> criado dinamicamente
const liDinamico = document.createElement("li");
liDinamico.textContent = "Item Dinâmico (criado via JS)"; //
lista.append(liDinamico);

// 5. Formulário e e.preventDefault()
formulario.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita recarregamento da página

  const textoTarefa = campoTarefa.value.trim(); // Ignora espaços vazios

  if (textoTarefa !== "") { //
    const novaLiForm = document.createElement("li"); //
    novaLiForm.textContent = textoTarefa;
    lista.append(novaLiForm); // Adiciona à lista
    campoTarefa.value = ""; // Limpa o campo
  }
});