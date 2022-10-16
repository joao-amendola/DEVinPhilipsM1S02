descricao = `
[M1S02] Ex 9 - Construa uma “calculadora” de P.A
Ao entrar na página, seu script deve realizar 2 prompts ao usuário: um solicitando um “valor inicial”, e outro um valor para a “raíz”. Após o usuário inserir esses valores, o seu script deve calcular os 10 primeiros valores da sequência e exibir na tela.
Relembrando: P.A. (Progressão Aritmética) é uma sequência numérica em que cada termo, a partir do segundo, é igual à soma do termo anterior com a raiz. Exemplo: Valor inicial = 1; raiz = 3; P.A. = 1, 4, 7, 10, 13, 16, 19, 22, 25, 28.

Realize o commit do exercício resolvido.
`


let valorInicial = parseInt(prompt("Digite o valor inicial: "))
let raiz = parseInt(prompt("Digite a raíz: "))
let apresentacaoDeResultado = ''
let resultadoStr = ''


function calculaPA(valorInicial,raiz){
    for (let index = 0; index < 10; index++) {
        valorInicial += raiz
        resultadoStr = (resultadoStr + ` - ${valorInicial}`)
    }
}

calculaPA(valorInicial,raiz)
apresentacaoDeResultado = `A progressão aritmética de valor inicial ${valorInicial} e raíz ${raiz} é 

${valorInicial}${resultadoStr}.`
alert(apresentacaoDeResultado)

