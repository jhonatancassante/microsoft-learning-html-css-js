'use strict';
console.log('Aqui está uma mensagem escondida');
// Está é uma linha única de comentários

/* Aqui temos
várias linhas
de comentários */

// console.log('Este código não está mais ativo');

// Primeiro, você vai recuperar uma nova data do objeto interno do JavaScript com o new Date()
let today = new Date();
// Em seguida, você pode transformar o formato de data usando toDateString()
let formatDate = today.toDateString();
/* O HTML precisa saber em que local da página ou documento você
deseja adicionar essas informações, então recupere um elemento
usando getElementById('date') */
let selectElement = document.getElementById('date');
// A etapa final é inserir a cadeia de caracteres de data dentro do elemento selecionado com innerHTML.
selectElement.innerHTML = formatDate;