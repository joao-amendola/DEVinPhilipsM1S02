descricao = `
[M1S02] Ex 5 - Pares e Impares]
Exiba um prompt solicitando a entrada de um número para saber quantos pares e impares existem de 0 até o número digitado.
Calcule o número de pares e impares e exiba o resultado utilizando um alert.

Realize o commit do exercício resolvido.
`

let numero = 0
let numeroDePares = 0
let numeroDeImpares = 0
let resultadoStr = ''

function somar(){
    numero = parseInt(prompt("Digite um número para saber quantos pares e ímpares existem de 0 até o número digitado: "))
    for (let i = 0; i < numero; i++) {
        if (i % 2 == 0){
            numeroDePares += 1
        }
        else {
            numeroDeImpares += 1
        }
    }
    apresentacaoDeResultado = `De 0 até ${numero} são ${numeroDePares} números pares e ${numeroDeImpares} números ímpares`
    alert(apresentacaoDeResultado)
}

somar()
