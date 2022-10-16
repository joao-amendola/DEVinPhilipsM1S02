descricao = `
[M1S02] Ex 8 - Número primo
Percorra os números de o a 1000 e exiba no console os números primos e ao final a quantidade de números primos que existem nesse intervalo.

Realize o commit do exercício resolvido.
`

function exibePrimo(numero) {
    for (var divisores = 2; divisores < numero; divisores++) 
    if (numero % divisores == 0) return false;
    return true;
}

let somaTotal = 0

for (let i = 2; i < 1000; i++){
    if (exibePrimo(i)){
        somaTotal += 1
        console.log(i)
    }
}

console.log("Total de primos até 1000: " + somaTotal)