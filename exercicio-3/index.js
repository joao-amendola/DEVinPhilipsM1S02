descricao = `
[M1S02] Ex 3 - Tabuada

Utilizando estrutura de repetição realize a tabuada do número x e exiba ela da seguinte forma:
2 x 0 = 0
2 x 1 = 2
....
2 x 10 = 20

O número para realizar a tabuada deve ser solicitado via prompt e o resultado apresentado via alert.

dica: de uma olhadinha no for.

Realize o commit do exercício resolvido.
`

let numero = prompt("Digite um número para ver sua tabuada: ")
let resultadoStr = ''
let resultado = 0

function tabuada(){
    for (let i = 0; i < 11; i++) {
        resultado = numero * i
        resultadoStr += `${numero} * ${i} = ${resultado} \r\n`
      }
      alert(resultadoStr)
}

tabuada(numero)