//* primeiro passo : linkar o arquivo html com o aquivo JS;
//fizemos isso lá no arquivo HTML com código : <script src="./aula.js"></script>,após o tittle;
//Dentro do src basta colocar o nome do arquivo JS.
// Como o HTML já está vinculado ao JS não precisamos utizar a propriedade  document.getElementById("").textContent= """,basta escrever o h1 no documento HTLM para aparecer o título na página!
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

alert("Hello Word!")

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//* let serve para atribuir uma variável
// atribuímos a variável e com o let e printamos o resultado com o console.log. No nosso caso não vai dar para enxergar pq o console tá bugado. Lembre-se que printar no console é diferente de printar na página HTML!.
//Em javascript  não se começa a atribuir uma variavél com um numéro.Ex) 1numero(está errado), a forma correta: numero1. Esta é uma linguagem case sentive.Lembre-se de utilizar o camel case nas variáveis.
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let numero=5;
console.log(numero);

let nome= prompt ("Digite seu nome:");
alert("Olá : " + nome+"!");


//O problema no seu código é que o prompt retorna os valores como strings, então o operador + está concatenando as strings em vez de somar os números.
//Solução: Converter as strings para números
//Você pode usar Number(), parseInt() ou o operador + antes das variáveis para converter os valores em números.
n1=parseInt(prompt("Digite o primeiro número:"));
n2=parseInt(prompt("Digite o segundo número:"));
alert(n1+n2);


//EX 2) de como fazer a conversão 
n3= Number(prompt("Digite o terceiro número:"));
n4=Number(prompt("Digite o quarto número:"));
alert(n3+n4);

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let  ValorIngressoAdulto=20;
ValorIngressoAdulto=30;
console.log(ValorIngressoAdulto)
//O Let permite alterar uma variável múltiplas vezes mesmo que ela já tenha sido atribuída anteriormente,já o const não permite alteração de valores;

let EstaAprovado = true;//  True e false tipo boleano de variável;
let sobrenome= undefined;// Tipo de variavél indefinida;
let corSelecionado=null;//null é utilizado para redefinir um valor;
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//javaScript possui tipagem dinâmica,ou seja,ele identifica qual é o tipo de varivél em tempo de execução. Para verificar o tipo  de variavél se usa o typeof;

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


