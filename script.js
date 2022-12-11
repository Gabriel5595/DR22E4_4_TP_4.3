const nota1 = +prompt("Digite a primeira nota: ");
const nota2 = +prompt("Digite a segunda nota: ");
const nota3 = +prompt("Digite a terceira nota: ");

function calcMedias() {
    sumMedias = nota1 + nota2 + nota3;
    media = sumMedias / 3;
    return media;
}

console.log(`A média das notas ${nota1}, ${nota2} e ${nota3} é: ${calcMedias()}`)