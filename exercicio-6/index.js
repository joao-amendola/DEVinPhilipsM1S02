descricao = `
[M1S02] Ex 6 - Construa uma calculadora
Faça 3 prompts ao usuário:
1. no primeiro, pergunte qual o tipo de cálculo ele deseja fazer (“+”, “-”, “*” ou “/”);
2. no segundo, pergunte o primeiro valor que deseja calcular;
3. no terceiro, o segundo valor que deseja calcular.

Em seguida, realize o cálculo e exiba na tela um “alert” contendo o texto “O resultado do seu cálculo é: X”, onde X é o resultado final do cálculo solicitado pelo usuário.

Realize o commit do exercício resolvido.
`

function calculadora(){
    let resultado
    const operacao = prompt("Selecione a operação (“+”, “-”, “*” ou “/”)")
    const numeroA = Number(prompt("Digite o primeiro valor que deseja calcular: "))
    const numeroB = Number(prompt("Digite o segundo valor que deseja calcular: "))

    if (isNaN(numeroA) || isNaN(numeroB)) return
    switch (operacao) {
        case '+':
            resultado = numeroA + numeroB
            alert(`${numeroA} + ${numeroB} = ${resultado}`)
            break
        case '-':
            resultado = numeroA - numeroB
            alert(`${numeroA} - ${numeroB} = ${resultado}`)
            break
        case '*':    
            resultado = numeroA * numeroB
            alert(`${numeroA} * ${numeroB} = ${resultado}`)
            break
        case '/':    
            resultado = numeroA / numeroB
            alert(`${numeroA} / ${numeroB} = ${resultado}`)
            break
    }
}

calculadora()