descricao = `
[M1S02] Ex 2 - Dado uma idade exibe a classificação dela
Utilizando estrutura condicional exiba a descrição da classificação da idade da pessoa de acordo com os dados abaixo:

Jovens - Indivíduos de até 15 anos;
Adultos - Indivíduos com idade entre 16 até 64 anos;
Idosos - Indivíduos de 65 anos em diante.

Utilize prompt para solicitar a idade e alert para exibir a classificação.

Realize o commit do exercício resolvido.
`


let idade = prompt("Digite a idade: ")

function classifica(){
    if (idade < 16) {
        alert("Jovens")
    } else if ( 16 <= idade && idade < 65 ) {
        alert("Adultos")
    } else {
        alert("Idosos")}
}

classifica(idade)