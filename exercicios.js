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

// // Crie uma lista vazia, com o nome listaGenerica.
// let listaGeneria = [];

// // Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
// // Pt. 2 - Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
// let linguagensDeProgramacao = ['Javascript', 'C', 'C++', 'Kotlin', 'Python'];

// linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');

// console.log(linguagensDeProgramacao);

// // Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
// // Pt. 2 - Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
// let nomes = ['Leonardo', 'Mizu', 'Kesia'];
// console.log(nomes[0]);
// console.log(nomes[1]);
// console.log(nomes[nomes.length - 1]);
