descricao = `
[M1S02] Ex 4 - Somar números
Utilizando estrutura de repetição, some os números digitados através do prompt
enquanto o número for diferente de -1, quando digitado -1 pare de exibir o prompt e 
exiba através de um alert o resultado da soma dos números digitados.

Realize o commit do exercício resolvido.
`

let numero = 0
let soma = 0
let resultadoStr = ''

function somar(){
    while (numero != -1){
        soma += numero
        numero = parseInt(prompt("Digite um número para somar, -1 visualizar o resultado: "))
        if (numero != -1){
            resultadoStr = (resultadoStr + ` + ${numero}`)
        }
        
    }
    apresentacaoDeResultado = `A soma de ${resultadoStr.substring(2)} é igual a ${soma}`
    alert(apresentacaoDeResultado)
}

somar()
