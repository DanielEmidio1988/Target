// 1) Observe o trecho de código abaixo:

// int INDICE = 13, SOMA = 0, K = 0;

// enquanto K < INDICE faça
// {
// K = K + 1;
// SOMA = SOMA + K;
// }

// imprimir(SOMA);

// Ao final do processamento, qual será o valor da variável SOMA?

const indice = 13
let k = 0
let soma = 0

for(let k=0; k<indice;k++){
    soma = soma + k
}
console.log("EXERCICIO 1\nValor da final da variavel SOMA: ", soma)


// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor 
// sempre será a soma dos 2 valores anteriores 
// (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na 
// linguagem que desejar onde, informado um número, ele calcule a sequência de 
// Fibonacci e retorne uma mensagem avisando se o número informado pertence ou 
// não a sequência.

// IMPORTANTE:
// Esse número pode ser informado através de qualquer entrada de sua preferência 
// ou pode ser previamente definido no código;

const numUsuario = Number(prompt("Informe o número que deseja calcular a sequência de Fibonacci"))
let numAtual = 1
let numAnterior = 0
let numero = 0
let numApoio = 0
const seqFibonacci = [0,1]
let i = 0

while(i <= numUsuario){
    numero = numAtual + numAnterior
    numAnterior = numAtual
    numAtual = numero
    if (numero <= numUsuario){
    seqFibonacci.push(numero)
    }
    i++
}

for (i=0;i < seqFibonacci.length;i++){
    if(seqFibonacci[i] === numUsuario){
        numApoio = numUsuario
    }
}

if(numApoio > 0){
    console.log(`Numero ${numUsuario} pertence a sequência de Fibonacci`)
}else{
    console.log(`Numero ${numUsuario} NÂO pertence a sequência de Fibonacci`)
}       

console.log("Sequência de Fibonacci:", seqFibonacci)



// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const faturamentoMes = [
	{
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
]

console.log("EXERCICIO 3")

function maiorFaturamento(numero){
    let numeroAuxiliar = 0
    let diaAuxiliar = 0
    for (let i=0; i<numero.length;i++){
        if (numeroAuxiliar < numero[i].valor){
            numeroAuxiliar = numero[i].valor
            diaAuxiliar = numero[i].dia
        }        
    }
    return console.log(`O Maior Faturamento foi no dia ${diaAuxiliar} no valor de R$ ${numeroAuxiliar}`)
}

function menorFaturamento(numero){
    let numeroAuxiliar = 0
    let i=0
    let diaAuxiliar = 0
    for (i=0; i<numero.length;i++){
        if(numeroAuxiliar <= 0){
            numeroAuxiliar = numero[i].valor
        }
        if (numero[i].valor > 0){
            if (numeroAuxiliar > numero[i].valor){
            numeroAuxiliar = numero[i].valor
            diaAuxiliar = numero[i].dia
            } 
        }       
    }
    return console.log(`O Menor Faturamento foi no dia ${diaAuxiliar} no valor de R$ ${numeroAuxiliar}`)
}

function mediaFaturamento(numero){
    let numeroAuxiliar = 0
    let mediaFaturaMes = 0
    let diasMaiorFaturamento = 0
    let diasFaturamento = 0

    for (let i=0; i<numero.length;i++){
        if (numero[i].valor > 0){
            numeroAuxiliar += numero[i].valor
            diasFaturamento++
        }
    }
    mediaFaturaMes = numeroAuxiliar/diasFaturamento

    for (let i=0;i<numero.length;i++){
        if(numero[i].valor > mediaFaturaMes){
            diasMaiorFaturamento++
        }
    }

    return console.log(`A média de faturamento total do mês foi de R$ ${mediaFaturaMes.toFixed(2)} ao longo de ${diasFaturamento} dias, com ${diasMaiorFaturamento} dias acima da média de Faturamento.`)
}

maiorFaturamento(faturamentoMes)
menorFaturamento(faturamentoMes)
mediaFaturamento(faturamentoMes)

// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
//  

const sp = 67836.43
const rj = 36678.66
const mg = 29229.88
const es = 27165.48
const outros = 19849.53
let somaEstados

somaEstados = sp + rj + mg + es + outros
let percentualSP =  ((sp/somaEstados)*100).toFixed(2)
let percentualRJ =  ((rj/somaEstados)*100).toFixed(2)
let percentualMG =  ((mg/somaEstados)*100).toFixed(2)
let percentualES =  ((es/somaEstados)*100).toFixed(2)
let percentualOutros =  ((outros/somaEstados)*100).toFixed(2)
console.log("EXERCICIO 4")
console.log("Faturamento total: R$ ",somaEstados)
console.log(`São Paulo representa ${percentualSP}% do faturamento Total`)
console.log(`Rio de Janeiro representa ${percentualSP}% do faturamento Total`)
console.log(`Minas Gerais representa ${percentualSP}% do faturamento Total`)
console.log(`Espirito Santo representa ${percentualSP}% do faturamento Total`)
console.log(`Outros Estados representam ${percentualSP}% do faturamento Total`)


// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua 
// preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

const nome = prompt("Qual o seu nome?") 

function nomeReverso(nom){
    let nomeAuxiliar = ""
    for (let i = nom.length-1; i>=0;i--){
        nomeAuxiliar += nom[i]
    }
    console.log("EXERCICIO 5")
    console.log("Seu nome Reverso", nomeAuxiliar)
    return alert(`Seu nome Reverso ${nomeAuxiliar}`)
}

nomeReverso(nome)


// NÃO SE ESQUEÇA DE INSERIR O LINK DO SEU REPOSITÓRIO NO GITHUB COM O CÓDIGO FONTE QUE VOCÊ DESENVOLVEU
