let tentative = prompt("Adivinhe one number is 10 or 1")
const match = Math.round(Math.random() * 10)

while (Number(tentative) != match) {
  tentative = prompt("Errou, digite um numero:")
}
alert("Parabéns você acertou o numero é" + tentative)
