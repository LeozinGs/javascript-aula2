
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




// // EXERCÍCIOS:
// // Criar uma função que exibe "Olá, mundo!" no console.
// function olaMundo() {
//     console.log('Olá, Mundo!');
// }

// olaMundo();

// // Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
// function olaNome(nome) {
//     console.log(`Olá, ${nome}`);
// }

// olaNome('Leonardo');

// // Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
// let num = 23
// let dobro = dobroNumero(num);

// function dobroNumero(numero) {
//     return numero * 2;
// }

// dobroNumero(num);
// console.log(`O dobro de ${num} é: ${dobro}`);

// // Criar uma função que recebe três números como parâmetros e retorna a média deles.
// let n1 = 24;
// let n2 = 32;
// let n3 = 15;

// function mediaNumeros(a, b, c) {
//     return (a + b + c) / 3;
// }

// let media = mediaNumeros(n1,n2,n3);
// console.log(`A média de ${n1} + ${n2} + ${n3} é: ${media}`);

// // Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
// let num1 = 57;
// let num2 = 87;

// function maiorNum(a, b) {
//     return a > b ? a : b;
// }

// let maior = maiorNum(num1, num2);
// console.log(`O maior numero entre ${num1} e ${num2} é: ${maior}`);

// // Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
// let numQuadrado = 5;

// function quadradoNum(numero) {
//     return numero * numero;
// }

// let quadrado = quadradoNum(numQuadrado);
// console.log(`O quadrado de ${numQuadrado} é: ${quadrado}`);

// //Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
// let pesoKg = 90;
// let alturaMetros = 1.90;
// let imc;

// function calcularIMC(peso, altura) {
//     imc = peso / (altura * altura);
//     return imc;
// }

// calcularIMC(pesoKg, alturaMetros);
// console.log(imc);

// //Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
// let num = 5;
// let fatorial = 0;

// function calcularFatorial(numero) {
//     fatorial = numero;
//     for (i = numero; i > 1; i--) {
//         fatorial = fatorial * (i - 1);
//     }
//     return fatorial;
// }
// calcularFatorial(num);
// console.log(fatorial);

// //Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
// let dolar = 3;
// let cotacao = 5.55;

// function converteDolar(a, b) {
//     return a * b;
// }

// let reais = converteDolar(dolar, cotacao);
// console.log(reais);

// //Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
// let alturaSala = 5.5;
// let larguraSala = 9.6;

// function calcularAreaPerimetro(n1, n2, tag) {
//     let perimetroArea = document.querySelector(tag);
//     perimetroArea.innerHTML = `O perímetro da sala é: ${(n1 * 2) + (n2 * 2)} e a área é: ${n1 * n2}.`;
// }
//  calcularAreaPerimetro(larguraSala, alturaSala ,'p');

// //Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
// let raio = 5;

// function calcularAreaPerimetroCirculo(r, tag) {
//     let perimetroAreaCircular = document.querySelector(tag);
//     perimetroAreaCircular.innerHTML = `A área da sala circular é de: ${3.14 * (r * r)} m².\n O perímetro da sala circular é de: ${(2 * 3.14) * r} m`;
// }

// calcularAreaPerimetroCirculo(raio,'p');

// //Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
// let numeroTabuada = 5;

// function tabuadaNumero(numero1, tag) {
//     let tabuada = document.querySelector(tag);
//     tabuada.innerHTML = (`A taubada do ${numero1} é:\n
//         ${numero1} x 1 = ${numero1 * 1}\n
//         ${numero1} x 2 = ${numero1 * 2}\n
//         ${numero1} x 3 = ${numero1 * 3}\n
//         ${numero1} x 4 = ${numero1 * 4}\n
//         ${numero1} x 5 = ${numero1 * 5}\n
//         ${numero1} x 6 = ${numero1 * 6}\n
//         ${numero1} x 7 = ${numero1 * 7}\n
//         ${numero1} x 8 = ${numero1 * 8}\n
//         ${numero1} x 9 = ${numero1 * 9}\n
//         ${numero1} x 10 = ${numero1 * 10}\n`)
// }

// tabuadaNumero(numeroTabuada, 'p');