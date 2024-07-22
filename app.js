
//Código antigo para comparação.
//
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Número Secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = `Escolha um número entre 1 e 100`;


let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numSecreto = gerarNumAleatorio();
let tentativas = 1;

// Código novo.
// Função que escreve texto na tela nos parametros definidos.
function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

// Função que engloda as duas chamadas da função que escreve texto nos elementos HTML.
function exibirMensagemInicial() {

    //Chamadas da função e definição de parâmetros para adicionar texto aos elementos HTML.
    exibirTexto('h1', 'Jogo do número secreto!');
    exibirTexto('p', `Escolha um número entre 1 e ${numeroMaximo}`);
}

// Chamada da função anterior.
exibirMensagemInicial();

// Função que verifica se o botão "Chutar" foi clicado.
function verificarChute() {

    // Variavel que pega o valor digitado no campo "input".
    let chute = document.querySelector('input').value;

    // Condição que verifica se o valor do chute é o mesmo do número secreto quando o botão chutar for clicado.
    if (chute == numSecreto) {

        // Chamada da função que exibe o texto na tela.
        exibirTexto('h1', 'ACERTOU!');

        // Variavel que guarda uma condição onde verifica se o número de tentativas é maior que 1 para colocar a palavra "tentativa" no plural.
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

        // Variavel que guarda a mensagem de vitória com a quantidade de tentativas feitas até o acerto.
        let mensagemTentativas = `Você descobriu o número secreto em: ${tentativas} ${palavraTentativa}!`;

        // Chamada da função que exibe o texto na tela.
        exibirTexto('p', mensagemTentativas);

        // Removendo o atributo "disabled"(desabilitado) do botão "Novo Jogo".
        document.getElementById('reiniciar').removeAttribute('disabled');
    
    // Se a verificação anterior for falsa...
    } else {

        // Verificação para saber se o número secreto é maior ou menor que o valor do chute.
        chute > numSecreto ? exibirTexto('p', 'O número secreto é menor.') : exibirTexto('p', 'O número secreto é maior.');

        // Adiciona 1 às tentativas.
        tentativas++;

        // Chama a função que limpa o campo do "input"
        limparCampo();
    }
}

// Função que gera um valor aleatório
function gerarNumAleatorio() {

    // Gera um valor aleatório de 1 até o número máximo definido na variável numMaximo.
    let numeroEscolhindo = parseInt(Math.random() * numeroMaximo + 1);

    // Define uma variável para guardar o tamanho da lista de números sorteados.
    let elementosNaLista = listaNumerosSorteados.length;

    // Condição que verifica se o tamanho da lista é o mesmo da variável numMaximo e se a condição for verdadeira limpa a lista.
    if (elementosNaLista == numeroMaximo) {
        listaNumerosSorteados = [];
    }

    // Condição que: se o número gerado estiver na lista de números ja sorteados ele gera outro número aleatório.
    // Se não ele retorna o numero gerado.
    if(listaNumerosSorteados.includes(numeroEscolhindo)) {
        return gerarNumAleatorio();
    }else {
        listaNumerosSorteados.push(numeroEscolhindo);
        return numeroEscolhindo;
    }
}

// Função que limpa o campo de input.
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

// Função que reinicia o jogo ao estado inicial.
function reiniciarJogo() {
    numSecreto = gerarNumAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    console.log(listaNumerosSorteados);
}