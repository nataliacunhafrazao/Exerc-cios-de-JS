alert("Olá,Mundo!");
let nome = prompt("Digite seu nome:");
alert ("Olá " + nome);
const n1 = parseInt(prompt("Digite um número inteiro:"));
const n2 = parseInt(prompt("digite o segundo número inteiro:"));
alert("A soma dos dois números é :" + (n1 + n2));//Lembre-se que operações ficam dentro do parênteses,sem isso o javascript entende como concatenação de strings

console.log(`A soma dos dois números é: ${n1 + n2}`);


const nome2 = prompt('Digite seu primeiro nome:');
const sobrenome = prompt('Digite seu sobrenome:');
alert("Olá,bem-vindo(a):!" + (nome2 + " " + sobrenome));//Usar essa estrutura  para que o nome e sobrenome não fiquem grudados na saída.


const n3=parseFloat(prompt("Digite um número:"));
const n4=parseFloat(prompt("Digite um outro número:"));
alert(`O resultado da multiplicação é : " ${n3*n4}`);//lembrar de mudar os sinais na hora de fazer a multiplicação

const var1=parseFloat(prompt("Digite um número:"));
if( var1 %2===0){
    alert("Este é um número par")
}
else{
    alert("Este é um número ímpar")
}

const var2=parseFloat(prompt("Digite um número:"));
const var3=parseFloat(prompt("Digite outro número:"));
if(var2 > var3){
    alert("O primeiro número digitado é maior que o segundo");
}
else{
alert("O segundo número digitado é maior que o primeiro número")
}

const var4=parseInt(prompt("Digite sua idade:"));
if(var4 >=18 ){
alert("O usuário é maior de idade");
}
else{
alert("O usuário é menor de idade");
}

//parei no exercício 9