// CINEMA:

// 1. Um cinema faz reservas de 5 ingressos para uma sala, sendo 2 para meia entrada, para a reserva, basta informar o nome e se é meia ou não, é permitido apenas uma reserva por nome.
// 2. Após os 5 reservados, o cliente pode retirar se ingresso informando o seu nome, o ingresso irá informar seu número, nome de quem reservou e se é meia ou não.


//Reserva 5 ingressos. desses 2 para meia
//informar nome e se é meia ou nao
//permitido 1 reserva por nome
//o cliente retira o ingresso informando o nome
//o ingresso irá informar seu número, nome e se é meia


const prompt = require("prompt-sync")();

//Entrada

let nome = ''
let valor = ''
let lmtMeia = 2;
let listaNome = [];
let listaValor = [];
let valorAux = 0;
let retiradaIngresso;
let nomeRetirada;
let indiceRetirada;


//Processamento

for(let i = 0 ; i < 2 ; i++){
    
    nome = prompt("Para reservar digite seu nome ");  


    var auxiliar = listaNome.indexOf(nome);
    if(auxiliar === -1) {
      console.log('Olá, ' + nome +' você pode realizar a reserva');
      listaNome.push(nome)
    } else {
      console.log("Infelizmente já temos uma reserva neste nome");
      break;
    }

    valor = prompt("O ingresso é de meia entrada? (sim / nao)");    
    

    if(valor == 'sim'){
        valorAux  = valorAux + 1;
        console.log(valorAux);
    }

    if(valorAux > 2 && valor == 'sim'){
        console.log("Não temos mais a opção de meia entrada apenas valor de entrada inteira.");
        console.log("Ainda deseja realizar a reserva? ");

    } else {
        listaValor.push(valor);
    }       
}

retiradaIngresso = prompt("Diga seu nome para a retirar o ingresso ");

let buscarNome = listaNome.indexOf(retiradaIngresso);
console.log(buscarNome);

listaNome.forEach(function(valor, indice){

    if(retiradaIngresso == valor){
        nomeRetirada
    }
    
    nomeRetirada = retiradaIngresso == valor;
    indiceRetirada = retiradaIngresso == indice;

})

console.log(nomeRetirada, indiceRetirada)


















