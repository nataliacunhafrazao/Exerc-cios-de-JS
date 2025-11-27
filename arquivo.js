//Questão:1)
let nome2='Rafael';
let idade=25;

let pessoa={
    nome2: 'Rafael',
    idade:25
};  // nesta parte criamos um objeto  chamado pessoa,mas antes atribuímos as variavéis acima.


console.log(pessoa);// aqui printamos o valor do objeto ('Rafael') no console 

NomeCarro='Tesla';
ModeloCarro=2020;
CorCarro='Azul';

let veiculo={
    NomeCarro : 'Tesla',
    ModeloCarro: 2020,
    CorCarro:'Azul'
}

console.log(veiculo);


// Questão:2)
let banana ={
    cor: "amarelo",
    preco:2.99 
};//Exemplo com números e strings

let lerLivro = {
    lido: true,
    NaoLido:false
};//Exemplo com Boleanos

let cores =["azul","Verde","amarelo","vermelho"];
console.log(cores[1])//Exemplo com Arrays


 let endereco = {
       rua: "Rua Principal",
       cidade: {
           nome: "Recanto das Emas",
           estado: "DF"
       }
   };//Exemplo com Objetos


     let calculadora = {
       somar: function(a, b) {
           return a + b;
       }
   };//Exemplo com funções


     let produto = {
       nome: "Fone de Ouvido JBL",
       tamanho: null, // Valor nulo
       descricao: undefined // Valor indefinido
   };//Exemplo com valores nulos


   //Questão:4)

  // Observe o objeto abaixo:

const aluno = {
  nome: "João",
  idade: 20,
  aprovado: true,
  saudar: function() {
    console.log(`Olá, meu nome é ${this.nome}`);
  }
};

aluno.saudar();//Exibe o conteúdo do console.log(chamada do método saudar)


//Questão:5)


const aluno2 = {
  nome: "Marta",
  idade: 19,
  aprovado: true,
  endereco: {
    rua: "Campina Grande",
    numero: 123,
    cidade: "São Paulo",
    estado: "SP",
    cep: "01234-567"
  }
};

// Acessando propriedades do objeto aninhado
console.log(aluno.nome); // Exibe: Marta
console.log(aluno.endereco.rua); // Exibe: Campina Grande
console.log(aluno.endereco.cidade); // Exibe: São Paulo


//Questão:9)

function Livro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
  this.exibirInfo = function() {
    console.log(`Título: ${this.titulo}, Autor: ${this.autor}`);
  };
}//Instaciar a classe


const livro1 = new Livro("O Conto Da Aia", "Margaret Atwood");
livro1.exibirInfo(); // Exibe: Título: O Conto Da Aia, Autor: Margaret Atwood