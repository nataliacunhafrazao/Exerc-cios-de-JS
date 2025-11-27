function corrigir() {
    const respostas = ["q1-carlota", "q2-1789", "q3-Ada", "q4-Leopoldina", "q5-Jorge"];
    const questoes = ["q1", "q2", "q3", "q4", "q5"];
    let qtdAcertos = 0;
    
    for(let i = 0; i < questoes.length; i++) {
        let radios = document.getElementsByName(questoes[i]);
        let selected = Array.from(radios).find(radio => radio.checked);
        
        if(selected == null) {
            continue;
        }
        
        if(selected.id == respostas[i]) {
            qtdAcertos++;
        }
    }
    
    // Mostrar resultado
    let resultado = document.getElementById("resultado");
    resultado.textContent = "Você acertou " + qtdAcertos + " de 5";
    
    // Adicionar mensagem motivacional
    let mensagem = document.createElement("p");
    mensagem.style.marginTop = "10px";
    mensagem.style.fontStyle = "italic";
    
    if(qtdAcertos >= 4) {
        resultado.style.color = "#0000FF";
        mensagem.textContent = "Parabéns! Seu conhecimento sobre história e literatura é incrível! 😍";
    } else if(qtdAcertos >= 3) {
        resultado.style.color = "#0000FF";
        mensagem.textContent = "Bom trabalho! Você sabe bastante sobre história e literatura! 😊";
    } else {
        resultado.style.color = "#FF0000";
        mensagem.textContent = "Que pena! Tente novamente e estude um pouco mais. 😉";
    }
    
    // Limpar mensagem anterior e adicionar a nova
    let mensagemAnterior = document.getElementById("mensagem-motivacional");
    if(mensagemAnterior) {
        mensagemAnterior.remove();
    }
    mensagem.id = "mensagem-motivacional";
    resultado.insertAdjacentElement("afterend", mensagem);
}