const n1 = prompt("Digite o primeiro numero:")
const n2 = prompt("Digite o segundo numero:")

const soma = Number(n1 + n2)
const sub = Number(n1 - n2)
const divisão = Number(n1 / n2)
const mult = Number(n1 * n2)

alert(`
  Resultados:
  
  Soma: ${soma}
  Subtração: ${sub}
  Divisão: ${divisão}
  Multiplicação: ${mult}
`)
