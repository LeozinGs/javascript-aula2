
//Código antigo para comparação.
//
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Número Secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = `Escolha um número entre 1 e 100`;


// Código novo.
let numeroMaximo = 10;
let numSecreto = gerarNumAleatorio();

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTexto('h1', 'Jogo do número secreto!');
exibirTexto('p', `Escolha um número entre 1 e ${numeroMaximo}`);

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numSecreto);
}

function gerarNumAleatorio() {
    return parseInt(Math.random() * numeroMaximo + 1);
}

console.log(numSecreto);




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