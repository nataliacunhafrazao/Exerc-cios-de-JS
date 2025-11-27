        alert ("Olá,Mundo!");
        const nome=prompt("Olá digite seu nome:");
        nome=alert("Olá,bem-vindo(a):"+(nome))
        //para esse tipo de estrutrura não preciso concatenar mais com ++ duas vezes no código!

        console.log("Hello,World!");//Ponto e vírgula ; no final (opcional em JS, mas recomendado)
        let mensagem=("Hello,World!");
        console.log(mensagem);

        let num1 = parseInt(prompt("Digite um número:"));
        let num2 = parseInt(prompt("Digite outro número:"));
        alert("A soma dos dois números é:" + (num1 + num2));

        const primeiroNome=prompt("Digite seu Primeiro nome: ");
        const sobrenome=prompt("Digite seu sobrenome: ");
        alert("Olá" +primeiroNome+ "  "+sobrenome);
        //Não esquecer de declarar let e Const antes da variáveis!

        const n3=parseInt(prompt("Digite um número:"));
        const n4=parseInt(prompt("Digite outro número:"));
        alert("A multiplicação dos números digitados é:" + (n3*n4));//quando houver multiplicação separar a operação entre parentêses!//sempre que for converter string em inteiro na concatenação colocar a operção entre parentêses.
        
    const impar=parseInt(prompt("Digite um número: "));
    const par=parseInt(prompt("Digite outro número: "));

        if(impar %2==0){
    alert("Este é um  número par")
        }
        else{
            alert("Este é um número ímpar");
        }

    const idade=parseInt(prompt("Digite sua idade:"));

    if(idade >=18 ){
        alert(" O usuário é maior de idade!")
    }else{
        alert("O usuário é menor de idade!");
    }

    let contador= 10;
    while(contador >=0){
        alert(`contagem: ${contador}`)
        contador--;
    }
    alert("Contagem finalizada!");



    let soma = parseFloat(prompt("Digite um número (digite negativo para parar):"));
    let soma2;
    let somaTotal = 0;

    // Verifica se o PRIMEIRO número é positivo
    while (soma >= 0) {
        soma2 = parseFloat(prompt("Digite outro número:"));
        
        // Se o SEGUNDO número for negativo, para o loop
        if (soma2 < 0) {
            break;
        }
        
        // Só soma se ambos forem positivos
        somaTotal = soma + soma2;
        alert(`Soma parcial: ${somaTotal}`);
        
        // Pede novo primeiro número para continuar
        soma = parseFloat(prompt("Digite um novo número (negativo para parar):"));
    }

    alert("Você digitou um número negativo. Programa encerrado.");

    for(let i= 1; i<=10; i ++){
        alert(i)
    };

    num=parseFloat(prompt("digite um número:"));
    som=0;

    for(let i= 1;i<=nun;i++);{
        som+=i;
    }

    alert("A soma dos números: " +(num+som))