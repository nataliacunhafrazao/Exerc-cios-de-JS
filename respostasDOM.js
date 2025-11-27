// Questão 1: O que é o DOM e qual o seu papel na manipulação de páginas web com JavaScript?
// Resposta: O DOM (Document Object Model) é uma representação em árvore dos elementos de uma página web, criada pelo navegador a partir do código HTML. Ele organiza os elementos como objetos JavaScript, permitindo que o JavaScript acesse, modifique, adicione ou remova elementos, atributos e conteúdo dinamicamente. O DOM é essencial para criar páginas interativas, como formulários reativos ou atualizações em tempo real.

// Questão 2: Qual a diferença entre getElementById() e querySelector()? Dê um exemplo prático de uso de cada um.
const exemploGetElementById = document.getElementById("meuDiv");
exemploGetElementById.style.backgroundColor = "blue"; // Exemplo: HTML <div id="meuDiv">Olá</div>

const exemploQuerySelector = document.querySelector(".minhaClasse");
exemploQuerySelector.style.color = "white"; // Exemplo: HTML <div class="minhaClasse">Olá</div>
// Resposta: getElementById() seleciona um elemento por seu id, retornando um Element ou null. É mais rápido para ids. querySelector() seleciona o primeiro elemento que corresponde a um seletor CSS, sendo mais flexível, contudo é mais lento.

// Questão 3: Explique o que é a HTMLCollection retornada pelo método getElementsByClassName() e como ela se comporta ao adicionar novos elementos com a mesma classe dinamicamente.
const itens = document.getElementsByClassName("item");
console.log(itens.length); // Exemplo: HTML <div class="item">Item 1</div><div class="item">Item 2</div> Exibe: 2
const novoDiv = document.createElement("div");
novoDiv.className = "item";
document.body.appendChild(novoDiv);
console.log(itens.length); // Exibe: 3 (HTMLCollection é coleção


// Resposta: HTMLCollection é uma coleção viva de elementos retornada por getElementsByClassName(). Ela atualiza automaticamente quando novos elementos com a mesma classe são adicionados ou removidos do DOM.

// Questão 4: Selecionar todos os itens com a classe item e alterar a cor do texto para azul usando um loop
const itensQuestao4 = document.getElementsByClassName("item");
for (let item of itensQuestao4) {
  item.style.color = "blue";
} // Exemplo: HTML <ul id="lista"><li class="item">Item 1</li><li class="item">Item 2</li></ul>

// Questão 5: Explique a diferença entre innerHTML e textContent. Quando é mais indicado usar cada um deles?
const divInnerHTML = document.getElementById("meuDiv");
console.log(divInnerHTML.innerHTML); // Exemplo: HTML <div id="meuDiv">Olá <strong>mundo</strong></div> -> Exibe: Olá <strong>mundo</strong>
divInnerHTML.innerHTML = "<p>Novo conteúdo</p>";

const divTextContent = document.getElementById("meuDiv");
console.log(divTextContent.textContent); // Exibe: Olá mundo
divTextContent.textContent = "Novo texto";
// Resposta: innerHTML manipula conteúdo HTML, incluindo tags, mas pode ser vulnerável a XSS. textContent manipula texto puro, sendo mais seguro. Use innerHTML para adicionar HTML; use textContent para texto seguro.

// Questão 6: Criar uma função que altere src, alt e width de uma imagem
function alterarImagem() {
  const imagem = document.getElementById("foto");
  imagem.src = "imagem2.jpg";
  imagem.alt = "Nova imagem";
  imagem.style.width = "300px";
} // Exemplo: HTML <img id="foto" src="imagem1.jpg" alt="Imagem 1">
alterarImagem();

// Questão 7: Adicionar um parágrafo com "Bem-vindo!" dentro de <div id="conteudo">
const div = document.getElementById("conteudo");
const novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Bem-vindo!";
div.appendChild(novoParagrafo);

// Questão 8: Métodos para navegar entre elementos do DOM
// parentNode: Retorna o nó pai. Exemplo: li.parentNode retorna <ul> para <li> dentro de <ul>.
// children: Retorna HTMLCollection com filhos diretos. Exemplo: ul.children retorna <li>s de um <ul>.
// nextElementSibling: Retorna o próximo elemento irmão. Exemplo: li1.nextElementSibling retorna <li> seguinte.
// previousElementSibling: Retorna o elemento irmão anterior. Exemplo: li2.previousElementSibling retorna <li> anterior.

// Questão 9: Analise o código
let paragrafo = document.querySelector("p");
console.log(paragrafo.textContent); // Exibe: Olá, mundo! (HTML: <p><strong>Olá</strong>, mundo!</p>)
// Resposta: textContent retorna o texto puro, ignorando tags HTML, então exibe "Olá, mundo!".

// Questão 10: Criar uma função que adicione um <li> com "Novo item" em uma lista com id="minhaLista"
function adicionarItem() {
  const lista = document.getElementById("minhaLista");
  const novoItem = document.createElement("li");
  novoItem.textContent = "Novo item";
  lista.appendChild(novoItem);
}
adicionarItem();